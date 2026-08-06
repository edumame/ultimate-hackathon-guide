import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { ContentLink } from "@/components/content-link";
import { Logo } from "@/components/logo";
import { PageSection } from "@/components/page-section";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { getModules, type Module } from "@/data/lessons";
import { ArticleIcon } from "@/icons/article-icon";
import { BookIcon } from "@/icons/book-icon";
import { LessonsIcon } from "@/icons/lessons-icon";
import { PlayIcon } from "@/icons/play-icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Ultimate Hackathon Guide",
  description:
    "A practical playbook for designing, running, and improving hackathons in the age of AI — built from interviews with 100 hackathon organizers, in collaboration with freeCodeCamp.",
};

export default async function Page() {
  let modules = await getModules();
  let lessons = modules.flatMap(({ lessons }) => lessons);

  return (
    <SidebarLayoutContent
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Overview</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl mask-b-from-60% sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128">
          <div className="absolute inset-0 bg-linear-to-br from-brand-soft via-brand-faint to-white opacity-70 dark:from-brand/25 dark:via-brand/10 dark:to-gray-950" />
          <div className="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="px-4 pt-32 pb-12 lg:py-24">
              <Logo className="h-9" />
              <h1 className="sr-only">The Ultimate Hackathon Guide</h1>
              <p className="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400">
                A practical playbook for designing, running, and improving
                hackathons in the age of AI — built from interviews with 100
                hackathon organizers, in collaboration with freeCodeCamp.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 dark:text-white">
                <div className="flex items-center gap-1.5">
                  <BookIcon className="stroke-gray-950/40 dark:stroke-white/40" />
                  {modules.length} parts
                </div>
                <span className="hidden text-gray-950/25 sm:inline dark:text-white/25">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <LessonsIcon className="stroke-gray-950/40 dark:stroke-white/40" />
                  {lessons.length} chapters
                </div>
                <span className="hidden text-gray-950/25 sm:inline dark:text-white/25">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <ArticleIcon className="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40" />
                  16 of 100 interviews
                </div>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/${modules[0].lessons[0].id}`}
                  className="inline-flex items-center gap-x-2 rounded-full bg-brand px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-brand-deep"
                >
                  <PlayIcon className="fill-white" />
                  Start reading
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm/7 font-semibold text-brand-deep hover:text-brand dark:text-brand"
                >
                  Or jump to the case studies &rarr;
                </Link>
              </div>
            </div>

            <div className="mb-16 max-w-2xl sm:px-4">
              <h2 className="text-2xl/7 font-medium tracking-tight text-gray-950 dark:text-white">
                What this is
              </h2>
              <div className="mt-4 space-y-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                <p>
                  Most writing about hackathons is for hackers. This guide is
                  for the people who run them. It's built from an ongoing
                  research project: interviewing{" "}
                  <strong className="font-semibold text-gray-950 dark:text-white">
                    100 hackathon organizers
                  </strong>{" "}
                  — 16 interviews in so far — behind events ranging from a
                  first-ever 150-person college hackathon to 3,000-hacker
                  flagships, a government-backed event in China, and a European
                  hackathon that runs as a company with €800K in revenue.
                </p>
                <p>
                  Every chapter combines three things: anonymized stories and
                  hard benchmarks from those interviews, specific ways
                  organizers are using AI beyond the surface level, and a
                  checklist of artifacts you should have at each stage. The
                  chapters follow the organizer's journey in order — purpose,
                  timeline, team, participants, marketing, funding, logistics,
                  experience, follow-through — so you can read front to back
                  before your first event, or jump straight to the fire you're
                  fighting.
                </p>
                <p>
                  Interview stories are anonymized; the{" "}
                  <Link
                    href="/case-studies"
                    className="font-semibold text-brand-deep hover:text-brand dark:text-brand"
                  >
                    case studies
                  </Link>{" "}
                  are published with organizer review. The research is led by
                  Chinat Yu (Stanford hackathon researcher, 50+ hackathons) in
                  collaboration with freeCodeCamp — and the guide grows with
                  every interview.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
              {modules.map((module: Module, index: number) => (
                <PageSection
                  key={module.id}
                  id={module.id}
                  title={`Part ${index + 1}`}
                >
                  <div className="max-w-2xl">
                    <h2 className="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">
                      {module.title}
                    </h2>
                    <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                      {module.description}
                    </p>

                    <ol className="mt-6 space-y-4">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <ContentLink
                            title={lesson.title}
                            description={lesson.description}
                            href={`/${lesson.id}`}
                            type="article"
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </PageSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarLayoutContent>
  );
}
