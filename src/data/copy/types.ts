export interface CtaLink {
  headline: string;
  label: string;
  href: string;
  microcopy?: string;
}

export interface LinkCta {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  title: string;
  body: string;
}

export interface AudienceCard {
  title: string;
  problemHeadline: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface PageHeader {
  eyebrow?: string;
  headline: string;
  subcopy?: string;
  /** Substring of headline rendered in ember accent colour */
  accent?: string;
  /** Audience words cycled with a typewriter effect in accent colour */
  accentRotate?: readonly string[];
}
