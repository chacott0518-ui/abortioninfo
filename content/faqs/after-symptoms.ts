import type { FaqItem } from "@/types/faq";

export const AFTER_SYMPTOMS_FAQS: FaqItem[] = [
  {
    id: "after-symptoms-01",
    order: 1,
    question: "출혈이 며칠까지 나오는 건 정상인가요?",
    answer:
      "출혈 지속 기간은 개인마다 차이가 있어 특정 일수를 정상 기준으로 단정하기 어렵습니다. 안내받은 회복 일정과 크게 다르게 지속되거나 양이 늘어난다면 병원에 확인하는 것이 안전합니다.",
    categories: ["afterSymptoms"],
  },
  {
    id: "after-symptoms-02",
    order: 2,
    question: "생리통 같은 복통은 언제까지 나타날 수 있나요?",
    answer:
      "가벼운 복부 불편감은 회복 중 흔히 언급되는 변화이지만 정도와 기간은 개인차가 있습니다. 진통제로 조절되지 않을 정도로 심하다면 병원에 문의하는 것이 필요합니다.",
    categories: ["afterSymptoms"],
  },
  {
    id: "after-symptoms-03",
    order: 3,
    question: "미열이 있는데 병원에 가야 하나요?",
    answer:
      "체온이 평소보다 높게 지속되거나 다른 증상과 함께 나타난다면 감염 등의 가능성을 확인하기 위해 병원에 연락하는 것이 필요할 수 있습니다. 스스로 해열제만으로 판단하지 않는 것이 안전합니다.",
    categories: ["afterSymptoms"],
  },
  {
    id: "after-symptoms-04",
    order: 4,
    question: "분비물 냄새가 평소와 다르면 문제가 있는 건가요?",
    answer:
      "평소와 다른 냄새나 색의 분비물은 확인이 필요한 신호로 언급되는 경우가 많습니다. 자가 진단보다는 병원에 문의해 확인하는 것이 정확합니다.",
    categories: ["afterSymptoms"],
  },
  {
    id: "after-symptoms-05",
    order: 5,
    question: "재방문은 언제 해야 하나요?",
    answer:
      "재방문 시점은 병원과 개인 상태에 따라 다르며, 귀가 전 안내받은 일정을 따르는 것이 일반적입니다. 안내 없이 스스로 회복이 끝났다고 판단하기보다 예정된 확인 절차를 지키는 것이 안전합니다.",
    categories: ["afterSymptoms"],
  },
];
