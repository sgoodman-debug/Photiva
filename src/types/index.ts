export interface Feature {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  screenshotLabel: string;
  screenshot?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ComparisonRow {
  feature: string;
  photiva: "Yes" | "Partial" | "No";
  subscriptionApps: "Yes" | "Partial" | "No";
  freeTools: "Yes" | "Partial" | "No";
}

export interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
}
