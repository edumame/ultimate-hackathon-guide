import {
  Breadcrumb,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { NextPageLink } from "@/components/next-page-link";
import { getCaseStudies, getCaseStudy, getCaseStudyContent } from "@/data/case-studies";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getCaseStudies().map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  let caseStudy = await getCaseStudy((await params).slug);

  return {
    title: `${caseStudy?.title} - The Ultimate Hackathon Guide`,
    description: caseStudy?.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let slug = (await params).slug;
  let caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  let Content = await getCaseStudyContent(slug);

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator className="max-md:hidden" />
          <Breadcrumb href="/case-studies" className="max-md:hidden">
            Case Studies
          </Breadcrumb>
          <BreadcrumbSeparator />
          <Breadcrumb>{caseStudy.org}</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-2xl py-10 sm:py-14">
        <div className="prose">
          <Content />
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">
          {caseStudy.next ? (
            <NextPageLink
              title={caseStudy.next.title}
              description={caseStudy.next.description}
              href={`/case-studies/${caseStudy.next.id}`}
            />
          ) : (
            <NextPageLink
              title="Resources"
              description="Templates, tools, and research for hackathon organizers."
              href="/resources"
            />
          )}
        </div>
      </div>
    </CenteredPageLayout>
  );
}
