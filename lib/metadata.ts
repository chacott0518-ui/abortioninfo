import type { Metadata } from "next";

import { SITE, VERIFICATION } from "@/config/site";
import { toIso8601Kst } from "@/lib/dates";
import { absoluteUrl } from "@/lib/site-url";
import type { PageSeo } from "@/types/content";

/** 카카오톡 공유용 OG 이미지 (PNG, 1774×887) */
export const DEFAULT_OG_IMAGE = "/images/og/임신중절수술-kakao.png";
export const DEFAULT_OG_IMAGE_WIDTH = 1774;
export const DEFAULT_OG_IMAGE_HEIGHT = 887;
export const DEFAULT_OG_IMAGE_ALT = "임신중절수술 연세365산부인과의원";

type BuildMetadataOptions = {
  seo: PageSeo;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

function buildVerification(): Metadata["verification"] | undefined {
  if (!VERIFICATION.google && !VERIFICATION.naver && !VERIFICATION.bing) {
    return undefined;
  }

  return {
    google: VERIFICATION.google,
    other: {
      ...(VERIFICATION.naver
        ? { "naver-site-verification": VERIFICATION.naver }
        : {}),
      ...(VERIFICATION.bing
        ? { "msvalidate.01": VERIFICATION.bing }
        : {}),
    },
  };
}

function buildOgImages(alt: string) {
  return [
    {
      url: absoluteUrl(DEFAULT_OG_IMAGE),
      width: DEFAULT_OG_IMAGE_WIDTH,
      height: DEFAULT_OG_IMAGE_HEIGHT,
      alt,
    },
  ];
}

export function buildPageMetadata({
  seo,
  path,
  type = "article",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogAlt = DEFAULT_OG_IMAGE_ALT;
  const ogImages = buildOgImages(ogAlt);
  const ogPublished = publishedTime
    ? toIso8601Kst(publishedTime)
    : undefined;
  const ogModified = modifiedTime
    ? toIso8601Kst(modifiedTime)
    : ogPublished;

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    category: seo.category,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.shortName,
      title: seo.title,
      description: seo.description,
      images: ogImages,
      ...(ogPublished ? { publishedTime: ogPublished } : {}),
      ...(ogModified ? { modifiedTime: ogModified } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    verification: buildVerification(),
  };
}
