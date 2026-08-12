import type { FaqItem } from "@/types/faq";

export const MINOR_CONSULT_FAQS: FaqItem[] = [
  {
    id: "minor-consult-01",
    order: 1,
    question: "보호자 없이 혼자 상담받을 수 있나요?",
    answer:
      "가능 여부는 병원의 절차와 관련 법적 기준에 따라 달라질 수 있어 이 글에서 단정하지 않습니다. 상담을 원하는 병원에 미리 문의해 확인하는 것이 정확합니다.",
    categories: ["minorConsult"],
  },
  {
    id: "minor-consult-02",
    order: 2,
    question: "부모님께 알리고 싶지 않으면 어떻게 해야 하나요?",
    answer:
      "관련 절차와 예외 사항은 공식 근거를 확인할 수 없어 이 글에서 임의로 안내하지 않습니다. 청소년 상담기관이나 관련 공공기관에 먼저 문의해 도움을 받는 것도 방법입니다.",
    categories: ["minorConsult"],
  },
  {
    id: "minor-consult-03",
    order: 3,
    question: "임신중절수술 관련 법적 기준은 어디서 확인하나요?",
    answer:
      "정확한 법적 기준은 국가법령정보센터 등 공식 기관을 통해 확인하는 것이 정확합니다. 이 글은 법률 자문을 대신하지 않습니다.",
    categories: ["minorConsult"],
  },
  {
    id: "minor-consult-04",
    order: 4,
    question: "친구와 함께 방문해도 동행으로 인정되나요?",
    answer:
      "동행 인정 범위는 병원의 절차에 따라 다를 수 있어, 예약 시 미리 확인하는 것이 필요합니다.",
    categories: ["minorConsult"],
  },
  {
    id: "minor-consult-05",
    order: 5,
    question: "상담만 먼저 받아볼 수도 있나요?",
    answer:
      "많은 경우 상담을 통해 정보를 먼저 확인할 수 있지만, 병원별 절차가 다를 수 있어 예약 시 상담만 가능한지 문의해 보는 것이 좋습니다.",
    categories: ["minorConsult"],
  },
];
