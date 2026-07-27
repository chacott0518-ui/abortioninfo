import type { FaqItem } from "@/types/faq";

/** FAQ 페이지 전용 확장 문항 */
export const EXTRA_FAQS: FaqItem[] = [
  {
    id: "extra-01",
    order: 1,
    question: "임신중절수술 상담에서는 무엇을 확인하나요?",
    answer:
      "임신중절수술 상담에서는 임신 주수, 초음파 소견, 건강 상태, 복용 약물 등을 확인하는 검사가 함께 진행되는 경우가 많습니다. 필요한 검사 범위는 개인 상태와 증상에 따라 달라질 수 있어, 결과 설명까지 들어보는 것이 중요합니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["faq-page", "symptoms"],
  },
  {
    id: "extra-02",
    order: 2,
    question: "수술 시기는 어떻게 정해지나요?",
    answer:
      "수술 시기는 임신 주수, 건강 상태, 검사 결과, 관련 법령·의료기관 기준 등을 종합해 판단합니다. 상담 시점과 진행 가능 여부는 개인마다 달라질 수 있으며, 검사 결과를 바탕으로 의료진과 상의하는 것이 안전합니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["faq-page", "symptoms"],
  },
  {
    id: "extra-03",
    order: 3,
    question: "마취 방법은 어떻게 결정되나요?",
    answer:
      "마취 방법은 임신 주수, 건강 상태, 진료 계획에 따라 달라질 수 있습니다. 국소마취와 전신마취 등 선택지가 있을 수 있으니, 각 방법의 장단점과 회복 과정을 함께 확인하세요.",
    relatedSlug: "비용",
    relatedLabel: "비용과 진료 방법",
    categories: ["faq-page"],
  },
  {
    id: "extra-04",
    order: 4,
    question: "수술 후 흔히 나타날 수 있는 불편은 무엇인가요?",
    answer:
      "회복 과정에서 출혈, 복부 불편, 피로감 등 일시적 불편이 나타날 수 있습니다. 대부분 경과에 따라 완화되지만, 증상의 강도와 지속 기간은 사람마다 다르며, 악화되거나 새로운 증상이 생기면 진료가 필요할 수 있습니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["faq-page", "side-effects"],
  },
  {
    id: "extra-05",
    order: 5,
    question: "같은 진료를 받아도 회복 경험이 다른 이유는 무엇인가요?",
    answer:
      "같은 진료를 받아도 임신 주수, 건강 상태, 생활 습관에 따라 회복 체감은 달라질 수 있습니다. 수술 전 기대치와 현실적인 회복 일정을 충분히 상의하고, 사후관리 안내도 함께 확인하는 것이 도움이 됩니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["faq-page", "side-effects"],
  },
  {
    id: "extra-06",
    order: 6,
    question: "상담과 수술을 같은 날 진행할 수 있나요?",
    answer:
      "당일 진행 가능 여부는 검사 결과, 임신 상태, 병원 일정 등을 고려해 정해질 수 있습니다. 먼저 상담과 검사를 받은 뒤 일정을 잡는 경우도 있으며, 개인 상태에 맞는 흐름을 의료진과 상의하는 것이 좋습니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["faq-page", "recovery"],
  },
];
