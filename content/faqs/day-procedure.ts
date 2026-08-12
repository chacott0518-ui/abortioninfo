import type { FaqItem } from "@/types/faq";

export const DAY_PROCEDURE_FAQS: FaqItem[] = [
  {
    id: "day-procedure-01",
    order: 1,
    question: "당일 병원에 도착해서 바로 시술이 진행되나요?",
    answer:
      "도착 후 바로 시술로 이어지기보다, 접수와 서류 확인, 필요한 경우 검사 재확인을 거친 뒤 진행되는 경우가 일반적입니다. 정확한 순서는 병원마다 다를 수 있습니다.",
    categories: ["dayProcedure"],
  },
  {
    id: "day-procedure-02",
    order: 2,
    question: "당일 병원에 얼마나 머물러야 하나요?",
    answer:
      "시술 시간뿐 아니라 접수 대기, 검사 재확인, 회복실 관찰 시간이 함께 포함되어 체류시간이 길어질 수 있습니다. 정확한 예상 시간은 예약 시 병원에 확인하는 것이 좋습니다.",
    categories: ["dayProcedure"],
  },
  {
    id: "day-procedure-03",
    order: 3,
    question: "당일 보호자가 꼭 동행해야 하나요?",
    answer:
      "동행 필요 여부는 마취 방법과 병원 정책에 따라 달라질 수 있습니다. 특히 수면마취를 적용하는 경우 귀가 시 동행을 권장하는 안내가 있을 수 있으므로 예약 시 미리 확인하는 것이 안전합니다.",
    categories: ["dayProcedure"],
  },
  {
    id: "day-procedure-04",
    order: 4,
    question: "시술 직후 바로 걸어서 귀가할 수 있나요?",
    answer:
      "회복실에서 활력징후와 몸 상태를 관찰한 뒤 이상이 없다고 판단되면 귀가하는 것이 일반적이지만, 관찰 시간과 회복 속도는 개인마다 다를 수 있습니다.",
    categories: ["dayProcedure"],
  },
  {
    id: "day-procedure-05",
    order: 5,
    question: "귀가 후 몸 상태가 이상하면 어떻게 해야 하나요?",
    answer:
      "귀가 전 안내받은 주의사항 범위를 벗어나는 통증, 출혈, 발열 등이 있다면 인터넷 정보로 판단하지 말고 병원에 바로 연락하거나 방문하는 것이 필요합니다.",
    categories: ["dayProcedure"],
  },
];
