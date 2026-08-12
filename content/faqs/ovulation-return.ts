import type { FaqItem } from "@/types/faq";

export const OVULATION_RETURN_FAQS: FaqItem[] = [
  {
    id: "ovulation-return-01",
    order: 1,
    question: "배란이 언제 다시 시작됐는지 스스로 알 수 있나요?",
    answer:
      "체온이나 신체 변화로 어느 정도 짐작할 수 있다는 설명도 있지만, 정확한 확인은 어렵습니다. 정확한 시점이 궁금하다면 진료를 통해 확인하는 것이 정확합니다.",
    categories: ["ovulationReturn"],
  },
  {
    id: "ovulation-return-02",
    order: 2,
    question: "생리 전에 관계를 가지면 무조건 임신되나요?",
    answer:
      "무조건이라고 단정할 수는 없지만, 배란이 이미 재개된 상태라면 임신 가능성이 있을 수 있습니다. 계획하지 않은 임신을 원하지 않는다면 피임 방법을 미리 확인하는 것이 안전합니다.",
    categories: ["ovulationReturn"],
  },
  {
    id: "ovulation-return-03",
    order: 3,
    question: "임신중절수술 후 며칠부터 피임을 시작해야 하나요?",
    answer:
      "정확한 시작 시점은 개인 건강상태와 선택한 피임 방법에 따라 달라질 수 있습니다. 회복 초기부터 상담을 통해 확인해 보는 것이 도움이 됩니다.",
    categories: ["ovulationReturn"],
  },
  {
    id: "ovulation-return-04",
    order: 4,
    question: "배란테스트기로 확인하면 정확한가요?",
    answer:
      "배란테스트기는 참고 도구가 될 수 있지만, 회복 초기 몸 상태에 따라 결과가 정확하지 않을 수도 있습니다. 결과만으로 임신 가능 여부를 단정하지 않는 것이 좋습니다.",
    categories: ["ovulationReturn"],
  },
  {
    id: "ovulation-return-05",
    order: 5,
    question: "아직 생리를 하지 않았으니 안전하다고 봐도 되나요?",
    answer:
      "그렇게 단정하기는 어렵습니다. 배란이 생리보다 먼저 재개될 수 있어, 생리 전이라도 임신 가능성을 배제할 수 없습니다.",
    categories: ["ovulationReturn"],
  },
];
