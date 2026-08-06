import {
  Breadcrumb,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { ContentLink } from "@/components/content-link";
import { PageSection } from "@/components/page-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - The Ultimate Hackathon Guide",
  description:
    "Research, guides, and tools for hackathon organizers — plus how to contribute your own experience to this project.",
};

export default function Page() {
  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Resources</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <h1 className="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Resources
      </h1>
      <p className="mt-6 max-w-xl text-base/7 text-gray-600 dark:text-gray-400">
        Research, guides, and tools for hackathon organizers — and how to
        contribute your own experience to this project.
      </p>

      <div className="mt-16 space-y-16">
        <PageSection title={<h2>Get involved</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            This guide is built from interviews with 100 hackathon organizers,
            in collaboration with freeCodeCamp.
          </p>
          <div className="mt-8 max-w-2xl space-y-6">
            <ContentLink
              type="tool"
              title="Get interviewed"
              description="Organized a hackathon? Grab a time — we'd love to feature your event as a case study."
              href="https://calendly.com/chinat/hackathon-interview"
            />
            <ContentLink
              type="tool"
              title="Join the waitlist"
              description="Sign up to get the finished playbook and new case studies as they're published."
              href="https://mentormates.substack.com/"
            />
          </div>
        </PageSection>

        <PageSection title={<h2>Research</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            The published work this guide builds on.
          </p>
          <div className="mt-8 max-w-2xl space-y-6">
            <ContentLink
              type="article"
              title="Running Inclusive Hackathons"
              description="A Stanford-published white paper on designing hackathons that welcome everyone."
              href="https://ed.stanford.edu/ldt/students/portfolios/2024/chinat-yu"
            />
            <ContentLink
              type="article"
              title="Improving the Hacker Learning Experience"
              description="Master's thesis research on how hackers actually learn at hackathons."
              href="https://ed.stanford.edu/ldt/students/portfolios/2024/chinat-yu"
            />
            <ContentLink
              type="article"
              title="MLH Hackathon Organizer Guide"
              description="Major League Hacking's open-source community playbook — a great complementary reference."
              href="https://guide.mlh.io/"
            />
            <ContentLink
              type="article"
              title="freeCodeCamp"
              description="Our publishing partner — an 11M+ community learning to code for free."
              href="https://www.freecodecamp.org/"
            />
          </div>
        </PageSection>

        <PageSection title={<h2>Tools organizers mentioned</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            Software that came up in our interviews — from event platforms to AI
            judging tools.
          </p>
          <div className="@container">
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 @2xl:grid-cols-2">
              <ContentLink
                type="tool"
                title="MentorMates"
                description="End-to-end hackathon platform: submissions, judging, participants, and event ops."
                href="https://mentormates.ai"
              />
              <ContentLink
                type="tool"
                title="Jury"
                description="Open-source pairwise-comparison judging platform for hackathons."
                href="https://github.com/acmutd/jury"
              />
              <ContentLink
                type="tool"
                title="Discord"
                description="The default participant communication channel — easy onboarding, flexible channels."
                href="https://discord.com"
              />
              <ContentLink
                type="tool"
                title="Slack"
                description="Internal organizer coordination — and home of the AI institutional-memory bot pattern."
                href="https://slack.com"
              />
              <ContentLink
                type="tool"
                title="Google Forms"
                description="The unglamorous, battle-tested judging rubric and score-aggregation stack."
                href="https://forms.google.com"
              />
              <ContentLink
                type="tool"
                title="Luma"
                description="Lightweight event registration and RSVP management."
                href="https://lu.ma"
              />
            </div>
          </div>
        </PageSection>
      </div>
    </CenteredPageLayout>
  );
}
