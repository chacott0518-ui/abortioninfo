import type { MetadataRoute } from "next";

import { ROUTES } from "@/config/routes";
import { CONTENT_PAGES } from "@/content/pages";
import { absoluteUrl } from "@/lib/site-url";

const HOME_LAST_MODIFIED = "2026-07-27";
const INFO_HUB_LAST_MODIFIED = "2026-08-12";

/**
 * 색인 대상: 홈 + CONTENT_PAGES 전체(자동 반영) + 정보허브.
 * redirect·칼럼(미발행) URL은 제외.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(HOME_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(ROUTES.infoHub),
      lastModified: new Date(INFO_HUB_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const pages: MetadataRoute.Sitemap = CONTENT_PAGES.map((page) => ({
    url: absoluteUrl(page.href),
    lastModified: new Date(page.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...home, ...pages];
}
