import type { FaqItem } from "@/types/faq";

export const MYTHS_FACTS_FAQS: FaqItem[] = [
  {
    id: "myths-facts-01",
    order: 1,
    question: "'며칠 만에 완전히 회복된다'는 말은 믿어도 되나요?",
    answer:
      "회복 속도는 개인차가 커서 특정 기간을 일괄 기준으로 제시하기 어렵습니다. 이런 단정적인 표현은 신중하게 볼 필요가 있습니다.",
    categories: ["mythsFacts"],
  },
  {
    id: "myths-facts-02",
    order: 2,
    question: "'모든 병원이 같은 방법을 쓴다'는 말이 사실인가요?",
    answer:
      "그렇지 않습니다. 적용 가능한 방법은 병원의 판단과 개인 상태에 따라 달라질 수 있습니다.",
    categories: ["mythsFacts"],
  },
  {
    id: "myths-facts-03",
    order: 3,
    question: "임신중절수술 후기가 많으면 그 병원이 무조건 좋은 건가요?",
    answer:
      "후기 수가 많다고 특정 병원이 우수하다고 단정할 수는 없습니다. 후기는 참고 자료로 활용하되, 광고성 표현이 많은지 함께 살펴보는 것이 좋습니다.",
    categories: ["mythsFacts"],
  },
  {
    id: "myths-facts-04",
    order: 4,
    question: "'통증이 전혀 없다'는 광고 문구는 믿어도 될까요?",
    answer:
      "통증 경험은 개인차가 커서 '전혀 없다'고 단정하는 표현은 신중하게 볼 필요가 있습니다.",
    categories: ["mythsFacts"],
  },
  {
    id: "myths-facts-05",
    order: 5,
    question: "오해인지 사실인지 헷갈릴 때는 어떻게 확인하나요?",
    answer:
      "출처가 명확한 공식 자료를 확인하거나, 궁금한 점을 상담에서 직접 질문해 확인하는 것이 정확합니다.",
    categories: ["mythsFacts"],
  },
];
