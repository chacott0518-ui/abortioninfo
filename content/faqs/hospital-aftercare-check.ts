import type { FaqItem } from "@/types/faq";

export const HOSPITAL_AFTERCARE_CHECK_FAQS: FaqItem[] = [
  {
    id: "hospital-aftercare-check-01",
    order: 1,
    question: "사후진료는 꼭 받아야 하나요?",
    answer:
      "경과 확인이 필요한 경우는 개인 상태와 병원 안내에 따라 달라질 수 있습니다. 일정·포함 범위를 상담에서 미리 확인하는 것이 좋습니다.",
    categories: ["hospitalAftercareCheck"],
  },
  {
    id: "hospital-aftercare-check-02",
    order: 2,
    question: "이상 증상이 있으면 어떻게 연락하나요?",
    answer:
      "연락 가능한 경로와 안내 기준은 병원마다 다를 수 있어, 귀가 전에 연락 방법을 확인해 두는 편이 안전합니다.",
    categories: ["hospitalAftercareCheck"],
  },
  {
    id: "hospital-aftercare-check-03",
    order: 3,
    question: "사후관리 비용이 견적에 포함되나요?",
    answer:
      "포함 범위는 견적마다 다를 수 있습니다. 사후진료가 어느 기간·횟수까지 포함되는지, 초과 시 비용이 어떻게 되는지 구분해 확인하세요.",
    categories: ["hospitalAftercareCheck"],
  },
  {
    id: "hospital-aftercare-check-04",
    order: 4,
    question: "재방문이 필요할 수 있는 경우는?",
    answer:
      "경과 확인이나 추가 검사가 필요한 조건은 개인 상태와 의료진 판단에 따라 달라질 수 있습니다. 상담에서 미리 물어보는 것이 도움이 됩니다.",
    categories: ["hospitalAftercareCheck"],
  },
  {
    id: "hospital-aftercare-check-05",
    order: 5,
    question: "사후관리는 병원 선택에 왜 중요한가요?",
    answer:
      "당일 진료뿐 아니라 경과 확인과 연락 체계가 이어지는지는 병원 비교 시 확인할 핵심 기준 중 하나입니다.",
    categories: ["hospitalAftercareCheck"],
  },
];
