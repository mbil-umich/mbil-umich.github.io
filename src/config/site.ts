/**
 * Site-wide configuration.
 * Centralizes lab metadata, navigation, and external affiliation links so
 * pages, the navbar, and the footer all stay in sync from one place.
 */

export const site = {
  name: "Musculoskeletal Biomechanics & Imaging Laboratory",
  shortName: "MBIL",
  tagline:
    "Connecting tissue structure to joint function — advancing the assessment and rehabilitation of shoulder health in cancer survivorship and beyond.",
  parent: "School of Kinesiology",
  university: "University of Michigan",
  location: "Ann Arbor, Michigan",
  address: "830 N. University Ave., Ann Arbor, MI 48109",
} as const;

/** Principal investigator details (from CV). */
export const pi = {
  name: "David B. Lipps, Ph.D.",
  title: "Associate Professor of Movement Science",
  affiliations: [
    "School of Kinesiology, University of Michigan",
    "Affiliate, Biomedical Engineering, College of Engineering",
    "Member, Cancer Control & Population Sciences, Rogel Cancer Center",
  ],
  orcid: "0000-0003-1140-9891",
  orcidUrl: "https://orcid.org/0000-0003-1140-9891",
  scholarUrl: "https://scholar.google.com/citations?user=5Kh3z8gAAAAJ&hl=en",
  pubmedUrl:
    "https://pubmed.ncbi.nlm.nih.gov/?term=Lipps+DB",
} as const;

/** Primary navigation shown in the sticky header. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
] as const;

/** University affiliation links shown in the footer. */
export const affiliationLinks = [
  { label: "University of Michigan", href: "https://umich.edu" },
  { label: "School of Kinesiology", href: "https://kines.umich.edu" },
  { label: "Rogel Cancer Center", href: "https://rogelcancercenter.org" },
  { label: "Biomedical Engineering", href: "https://bme.umich.edu" },
] as const;
