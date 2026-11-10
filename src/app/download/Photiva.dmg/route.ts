const RELEASE_URL =
  "https://github.com/sgoodman-debug/photivareleases/releases/latest/download/Photiva.dmg";

async function serveInstaller(request: Request) {
  const upstream = await fetch(RELEASE_URL, {
    method: request.method === "HEAD" ? "HEAD" : "GET",
    redirect: "follow",
    cache: "no-store",
  });

  if (!upstream.ok) {
    return new Response("The Photiva installer is temporarily unavailable.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const headers = new Headers();
  headers.set("Content-Type", "application/x-apple-diskimage");
  headers.set("Content-Disposition", 'attachment; filename="Photiva.dmg"');
  headers.set("Cache-Control", "private, no-store");
  headers.set("X-Content-Type-Options", "nosniff");

  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);

  return new Response(request.method === "HEAD" ? null : upstream.body, {
    status: 200,
    headers,
  });
}

export const GET = serveInstaller;
export const HEAD = serveInstaller;
