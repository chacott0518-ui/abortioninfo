import { AFTER_DAILY_LIFE_PAGE } from "@/content/pages/after-daily-life";
import { AFTER_SYMPTOMS_PAGE } from "@/content/pages/after-symptoms";
import { BOOKING_CHECKLIST_PAGE } from "@/content/pages/booking-checklist";
import { CAUTION_PAGE } from "@/content/pages/caution";
import { CONSULT_PRIVACY_PAGE } from "@/content/pages/consult-privacy";
import { CONTRACEPTION_TIMING_PAGE } from "@/content/pages/contraception-timing";
import { COST_PAGE } from "@/content/pages/cost";
import { DAY_PROCEDURE_PAGE } from "@/content/pages/day-procedure";
import { DECISION_TAKE_TIME_PAGE } from "@/content/pages/decision-take-time";
import { EARLY_GESTATION_PAGE } from "@/content/pages/early-gestation";
import { EMOTIONAL_CHANGE_PAGE } from "@/content/pages/emotional-change";
import { FAQ_PAGE } from "@/content/pages/faq-page";
import { HOSPITAL_PAGE } from "@/content/pages/hospital";
import { CONTENT_CARDS } from "@/content/pages/home";
import { MEDICATION_DISCLOSURE_PAGE } from "@/content/pages/medication-disclosure";
import { MINOR_CONSULT_PAGE } from "@/content/pages/minor-consult";
import { MYTHS_FACTS_PAGE } from "@/content/pages/myths-facts";
import { NEXT_PREGNANCY_PLANNING_PAGE } from "@/content/pages/next-pregnancy-planning";
import { OVULATION_RETURN_PAGE } from "@/content/pages/ovulation-return";
import { PAIN_CHANGE_PAGE } from "@/content/pages/pain-change";
import { PARTNER_FAMILY_CONSULT_PAGE } from "@/content/pages/partner-family-consult";
import { PERIOD_RETURN_PAGE } from "@/content/pages/period-return";
import { PRE_EXAM_PAGE } from "@/content/pages/pre-exam";
import { PRE_PROCEDURE_ANXIETY_PAGE } from "@/content/pages/pre-procedure-anxiety";
import { PROCEDURE_METHODS_PAGE } from "@/content/pages/procedure-methods";
import { RECOVERY_PAGE } from "@/content/pages/recovery";
import { RECOVERY_JOURNAL_PAGE } from "@/content/pages/recovery-journal";
import { RELIABLE_INFO_SOURCES_PAGE } from "@/content/pages/reliable-info-sources";
import { REVIEW_PAGE } from "@/content/pages/review";
import { SLEEP_ANESTHESIA_PAGE } from "@/content/pages/sleep-anesthesia";
import { TERMS_GLOSSARY_PAGE } from "@/content/pages/terms-glossary";
import type { ContentPage } from "@/types/content";

/**
 * 색인·정적 생성 대상.
 * 앞 6개는 핵심 허브, 이후는 GNB/CONTENT_CARDS에 포함되지 않는 의료정보 가이드(정보허브 `/의료정보`에서 열람).
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
  BOOKING_CHECKLIST_PAGE,
  DAY_PROCEDURE_PAGE,
  SLEEP_ANESTHESIA_PAGE,
  PROCEDURE_METHODS_PAGE,
  AFTER_SYMPTOMS_PAGE,
  AFTER_DAILY_LIFE_PAGE,
  CONSULT_PRIVACY_PAGE,
  MEDICATION_DISCLOSURE_PAGE,
  PAIN_CHANGE_PAGE,
  PERIOD_RETURN_PAGE,
  OVULATION_RETURN_PAGE,
  CONTRACEPTION_TIMING_PAGE,
  EMOTIONAL_CHANGE_PAGE,
  MINOR_CONSULT_PAGE,
  TERMS_GLOSSARY_PAGE,
  PRE_PROCEDURE_ANXIETY_PAGE,
  NEXT_PREGNANCY_PLANNING_PAGE,
  RELIABLE_INFO_SOURCES_PAGE,
  RECOVERY_JOURNAL_PAGE,
  MYTHS_FACTS_PAGE,
  DECISION_TAKE_TIME_PAGE,
  PARTNER_FAMILY_CONSULT_PAGE,
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
