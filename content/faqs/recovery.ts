import type { FaqItem } from "@/types/faq";

export const RECOVERY_FAQS: FaqItem[] = [
  {
    id: "recovery-01",
    order: 1,
    question: "회복기간은 보통 얼마나 걸리나요?",
    answer:
      "회복 기간은 보통 수일에서 수 주에 걸쳐 단계적으로 진행되는 경우가 많습니다. 진료 방법, 몸 상태, 회복 관리 준수 여부에 따라 일상 복귀와 출혈·통증 변화 속도는 사람마다 달라질 수 있습니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
  {
    id: "recovery-02",
    order: 2,
    question: "운전은 언제부터 가능한가요?",
    answer:
      "운전 재개 시점은 출혈·통증·어지럼증 정도와 의료진의 경과 관찰 결과를 기준으로 판단하는 것이 안전합니다. 스스로 편하다고 느껴도 몸 상태가 충분히 회복되지 않았을 수 있어, 개인 판단만으로 결정하기는 어렵습니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
  {
    id: "recovery-03",
    order: 3,
    question: "회복 중 출혈이나 통증은 얼마나 지속될 수 있나요?",
    answer:
      "수술 후 출혈과 통증은 일시적으로 나타날 수 있으며, 정도와 지속 기간은 개인마다 다릅니다. 모든 사람에게 같은 회복 일정이 적용된다고 보기 어렵고, 평소와 다르게 심해지면 의료진에게 확인하는 것이 안전합니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
  {
    id: "recovery-04",
    order: 4,
    question: "회복 중 불편감이 있으면 어떻게 하나요?",
    answer:
      "회복 중 일시적인 출혈, 복부 불편, 피로감은 안내되는 경우가 있습니다. 다만 심한 통증, 과다 출혈, 고열, 어지럼증이 빠르게 심해지면 즉시 진료가 필요할 수 있으니 증상의 정도와 변화 속도를 함께 확인하세요.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["recovery", "precautions"],
  },
  {
    id: "recovery-05",
    order: 5,
    question: "운동이나 샤워는 언제부터 가능한가요?",
    answer:
      "샤워와 가벼운 활동은 의료진 안내에 따라 단계적으로 허용되는 경우가 많습니다. 같은 진료라도 몸 상태와 회복 경과에 따라 권장 시점이 달라질 수 있으므로, 운동·목욕·성관계 재개 전 허용 범위를 확인하는 것이 좋습니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
];
