import type { FaqItem } from "@/types/faq";

export const EARLY_GESTATION_FAQS: FaqItem[] = [
  {
    id: "early-gestation-01",
    order: 1,
    question: "임신 초기라는 것은 몇 주까지를 의미하나요?",
    answer:
      "‘임신 초기’라는 표현이 가리키는 주수 범위는 자료와 맥락에 따라 다르게 쓰일 수 있습니다. 특정 숫자를 모든 진료 상황에 적용되는 절대 기준처럼 단정하기보다, 본인의 주수와 건강상태를 의료진과 확인하는 것이 필요합니다.",
    categories: ["earlyGestation"],
  },
  {
    id: "early-gestation-02",
    order: 2,
    question: "생리일만 알면 정확한 주수를 알 수 있나요?",
    answer:
      "마지막 생리 시작일과 생리주기는 예상 주수를 계산하는 데 도움이 될 수 있습니다. 다만 예상값과 실제 진료 결과에는 차이가 있을 수 있어, 자가 계산만으로 진료 방법을 결정하지 않는 편이 좋습니다.",
    categories: ["earlyGestation"],
  },
  {
    id: "early-gestation-03",
    order: 3,
    question: "임신테스트기 결과만으로 수술 방법을 정할 수 있나요?",
    answer:
      "임신테스트기는 임신 여부를 확인하는 참고 수단일 수 있지만, 주수와 건강상태, 적용 가능한 진료 방법까지 결정하기에는 정보가 부족할 수 있습니다. 필요한 평가는 상담과 검사에서 이어집니다.",
    categories: ["earlyGestation"],
  },
  {
    id: "early-gestation-04",
    order: 4,
    question: "초기라면 모두 같은 방법으로 진행하나요?",
    answer:
      "그렇지 않을 수 있습니다. 주수가 비슷해 보여도 증상, 병력, 검사 결과에 따라 상담 내용과 적용 가능한 방법이 달라질 수 있습니다. 인터넷상의 일반 설명을 개인에게 그대로 적용하지 말고 의료진 평가를 확인하세요.",
    categories: ["earlyGestation"],
  },
  {
    id: "early-gestation-05",
    order: 5,
    question: "상담 전에 준비할 내용은 무엇인가요?",
    answer:
      "마지막 생리 시작일, 평소 생리주기, 임신테스트 확인 시점, 현재 증상, 복용 약·건강기능식품, 알레르기, 기존 질환과 과거 시술·수술 이력을 정리해 두면 상담에 도움이 됩니다. 준비 항목의 자세한 안내는 임신중절수술 전 검사 가이드에서도 확인할 수 있습니다.",
    categories: ["earlyGestation"],
  },
];
