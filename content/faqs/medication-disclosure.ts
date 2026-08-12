import type { FaqItem } from "@/types/faq";

export const MEDICATION_DISCLOSURE_FAQS: FaqItem[] = [
  {
    id: "medication-disclosure-01",
    order: 1,
    question: "영양제 정도는 알리지 않아도 되나요?",
    answer:
      "영양제나 건강기능식품도 검사·마취 계획에 참고가 될 수 있어 함께 알리는 것이 좋습니다. 사소해 보이는 항목이라도 생략하지 않는 편이 안전합니다.",
    categories: ["medicationDisclosure"],
  },
  {
    id: "medication-disclosure-02",
    order: 2,
    question: "예전에 먹었던 약도 이야기해야 하나요?",
    answer:
      "현재 복용 중인 약이 아니더라도 최근까지 복용했던 약이나 이상반응이 있었던 약이 있다면 함께 알리는 것이 상담에 도움이 될 수 있습니다.",
    categories: ["medicationDisclosure"],
  },
  {
    id: "medication-disclosure-03",
    order: 3,
    question: "피임약을 복용 중인데 이것도 알려야 하나요?",
    answer:
      "네. 호르몬제를 포함한 피임약도 검사·진료 계획에 참고가 되는 정보이므로 상담 시 알리는 것이 필요합니다.",
    categories: ["medicationDisclosure"],
  },
  {
    id: "medication-disclosure-04",
    order: 4,
    question: "임신중절수술 상담 전 약 이름이 기억나지 않으면 어떻게 하나요?",
    answer:
      "정확한 이름이 기억나지 않는다면 약의 색이나 형태, 복용 목적, 처방받은 병원 등을 함께 설명해도 상담에 참고가 될 수 있습니다. 가능하면 실물이나 처방전을 지참하는 것이 더 정확합니다.",
    categories: ["medicationDisclosure"],
  },
  {
    id: "medication-disclosure-05",
    order: 5,
    question: "약을 알리면 진료가 제한되는 건 아닌가요?",
    answer:
      "약 정보를 알리는 것은 안전한 진료 계획을 세우기 위한 과정이지, 그 자체로 진료를 제한하기 위한 목적이 아닙니다. 정확한 영향 여부는 상담에서 확인할 수 있습니다.",
    categories: ["medicationDisclosure"],
  },
];
