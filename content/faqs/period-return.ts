import type { FaqItem } from "@/types/faq";

export const PERIOD_RETURN_FAQS: FaqItem[] = [
  {
    id: "period-return-01",
    order: 1,
    question: "한 달이 넘도록 생리가 없으면 걱정해야 하나요?",
    answer:
      "생리 재개 시점은 개인차가 있어 특정 기간을 기준으로 단정하기 어렵습니다. 다만 오랫동안 시작되지 않아 걱정된다면 진료를 통해 확인하는 것이 안전합니다.",
    categories: ["periodReturn"],
  },
  {
    id: "period-return-02",
    order: 2,
    question: "생리량이 평소보다 훨씬 적으면 이상이 있는 걸까요?",
    answer:
      "처음 몇 번의 생리는 양이 평소와 다르게 느껴질 수 있습니다. 이런 변화가 반드시 문제를 의미하지는 않지만, 지속되거나 걱정된다면 확인이 필요할 수 있습니다.",
    categories: ["periodReturn"],
  },
  {
    id: "period-return-03",
    order: 3,
    question: "임신중절수술 후 생리 주기가 불규칙해질 수 있나요?",
    answer:
      "네. 회복 초기에는 주기가 일시적으로 불규칙해질 수 있다고 설명됩니다. 시간이 지나며 안정되는 경우가 많지만 개인차가 있어 지속되면 진료에서 확인하는 것이 좋습니다.",
    categories: ["periodReturn"],
  },
  {
    id: "period-return-04",
    order: 4,
    question: "생리통이 예전보다 심해진 것 같은데 왜 그런가요?",
    answer:
      "생리통의 변화는 개인에 따라 다르게 나타날 수 있습니다. 원인을 스스로 단정하기보다, 통증이 심하거나 지속된다면 진료에서 확인해 보는 것이 정확합니다.",
    categories: ["periodReturn"],
  },
  {
    id: "period-return-05",
    order: 5,
    question: "생리가 시작되지 않아도 임신할 수 있나요?",
    answer:
      "네. 배란이 생리보다 먼저 재개될 수 있어, 생리를 시작하지 않았더라도 임신이 가능할 수 있습니다. 계획하지 않은 임신을 원하지 않는다면 피임을 함께 고려하는 것이 필요합니다.",
    categories: ["periodReturn"],
  },
];
