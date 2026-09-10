import type { FaqItem } from "@/types/faq";

export const HOSPITAL_ANESTHESIA_RECOVERY_FAQS: FaqItem[] = [
  {
    id: "hospital-anesthesia-recovery-01",
    order: 1,
    question: "모든 사람에게 같은 마취가 적용되나요?",
    answer:
      "마취 방식은 개인 상태와 의료진 판단에 따라 달라질 수 있어, 특정 방식이 모든 사람에게 동일하다고 단정하기 어렵습니다.",
    categories: ["hospitalAnesthesiaRecovery"],
  },
  {
    id: "hospital-anesthesia-recovery-02",
    order: 2,
    question: "마취 전에 무엇을 알려야 하나요?",
    answer:
      "기존 질환, 알레르기, 복용 중인 약과 건강기능식품을 빠짐없이 알리는 것이 중요합니다. 금식·복용 중단 안내도 함께 확인하세요.",
    categories: ["hospitalAnesthesiaRecovery"],
  },
  {
    id: "hospital-anesthesia-recovery-03",
    order: 3,
    question: "회복실 관찰 시간은 얼마나 되나요?",
    answer:
      "관찰 시간은 마취 방식과 개인 회복 속도에 따라 달라질 수 있습니다. 정확한 안내는 담당 의료진 설명을 따르는 것이 안전합니다.",
    categories: ["hospitalAnesthesiaRecovery"],
  },
  {
    id: "hospital-anesthesia-recovery-04",
    order: 4,
    question: "귀가 시 동행이 필요한가요?",
    answer:
      "동행 권장 여부는 마취·병원 정책에 따라 다를 수 있어, 혼자 방문을 계획한다면 미리 확인하는 것이 좋습니다.",
    categories: ["hospitalAnesthesiaRecovery"],
  },
  {
    id: "hospital-anesthesia-recovery-05",
    order: 5,
    question: "마취·회복 안내는 병원 비교에 어떻게 쓰이나요?",
    answer:
      "설명의 구체성과 귀가·관찰 안내의 명확성은 병원 선택 시 확인할 수 있는 기준 중 하나입니다.",
    categories: ["hospitalAnesthesiaRecovery"],
  },
];
