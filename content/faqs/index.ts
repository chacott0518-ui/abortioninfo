import { AFTER_DAILY_LIFE_FAQS } from "@/content/faqs/after-daily-life";
import { AFTER_SYMPTOMS_FAQS } from "@/content/faqs/after-symptoms";
import { BOOKING_CHECKLIST_FAQS } from "@/content/faqs/booking-checklist";
import { CAUTION_FAQS } from "@/content/faqs/caution";
import { COMMON_FAQS } from "@/content/faqs/common";
import { CONSULT_PRIVACY_FAQS } from "@/content/faqs/consult-privacy";
import { CONTRACEPTION_TIMING_FAQS } from "@/content/faqs/contraception-timing";
import { COST_FAQS } from "@/content/faqs/cost";
import { DAY_PROCEDURE_FAQS } from "@/content/faqs/day-procedure";
import { DECISION_TAKE_TIME_FAQS } from "@/content/faqs/decision-take-time";
import { EARLY_GESTATION_FAQS } from "@/content/faqs/early-gestation";
import { EMOTIONAL_CHANGE_FAQS } from "@/content/faqs/emotional-change";
import { EXTRA_FAQS } from "@/content/faqs/extra";
import { getHospitalLocationFaqs } from "@/content/faqs/hospital-location";
import { HOSPITAL_FAQS } from "@/content/faqs/hospital";
import { HUB_FAQS } from "@/content/faqs/hub";
import { MEDICATION_DISCLOSURE_FAQS } from "@/content/faqs/medication-disclosure";
import { MINOR_CONSULT_FAQS } from "@/content/faqs/minor-consult";
import { MYTHS_FACTS_FAQS } from "@/content/faqs/myths-facts";
import { NEXT_PREGNANCY_PLANNING_FAQS } from "@/content/faqs/next-pregnancy-planning";
import { OVULATION_RETURN_FAQS } from "@/content/faqs/ovulation-return";
import { PAIN_CHANGE_FAQS } from "@/content/faqs/pain-change";
import { PARTNER_FAMILY_CONSULT_FAQS } from "@/content/faqs/partner-family-consult";
import { PERIOD_RETURN_FAQS } from "@/content/faqs/period-return";
import { PRE_PROCEDURE_ANXIETY_FAQS } from "@/content/faqs/pre-procedure-anxiety";
import { PROCEDURE_METHODS_FAQS } from "@/content/faqs/procedure-methods";
import { FAQ_QUESTIONS_30 } from "@/content/faqs/questions-30";
import { PRE_EXAM_FAQS } from "@/content/faqs/pre-exam";
import { RECOVERY_FAQS } from "@/content/faqs/recovery";
import { RECOVERY_JOURNAL_FAQS } from "@/content/faqs/recovery-journal";
import { RELIABLE_INFO_SOURCES_FAQS } from "@/content/faqs/reliable-info-sources";
import { REVIEW_FAQS } from "@/content/faqs/review";
import { SLEEP_ANESTHESIA_FAQS } from "@/content/faqs/sleep-anesthesia";
import { TERMS_GLOSSARY_FAQS } from "@/content/faqs/terms-glossary";
import type { FaqItem } from "@/types/faq";

const ALL_FAQS: FaqItem[] = [
  ...COMMON_FAQS,
  ...COST_FAQS,
  ...RECOVERY_FAQS,
  ...CAUTION_FAQS,
  ...HOSPITAL_FAQS,
  ...REVIEW_FAQS,
  ...EXTRA_FAQS,
  ...HUB_FAQS,
  ...FAQ_QUESTIONS_30,
  ...getHospitalLocationFaqs(),
  ...PRE_EXAM_FAQS,
  ...EARLY_GESTATION_FAQS,
  ...DAY_PROCEDURE_FAQS,
  ...SLEEP_ANESTHESIA_FAQS,
  ...PROCEDURE_METHODS_FAQS,
  ...AFTER_SYMPTOMS_FAQS,
  ...AFTER_DAILY_LIFE_FAQS,
  ...BOOKING_CHECKLIST_FAQS,
  ...CONSULT_PRIVACY_FAQS,
  ...MEDICATION_DISCLOSURE_FAQS,
  ...PAIN_CHANGE_FAQS,
  ...PERIOD_RETURN_FAQS,
  ...OVULATION_RETURN_FAQS,
  ...CONTRACEPTION_TIMING_FAQS,
  ...EMOTIONAL_CHANGE_FAQS,
  ...MINOR_CONSULT_FAQS,
  ...TERMS_GLOSSARY_FAQS,
  ...PRE_PROCEDURE_ANXIETY_FAQS,
  ...NEXT_PREGNANCY_PLANNING_FAQS,
  ...RELIABLE_INFO_SOURCES_FAQS,
  ...RECOVERY_JOURNAL_FAQS,
  ...MYTHS_FACTS_FAQS,
  ...DECISION_TAKE_TIME_FAQS,
  ...PARTNER_FAMILY_CONSULT_FAQS,
];

const FAQ_BY_ID = new Map(ALL_FAQS.map((item) => [item.id, item]));

export function getFaqById(id: string): FaqItem | undefined {
  return FAQ_BY_ID.get(id);
}

export function getFaqsByIds(ids: string[]): FaqItem[] {
  return ids
    .map((id) => FAQ_BY_ID.get(id))
    .filter((item): item is FaqItem => Boolean(item));
}

export function getFaqsByCategory(category: string): FaqItem[] {
  return ALL_FAQS.filter((item) => item.categories.includes(category)).sort(
    (a, b) => a.order - b.order,
  );
}

export function getAllFaqs(): FaqItem[] {
  return [...ALL_FAQS].sort((a, b) => a.order - b.order);
}

/** FAQ 통합 페이지 그룹별 ID (화면·JSON-LD 동일 원본) */
export const FAQ_HUB_GROUPS = [
  {
    id: "faq-diff",
    numberLabel: "01",
    heading: "임신중절수술 기본 이해",
    directAnswer:
      "임신중절수술은 의료기관에서 검사와 상담을 거쳐 진행하는 진료이며, 적용 가능 여부와 방법은 임신 주수·건강 상태·의료기관 기준에 따라 달라질 수 있습니다.",
    paragraphs: [
      "임신 확인 후 가능한 시기에 상담을 받아 현재 상태를 확인하는 것이 중요합니다. 증상이나 주수만으로 진료 가능 여부를 단정하지 말고 검사 결과를 함께 확인하세요.",
    ],
    faqIds: [
      "common-01",
      "hub-diff-01",
      "hub-diff-02",
      "hub-diff-03",
      "hub-diff-04",
    ],
  },
  {
    id: "faq-symptoms",
    numberLabel: "02",
    heading: "상담과 검사",
    directAnswer:
      "임신중절수술 상담에서는 초음파·혈액 검사 등으로 임신 주수와 건강 상태를 확인하며, 검사 결과를 바탕으로 진료 가능 여부를 판단합니다.",
    paragraphs: [
      "복용 약물, 전신 질환, 이전 수술 이력 등을 미리 알려 주면 상담과 검사 계획 수립에 도움이 됩니다.",
    ],
    faqIds: [
      "common-02",
      "extra-01",
      "hub-symptom-01",
      "hub-symptom-02",
      "hub-symptom-03",
      "hub-symptom-04",
    ],
  },
  {
    id: "faq-cost-lens",
    numberLabel: "03",
    heading: "수술비용과 진료 방법",
    directAnswer:
      "임신중절수술 비용은 임신 주수, 검사 범위, 마취 방법, 사후진료 구성에 따라 달라질 수 있으며, 견적 비교 시 포함·제외 항목을 구분하는 것이 중요합니다.",
    paragraphs: [
      "총액뿐 아니라 검사비·마취비·약제비·재진비 포함 여부를 확인하세요. 마취 방법에 따라 비용과 회복 과정이 달라질 수 있습니다.",
    ],
    faqIds: [
      "common-03",
      "common-04",
      "cost-01",
      "hub-cost-01",
      "hub-cost-02",
      "hub-cost-03",
      "hub-cost-04",
      "hub-cost-05",
    ],
  },
  {
    id: "faq-recovery-life",
    numberLabel: "04",
    heading: "회복기간과 일상생활",
    directAnswer:
      "회복 속도와 일상 복귀 시점은 개인차가 있으며, 목욕·운전·운동과 처방약 사용은 의료진 안내를 우선합니다.",
    paragraphs: [
      "수술 직후 출혈·복부 불편·피로감이 나타날 수 있고, 회복 기간은 임신 주수와 건강 상태에 따라 달라질 수 있습니다.",
    ],
    faqIds: [
      "common-05",
      "recovery-01",
      "hub-recovery-01",
      "hub-recovery-02",
      "hub-recovery-03",
      "hub-recovery-04",
      "hub-recovery-05",
    ],
  },
  {
    id: "faq-caution",
    numberLabel: "05",
    heading: "수술 전후 주의사항",
    directAnswer:
      "검사 전 준비, 당일 안내, 수술 후 생활 관리와 이상 증상 확인을 구분해 살펴보는 편이 안전합니다.",
    paragraphs: [
      "복용 약·기존 질환·알레르기를 미리 알리고, 처방약·목욕·운동·성관계는 안내 범위를 따르는 것이 중요합니다.",
    ],
    faqIds: [
      "caution-01",
      "caution-02",
      "hub-caution-01",
      "hub-caution-02",
      "hub-caution-03",
      "hub-caution-04",
      "hub-caution-05",
    ],
  },
  {
    id: "faq-hospital",
    numberLabel: "06",
    heading: "병원선택",
    directAnswer:
      "병원은 검사 설명·진료 상담·비용 투명성·사후관리를 기준으로 비교하는 편이 도움이 됩니다.",
    paragraphs: [
      "특정 병원 우월성을 단정하기 어렵습니다. 검사와 상담에서 본인에게 맞는 설명을 확인하세요.",
    ],
    faqIds: [
      "common-06",
      "hospital-01",
      "hub-hospital-01",
      "hub-hospital-02",
      "hub-hospital-03",
      "hub-hospital-04",
      "hub-hospital-05",
    ],
  },
  {
    id: "faq-reviews",
    numberLabel: "07",
    heading: "후기와 개인차",
    directAnswer:
      "후기는 참고 자료이며, 작성자와 본인의 임신 주수·건강 상태·진료 방법이 다르면 같은 경험이 반복된다고 보기 어렵습니다.",
    paragraphs: [
      "임신 주수·진료 방법·회복 과정이 구체적으로 적혔는지, 광고·과장 표현은 없는지 구분하는 편이 안전합니다.",
    ],
    faqIds: [
      "review-01",
      "review-02",
      "hub-review-01",
      "hub-review-02",
      "hub-review-03",
      "hub-review-04",
      "hub-review-05",
    ],
  },
  {
    id: "faq-misc",
    numberLabel: "08",
    heading: "기타 자주 묻는 질문",
    directAnswer:
      "마취 방법, 당일 진행 여부, 회복 중 불편처럼 자주 이어지는 질문은 아래를 참고하세요.",
    paragraphs: [
      "같은 질문이라도 검사 결과와 건강 상태에 따라 확인해야 할 내용이 달라질 수 있습니다.",
    ],
    faqIds: [
      "extra-02",
      "extra-03",
      "extra-04",
      "extra-05",
      "extra-06",
      "cost-04",
      "recovery-03",
    ],
  },
] as const;

/** @deprecated FAQ_HUB_GROUPS 사용 */
export const FAQ_PAGE_IDS = FAQ_HUB_GROUPS.flatMap(
  (group) => group.faqIds,
) as readonly string[];

export {
  COMMON_FAQS,
  COST_FAQS,
  RECOVERY_FAQS,
  CAUTION_FAQS,
  HOSPITAL_FAQS,
  REVIEW_FAQS,
  EXTRA_FAQS,
  HUB_FAQS,
  FAQ_QUESTIONS_30,
};
