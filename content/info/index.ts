import { AFTER_DAILY_LIFE_PAGE } from "@/content/pages/after-daily-life";
import { AFTER_SYMPTOMS_PAGE } from "@/content/pages/after-symptoms";
import { BOOKING_CHECKLIST_PAGE } from "@/content/pages/booking-checklist";
import { CONSULT_PRIVACY_PAGE } from "@/content/pages/consult-privacy";
import { CONTRACEPTION_TIMING_PAGE } from "@/content/pages/contraception-timing";
import { DAY_PROCEDURE_PAGE } from "@/content/pages/day-procedure";
import { DECISION_TAKE_TIME_PAGE } from "@/content/pages/decision-take-time";
import { EARLY_GESTATION_PAGE } from "@/content/pages/early-gestation";
import { EMOTIONAL_CHANGE_PAGE } from "@/content/pages/emotional-change";
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
import { RECOVERY_JOURNAL_PAGE } from "@/content/pages/recovery-journal";
import { RELIABLE_INFO_SOURCES_PAGE } from "@/content/pages/reliable-info-sources";
import { SLEEP_ANESTHESIA_PAGE } from "@/content/pages/sleep-anesthesia";
import { TERMS_GLOSSARY_PAGE } from "@/content/pages/terms-glossary";
import type { ContentPage, InfoGuideCard } from "@/types/content";

/** 상단 6개 핵심 카드 밖의 의료정보 가이드 (GNB/CONTENT_CARDS 미포함, 정보허브에서 전체 열람) */
export const INFO_GUIDE_PAGES: ContentPage[] = [
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

/** 홈에 노출할 대표 정보가이드 (전체는 정보허브 `/의료정보`에서 열람) */
export const HOME_FEATURED_INFO_GUIDE_IDS = [
  "preExam",
  "earlyGestation",
  "dayProcedure",
  "afterSymptoms",
] as const;

function toInfoCard(page: ContentPage): InfoGuideCard {
  return {
    id: page.id as InfoGuideCard["id"],
    href: page.href,
    topicLabel: page.infoTopicLabel || page.navLabel,
    title: page.h1,
    description:
      page.infoCardDescription || page.seo.description,
    publishedAt: page.publishedAt,
    topicName: page.infoTopicLabel || page.navLabel,
    infoCategory: page.infoCategory,
  };
}

/** 정보허브 `/의료정보` 전체 목록용 — 배열 추가만으로 카드 증가 */
export const INFO_GUIDE_CARDS: InfoGuideCard[] = INFO_GUIDE_PAGES.map(toInfoCard);

/** 홈 ‘임신중절수술 관련 정보’ 섹션용 — 대표 4개만 노출 */
export const HOME_INFO_GUIDE_CARDS: InfoGuideCard[] = INFO_GUIDE_CARDS.filter(
  (card) => (HOME_FEATURED_INFO_GUIDE_IDS as readonly string[]).includes(card.id),
);
