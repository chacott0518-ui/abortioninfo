import type { FaqItem } from "@/types/faq";

export const HOSPITAL_CONSULT_CHECK_FAQS: FaqItem[] = [
  {
    id: "hospital-consult-check-01",
    order: 1,
    question: "상담 전에 꼭 준비해야 할 것은 무엇인가요?",
    answer:
      "방문 일정, 동행 여부, 마지막 생리 시작일, 복용 약과 기존 질환, 궁금한 질문 목록을 미리 정리해 두면 상담이 더 수월해질 수 있습니다. 필요한 서류는 예약 시 병원에 확인하는 것이 정확합니다.",
    categories: ["hospitalConsultCheck"],
  },
  {
    id: "hospital-consult-check-02",
    order: 2,
    question: "상담에서 비용만 물어보면 되나요?",
    answer:
      "총액만 확인하기보다 검사·마취·진료·사후관리 포함 여부와 추가 비용이 생길 수 있는 조건을 함께 질문하는 편이 도움이 됩니다.",
    categories: ["hospitalConsultCheck"],
  },
  {
    id: "hospital-consult-check-03",
    order: 3,
    question: "혼자 상담받아도 되나요?",
    answer:
      "동행 필요 여부는 병원 정책과 마취·귀가 안내에 따라 다를 수 있습니다. 혼자 방문을 계획한다면 예약 단계에서 미리 확인하는 것이 안전합니다.",
    categories: ["hospitalConsultCheck"],
  },
  {
    id: "hospital-consult-check-04",
    order: 4,
    question: "상담만으로 병원을 결정해도 될까요?",
    answer:
      "상담은 설명의 구체성을 확인하는 과정이지만, 최종 판단은 검사 결과와 본인 상태를 바탕으로 이루어지는 것이 안전합니다.",
    categories: ["hospitalConsultCheck"],
  },
  {
    id: "hospital-consult-check-05",
    order: 5,
    question: "병원 선택 기준은 어디에서 더 볼 수 있나요?",
    answer:
      "검사·상담·비용·사후관리를 함께 비교하는 기준은 임신중절수술 병원 선택 안내에서 확인할 수 있습니다.",
    categories: ["hospitalConsultCheck"],
  },
];
