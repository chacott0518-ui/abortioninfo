import type { FaqItem } from "@/types/faq";

export const PROCEDURE_METHODS_FAQS: FaqItem[] = [
  {
    id: "procedure-methods-01",
    order: 1,
    question: "흡입술과 소파술 중 어떤 방법이 더 좋은가요?",
    answer:
      "특정 방법이 모든 사람에게 더 우수하다고 단정할 수 없습니다. 적용 가능한 방법은 임신 주수, 건강상태, 의료진의 판단에 따라 달라질 수 있습니다.",
    categories: ["procedureMethods"],
  },
  {
    id: "procedure-methods-02",
    order: 2,
    question: "두 방법을 함께 사용하기도 하나요?",
    answer:
      "두 용어가 함께 언급되거나 병행 설명되는 경우도 있습니다. 정확한 진행 방식은 병원과 개인 상태에 따라 다를 수 있어 상담에서 확인하는 것이 필요합니다.",
    categories: ["procedureMethods"],
  },
  {
    id: "procedure-methods-03",
    order: 3,
    question: "방법에 따라 통증 정도가 다른가요?",
    answer:
      "통증에 대한 경험은 개인차가 크고 마취 방법과도 관련이 있어, 특정 방법이 통증이 적다고 일괄적으로 말하기는 어렵습니다. 마취와 통증 관리에 대해서는 상담에서 확인할 수 있습니다.",
    categories: ["procedureMethods"],
  },
  {
    id: "procedure-methods-04",
    order: 4,
    question: "방법을 미리 정해서 예약할 수 있나요?",
    answer:
      "최종 방법은 검사 결과와 상담을 거쳐 의료진이 판단하는 경우가 일반적입니다. 예약 단계에서 희망 사항을 전달할 수는 있지만, 최종 결정은 진료 과정에서 이루어집니다.",
    categories: ["procedureMethods"],
  },
  {
    id: "procedure-methods-05",
    order: 5,
    question: "방법에 따라 회복 기간도 달라지나요?",
    answer:
      "회복 과정에 대한 설명은 적용된 방법과 개인 상태에 따라 다를 수 있습니다. 일반적인 회복 단계는 회복기간 안내에서 참고하고, 개인별 정확한 안내는 담당 의료진에게 확인하는 것이 좋습니다.",
    categories: ["procedureMethods"],
  },
];
