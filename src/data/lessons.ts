export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  video: {
    thumbnail: string;
    duration: number;
    url: string;
  } | null;
};

export function getModules(): Module[] {
  return lessons;
}

export async function getLesson(
  slug: string,
): Promise<(Lesson & { module: Module; next: Lesson | null }) | null> {
  let mod = lessons.find(({ lessons }) =>
    lessons.some(({ id }) => id === slug),
  );

  if (!mod) {
    return null;
  }

  let index = mod.lessons.findIndex(({ id }) => id === slug);

  return {
    ...mod.lessons[index],
    module: mod,
    next: index < mod.lessons.length - 1 ? mod.lessons[index + 1] : null,
  };
}

export async function getLessonContent(slug: string) {
  return (await import(`@/data/lessons/${slug}.mdx`)).default;
}

const lessons = [
  {
    id: "foundations",
    title: "Foundations",
    description:
      "Why the organizer's playbook is being rewritten, what success actually means for your event, and the timeline that holds it all together.",
    lessons: [
      {
        id: "why-ai-changes-hackathons",
        title: "Why AI Is Changing the Way We Run Hackathons",
        description:
          "The hacker's journey has transformed. The organizer's playbook is next — and it's already happening quietly.",
        video: null,
      },
      {
        id: "purpose-and-success-metrics",
        title: "Purpose and Success Metrics",
        description:
          "Decide what your hackathon is for before you decide anything else. Scale changes the event more than you think.",
        video: null,
      },
      {
        id: "organizers-timeline",
        title: "The Organizer's Timeline",
        description:
          "A T-minus countdown from six months out to the closing ceremony, built from how real teams actually schedule the work.",
        video: null,
      },
    ],
  },
  {
    id: "people",
    title: "People",
    description:
      "The team behind the event and the hackers in front of it — recruiting, selecting, and keeping both engaged.",
    lessons: [
      {
        id: "team-structure-and-roles",
        title: "Team Structure and Roles",
        description:
          "How real organizing teams are structured, from 12-person crews running 400-hacker events to 26-person democratic orgs.",
        video: null,
      },
      {
        id: "recruiting-participants",
        title: "Recruiting Participants and Admissions",
        description:
          "Application review at scale, team-linked admissions, the yield math nobody teaches you, and designing for first-time hackers.",
        video: null,
      },
      {
        id: "marketing-and-storytelling",
        title: "Marketing and Storytelling",
        description:
          "Annual marketing arcs, serialized themes, viral moments, and why one event doubled applications with a real campaign.",
        video: null,
      },
    ],
  },
  {
    id: "funding-and-logistics",
    title: "Funding and Logistics",
    description:
      "The operational core: raising money, locking the venue, and building a run of show that survives contact with reality.",
    lessons: [
      {
        id: "sponsors-and-funding",
        title: "Sponsors and Funding",
        description:
          "The sponsor pipeline that actually works: cold outreach, the stats call, the package — and the CRM habits that prevent collisions.",
        video: null,
      },
      {
        id: "venue-logistics-run-of-show",
        title: "Venue, Logistics, and Run of Show",
        description:
          "The three-month build, the two-week run-of-show lock, and planning for the emergencies you can't predict.",
        video: null,
      },
    ],
  },
  {
    id: "experience",
    title: "Experience and Follow-Through",
    description:
      "Everything hackers actually feel — programming, judging, communication — and what happens after the closing ceremony.",
    lessons: [
      {
        id: "workshops-mentors-judges",
        title: "Workshops, Mentors, and Judges",
        description:
          "Partnering with speakers on programming, aligning judges on a rubric, and where AI judging tools fit.",
        video: null,
      },
      {
        id: "communication-systems",
        title: "Communication Systems",
        description:
          "The single most-cited failure mode in our interviews is a communication breakdown. Here's how teams prevent it.",
        video: null,
      },
      {
        id: "post-event-follow-up",
        title: "Post-Event Follow-Up and Community Momentum",
        description:
          "The event is a spike; the community is the asset. Closing the loop with hackers, sponsors, and your own team.",
        video: null,
      },
    ],
  },
];
