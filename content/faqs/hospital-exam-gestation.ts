import type { FaqItem } from "@/types/faq";

export const HOSPITAL_EXAM_GESTATION_FAQS: FaqItem[] = [
  {
    id: "hospital-exam-gestation-01",
    order: 1,
    question: "생리일만으로 주수를 알 수 있나요?",
    answer:
      "생리일은 참고가 될 수 있지만 오차가 생길 수 있어, 초음파 등 검사로 현재 상태를 확인하는 과정이 필요합니다.",
    categories: ["hospitalExamGestation"],
  },
  {
    id: "hospital-exam-gestation-02",
    order: 2,
    question: "검사 결과 설명에서 무엇을 확인하나요?",
    answer:
      "현재 주수·상태의 의미, 추가 검사 필요 여부, 이후 상담·진료 계획과의 연결을 질문해 두면 이해가 명확해질 수 있습니다.",
    categories: ["hospitalExamGestation"],
  },
  {
    id: "hospital-exam-gestation-03",
    order: 3,
    question: "모든 병원에서 같은 검사를 하나요?",
    answer:
      "필요한 검사 항목은 개인 상태와 의료기관 판단에 따라 달라질 수 있습니다. 기본·추가 검사 포함 여부를 견적과 함께 확인하는 것이 좋습니다.",
    categories: ["hospitalExamGestation"],
  },
  {
    id: "hospital-exam-gestation-04",
    order: 4,
    question: "검사 없이 바로 진료가 가능한가요?",
    answer:
      "가능 여부와 필요한 확인 절차는 개인 상태와 병원 안내에 따라 달라질 수 있어, 상담·예약 시 직접 확인하는 것이 정확합니다.",
    categories: ["hospitalExamGestation"],
  },
  {
    id: "hospital-exam-gestation-05",
    order: 5,
    question: "검사 체계는 병원 선택에 왜 중요한가요?",
    answer:
      "결과 설명이 이후 방법·비용·관리 안내와 연결되는지는 병원 비교 시 확인할 수 있는 기준 중 하나입니다.",
    categories: ["hospitalExamGestation"],
  },
];
