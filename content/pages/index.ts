import { CAUTION_PAGE } from "@/content/pages/caution";
import { COST_PAGE } from "@/content/pages/cost";
import { EARLY_GESTATION_PAGE } from "@/content/pages/early-gestation";
import { FAQ_PAGE } from "@/content/pages/faq-page";
import { HOSPITAL_PAGE } from "@/content/pages/hospital";
import { CONTENT_CARDS } from "@/content/pages/home";
import { PRE_EXAM_PAGE } from "@/content/pages/pre-exam";
import { RECOVERY_PAGE } from "@/content/pages/recovery";
import { REVIEW_PAGE } from "@/content/pages/review";
import type { ContentPage } from "@/types/content";

/**
 * 색인·정적 생성 대상.
 * 앞 6개는 핵심 허브, 이후는 GNB/CONTENT_CARDS에 포함되지 않는 의료정보 가이드.
 */
export const CONTENT_PAGES: ContentPage[] = [
  COST_PAGE,
  RECOVERY_PAGE,
  CAUTION_PAGE,
  HOSPITAL_PAGE,
  REVIEW_PAGE,
  FAQ_PAGE,
  PRE_EXAM_PAGE,
  EARLY_GESTATION_PAGE,
];

export function getContentPageBySlug(slug: string): ContentPage | undefined {
  const normalized = slug.normalize("NFC");
  return CONTENT_PAGES.find(
    (page) => page.slug.normalize("NFC") === normalized,
  );
}

export function getContentPageById(
  id: ContentPage["id"],
): ContentPage | undefined {
  return CONTENT_PAGES.find((page) => page.id === id);
}

export const ALL_PAGE_HREFS = [
  "/",
  ...CONTENT_PAGES.map((page) => page.href),
] as const;

export { CONTENT_CARDS };
export * from "@/content/pages/home";
