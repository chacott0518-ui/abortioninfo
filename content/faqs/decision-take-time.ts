import type { FaqItem } from "@/types/faq";

export const DECISION_TAKE_TIME_FAQS: FaqItem[] = [
  {
    id: "decision-take-time-01",
    order: 1,
    question: "상담만 받고 그냥 돌아가도 괜찮은가요?",
    answer:
      "네. 상담은 정보를 확인하는 과정이며, 그 자리에서 결정하지 않고 돌아가는 것도 가능합니다.",
    categories: ["decisionTakeTime"],
  },
  {
    id: "decision-take-time-02",
    order: 2,
    question: "생각이 계속 바뀌는데 이상한 건가요?",
    answer:
      "중요한 결정을 앞두고 생각이 여러 번 바뀌는 것은 자연스러운 과정으로 언급됩니다.",
    categories: ["decisionTakeTime"],
  },
  {
    id: "decision-take-time-03",
    order: 3,
    question: "임신중절수술 진행 여부를 며칠 더 고민해도 되나요?",
    answer:
      "가능한 경우가 많지만, 임신 주수에 따라 진료 가능 시기가 달라질 수 있어 고민 기간을 상담에서 함께 확인하는 것이 필요합니다.",
    categories: ["decisionTakeTime"],
  },
  {
    id: "decision-take-time-04",
    order: 4,
    question: "결정을 미루면 비용이 더 드나요?",
    answer:
      "비용은 검사·주수 등에 따라 달라질 수 있는 부분으로, 이 글에서 특정 금액을 단정하지 않습니다. 정확한 사항은 병원에 문의해야 합니다.",
    categories: ["decisionTakeTime"],
  },
  {
    id: "decision-take-time-05",
    order: 5,
    question: "이미 예약했는데 취소하거나 미뤄도 되나요?",
    answer:
      "대부분 사전 연락을 통해 일정 변경이 가능하지만, 병원별 절차가 다를 수 있어 예약한 병원에 직접 확인하는 것이 정확합니다.",
    categories: ["decisionTakeTime"],
  },
];
