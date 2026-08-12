import type { FaqItem } from "@/types/faq";

export const PAIN_CHANGE_FAQS: FaqItem[] = [
  {
    id: "pain-change-01",
    order: 1,
    question: "며칠이 지나도 통증이 줄지 않으면 이상한 건가요?",
    answer:
      "통증이 줄어드는 속도는 개인마다 다를 수 있지만, 시간이 지나도 전혀 줄지 않거나 오히려 심해진다면 일반적인 경과와 다를 수 있어 병원에 확인하는 것이 필요합니다.",
    categories: ["painChange"],
  },
  {
    id: "pain-change-02",
    order: 2,
    question: "진통제를 먹어도 통증이 가라앉지 않으면 어떻게 하나요?",
    answer:
      "안내받은 진통제를 사용해도 통증이 조절되지 않는다면 참지 말고 병원에 연락해 상태를 확인받는 것이 안전합니다.",
    categories: ["painChange"],
  },
  {
    id: "pain-change-03",
    order: 3,
    question: "임신중절수술 후 통증이 갑자기 심해지면 무엇을 의심해야 하나요?",
    answer:
      "특정 원인을 스스로 단정하기는 어렵습니다. 갑자기 심해지는 통증은 확인이 필요한 신호로 언급되는 경우가 많아, 인터넷 정보로 판단하지 말고 의료진에게 문의하는 것이 정확합니다.",
    categories: ["painChange"],
  },
  {
    id: "pain-change-04",
    order: 4,
    question: "통증 부위가 매번 다르게 느껴지는데 정상인가요?",
    answer:
      "통증의 부위나 양상은 개인에 따라 다르게 느껴질 수 있습니다. 다만 낯선 통증이 계속되거나 걱정된다면 자가 판단보다 진료에서 확인하는 것이 좋습니다.",
    categories: ["painChange"],
  },
  {
    id: "pain-change-05",
    order: 5,
    question: "처방받지 않은 진통제를 먹어도 되나요?",
    answer:
      "다른 약과의 상호작용 가능성이 있을 수 있어, 처방받지 않은 약을 임의로 추가하기 전에 병원에 확인하는 것이 안전합니다.",
    categories: ["painChange"],
  },
];
