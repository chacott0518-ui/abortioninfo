import type { FaqItem } from "@/types/faq";

export const SLEEP_ANESTHESIA_FAQS: FaqItem[] = [
  {
    id: "sleep-anesthesia-01",
    order: 1,
    question: "모든 병원에서 수면마취를 동일하게 적용하나요?",
    answer:
      "그렇지 않습니다. 마취 방식과 적용 여부는 의료기관과 개인의 건강상태에 따라 달라질 수 있습니다. 특정 병원의 방식을 다른 병원에도 동일하게 적용된다고 단정하기는 어렵습니다.",
    categories: ["sleepAnesthesia"],
  },
  {
    id: "sleep-anesthesia-02",
    order: 2,
    question: "마취 전 어떤 정보를 알려야 하나요?",
    answer:
      "복용 중인 약, 알레르기 이력, 기저질환, 과거 마취 경험, 금식 여부를 미리 알리는 것이 마취 계획을 세우는 데 참고가 됩니다.",
    categories: ["sleepAnesthesia"],
  },
  {
    id: "sleep-anesthesia-03",
    order: 3,
    question: "마취 후 바로 운전해서 귀가해도 되나요?",
    answer:
      "일반적으로 마취 당일 직접 운전은 피하도록 안내됩니다. 어지럼이나 졸림이 남아있을 수 있어 보호자나 동행인과 함께 귀가하는 것이 권장되는 경우가 많습니다.",
    categories: ["sleepAnesthesia"],
  },
  {
    id: "sleep-anesthesia-04",
    order: 4,
    question: "마취가 무섭거나 걱정될 때는 어떻게 하면 좋을까요?",
    answer:
      "걱정되는 부분은 상담 과정에서 의료진에게 직접 질문하는 것이 도움이 됩니다. 개인의 건강상태에 따라 확인해야 할 사항이 다를 수 있으므로 궁금한 점을 미리 정리해 가는 것이 좋습니다.",
    categories: ["sleepAnesthesia"],
  },
  {
    id: "sleep-anesthesia-05",
    order: 5,
    question: "마취 후 회복실에서는 얼마나 관찰하나요?",
    answer:
      "관찰 시간은 마취 방법과 개인의 회복 속도에 따라 달라질 수 있습니다. 활력징후와 몸 상태를 확인한 뒤 이상이 없다고 판단되면 귀가 안내를 받는 것이 일반적입니다.",
    categories: ["sleepAnesthesia"],
  },
];
