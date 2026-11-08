/**
 * Remembers where a visitor came from (UTM tags, ad click IDs or referring
 * site) so a later purchase can be credited to the right channel.
 *
 * The source is kept in this browser's localStorage only and is passed to the
 * Lemon Squeezy checkout as custom data, which then appears on the order.
 * Nothing about the visitor's photos or Mac is involved.
 */

const STORAGE_KEY = "photiva_source";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

export interface VisitSource {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  msclkid?: string;
  referrer?: string;
  landing_page?: string;
  captured_at: string;
}

const PARAM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "msclkid"] as const;

function read(): VisitSource | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as VisitSource;
    if (Date.now() - Date.parse(parsed.captured_at) > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function write(source: VisitSource) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(source));
  } catch {
    // Storage blocked (private mode etc.): attribution is best-effort.
  }
}

function referringDomain(): string | undefined {
  if (!document.referrer) return undefined;
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    return host === window.location.hostname.replace(/^www\./, "") ? undefined : host;
  } catch {
    return undefined;
  }
}

/**
 * Call once per page load. A visit with campaign tags or an ad click ID always
 * replaces the stored source (last paid or tagged touch wins). A plain
 * referral only fills an empty slot, so returning direct visits never erase a
 * known source.
 */
export function captureVisitSource() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const tagged: Partial<VisitSource> = {};
  for (const key of PARAM_KEYS) {
    const value = params.get(key);
    if (value) tagged[key] = value.slice(0, 200);
  }
  const referrer = referringDomain();
  const existing = read();
  const now = new Date().toISOString();

  if (Object.keys(tagged).length > 0) {
    write({ ...tagged, referrer, landing_page: window.location.pathname, captured_at: now });
  } else if (!existing && referrer) {
    write({ referrer, landing_page: window.location.pathname, captured_at: now });
  }
}

/** Adds the stored source to a Lemon Squeezy checkout URL as checkout[custom][...] fields. */
export function withCheckoutSource(checkoutUrl: string): string {
  if (typeof window === "undefined") return checkoutUrl;
  const source = read();
  let url: URL;
  try {
    url = new URL(checkoutUrl);
  } catch {
    return checkoutUrl;
  }
  const fields: Record<string, string | undefined> = {
    ...(source ?? {}),
    source: source ? source.utm_source ?? (source.gclid ? "google_ads" : source.msclkid ? "microsoft_ads" : source.referrer) : "direct",
    checkout_page: window.location.pathname,
  };
  delete fields.captured_at;
  for (const [key, value] of Object.entries(fields)) {
    if (value) url.searchParams.set(`checkout[custom][${key}]`, value);
  }
  return url.toString();
}
