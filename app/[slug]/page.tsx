import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/content/ContentPageView";
import {
  INFO_HUB_PUBLISHED_AT,
  INFO_HUB_SEO,
  InfoHubView,
} from "@/components/content/InfoHubView";
import { ROUTES } from "@/config/routes";
import {
  CONTENT_PAGES,
  getContentPageBySlug,
} from "@/lib/content-registry";
import { buildPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** `/의료정보` 등 콘텐츠 슬러그(CONTENT_PAGES)가 아닌 별도 정적 뷰의 slug */
const INFO_HUB_SLUG = ROUTES.infoHub.replace(/^\//, "");

function normalizeSlug(rawSlug: string): string {
  try {
    return decodeURIComponent(rawSlug).normalize("NFC");
  } catch {
    return rawSlug.normalize("NFC");
  }
}

export function generateStaticParams() {
  return [
    ...CONTENT_PAGES.map((page) => ({ slug: page.slug })),
    { slug: INFO_HUB_SLUG },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);

  if (slug === INFO_HUB_SLUG) {
    return buildPageMetadata({
      seo: INFO_HUB_SEO,
      path: ROUTES.infoHub,
      publishedTime: INFO_HUB_PUBLISHED_AT,
      modifiedTime: INFO_HUB_PUBLISHED_AT,
    });
  }

  const page = getContentPageBySlug(slug);

  if (!page) return {};

  return buildPageMetadata({
    seo: page.seo,
    path: page.href,
    publishedTime: page.publishedAt,
    modifiedTime: page.updatedAt,
  });
}

export default async function ContentSlugPage({ params }: PageProps) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);

  if (slug === INFO_HUB_SLUG) {
    return <InfoHubView />;
  }

  const page = getContentPageBySlug(slug);

  if (!page) notFound();

  return <ContentPageView page={page} />;
}
