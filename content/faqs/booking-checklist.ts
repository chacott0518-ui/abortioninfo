import type { FaqItem } from "@/types/faq";

export const BOOKING_CHECKLIST_FAQS: FaqItem[] = [
  {
    id: "booking-checklist-01",
    order: 1,
    question: "예약 시 검사 결과가 없어도 괜찮나요?",
    answer:
      "이전 검사 결과가 없어도 예약과 상담은 가능한 경우가 일반적입니다. 다만 결과지가 있다면 지참하는 편이 중복 검사를 줄이는 데 도움이 될 수 있습니다.",
    categories: ["bookingChecklist"],
  },
  {
    id: "booking-checklist-02",
    order: 2,
    question: "예약 전화로 비용을 미리 안내받을 수 있나요?",
    answer:
      "비용 안내 방식은 병원마다 다를 수 있습니다. 검사 전 정확한 금액을 안내하기 어려운 경우도 있으므로, 안내 방식 자체를 예약 시 확인해 두는 것이 도움이 됩니다.",
    categories: ["bookingChecklist"],
  },
  {
    id: "booking-checklist-03",
    order: 3,
    question: "예약 후 날짜를 변경할 수 있나요?",
    answer:
      "대부분의 경우 사전 연락을 통해 일정 변경이 가능하지만, 병원별 정책이 다를 수 있어 예약 시 변경·취소 절차를 함께 확인해 두는 것이 좋습니다.",
    categories: ["bookingChecklist"],
  },
  {
    id: "booking-checklist-04",
    order: 4,
    question: "미성년자도 예약할 수 있나요?",
    answer:
      "미성년자의 진료 절차와 필요한 동의 사항은 현재 공식 기준을 통해 정확히 확인해야 하는 영역입니다. 이 글에서는 임의로 단정하지 않으며, 예약 시 병원에 직접 확인하는 것이 필요합니다.",
    categories: ["bookingChecklist"],
  },
  {
    id: "booking-checklist-05",
    order: 5,
    question: "예약 없이 당일 방문도 가능한가요?",
    answer:
      "당일 방문 가능 여부는 병원의 진료 상황에 따라 다를 수 있습니다. 대기 시간이나 검사 준비를 고려하면 사전 예약 후 방문하는 편이 원활할 수 있습니다.",
    categories: ["bookingChecklist"],
  },
];
