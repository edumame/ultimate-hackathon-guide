import {
  Breadcrumb,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { getCaseStudies } from "@/data/case-studies";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies - The Ultimate Hackathon Guide",
  description:
    "How real organizing teams run their hackathons — one case study per event, distilled from organizer interviews.",
};

export default function Page() {
  let caseStudies = getCaseStudies();

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Case Studies</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <h1 className="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Case Studies
      </h1>
      <p className="mt-6 max-w-xl text-base/7 text-gray-600 dark:text-gray-400">
        How real organizing teams run their hackathons — one case study per
        event, distilled from our interviews with 100 hackathon organizers.
        Each shows how the playbook plays out for a specific team.
      </p>
      <p className="mt-4 max-w-xl text-sm/7 text-gray-500 dark:text-gray-500">
        More case studies are added as interviews are completed.{" "}
        <a
          href="https://calendly.com/chinat/hackathon-interview"
          className="font-semibold text-brand hover:text-brand-deep"
        >
          Organized a hackathon? Get interviewed.
        </a>
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <Link
            key={caseStudy.id}
            href={`/case-studies/${caseStudy.id}`}
            className="group flex flex-col rounded-2xl p-6 ring-1 ring-gray-950/10 hover:bg-brand-faint hover:ring-brand/40 dark:ring-white/10 dark:hover:bg-white/2.5 dark:hover:ring-brand/40"
          >
            <div className="text-sm/6 font-semibold text-brand">
              {caseStudy.org}
            </div>
            <h2 className="mt-2 text-xl/7 font-medium tracking-tight text-gray-950 dark:text-white">
              {caseStudy.title}
            </h2>
            <p className="mt-3 flex-1 text-sm/6 text-gray-600 dark:text-gray-400">
              {caseStudy.description}
            </p>
            <dl className="mt-6 flex flex-wrap gap-2">
              {caseStudy.snapshot.map((stat) => (
                <dd
                  key={stat}
                  className="rounded-full bg-brand-soft px-3 py-0.5 text-xs/6 font-medium text-brand-deep dark:bg-brand/15 dark:text-brand-soft"
                >
                  {stat}
                </dd>
              ))}
            </dl>
          </Link>
        ))}
      </div>
    </CenteredPageLayout>
  );
}
