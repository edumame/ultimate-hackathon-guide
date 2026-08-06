export type CaseStudy = {
  id: string;
  org: string;
  title: string;
  description: string;
  snapshot: string[];
};

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export async function getCaseStudy(slug: string) {
  let index = caseStudies.findIndex(({ id }) => id === slug);

  if (index === -1) {
    return null;
  }

  return {
    ...caseStudies[index],
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
}

export async function getCaseStudyContent(slug: string) {
  return (await import(`@/data/case-studies/${slug}.mdx`)).default;
}

const caseStudies = [
  {
    id: "hackathon-at-berkeley",
    org: "Hackathon at Berkeley",
    title: "How Hackathon at Berkeley runs it",
    description:
      "Two events a year — a 3,000+ hacker flagship in San Francisco and a summer AI hackathon — run by a 26-person democratic org with three tiers and eight sub-teams.",
    snapshot: [
      "3,000+ hackers at the flagship",
      "2 events per year",
      "26-person democratic team",
      "25–33% first-time hackers",
    ],
  },
  {
    id: "pass-hackathon",
    org: "PASS Hackathon (UC Santa Cruz)",
    title: "How a 12-person team runs a 400-hacker event",
    description:
      "PASS Hackathon 2026 hosted 400+ attendees over three days in January with 12 core organizers, $33.5K raised, and a judging plan resilient enough to survive a mid-event medical emergency.",
    snapshot: [
      "400+ attendees",
      "12 core organizers",
      "$33.5K raised",
      "56% first-time hackers",
    ],
  },
];
