import type { FaqItem } from "@/types/faq";

export const AFTER_DAILY_LIFE_FAQS: FaqItem[] = [
  {
    id: "after-daily-life-01",
    order: 1,
    question: "샤워는 당일부터 해도 되나요?",
    answer:
      "샤워는 비교적 이른 시점부터 가능하다고 안내되는 경우가 많지만, 정확한 시점은 병원의 안내와 개인 상태에 따라 다를 수 있습니다.",
    categories: ["afterDailyLife"],
  },
  {
    id: "after-daily-life-02",
    order: 2,
    question: "운동은 언제부터 다시 할 수 있나요?",
    answer:
      "격한 운동은 회복이 어느 정도 진행된 이후로 미루도록 안내되는 경우가 일반적입니다. 가벼운 스트레칭 정도부터 서서히 늘려가는 방식이 권장되기도 합니다.",
    categories: ["afterDailyLife"],
  },
  {
    id: "after-daily-life-03",
    order: 3,
    question: "성관계는 언제부터 가능한가요?",
    answer:
      "성관계는 감염 위험 등을 고려해 회복이 어느 정도 진행된 이후로 미루도록 안내되는 경우가 많습니다. 정확한 시점은 개인 상태에 따라 다르므로 상담에서 확인하는 것이 좋습니다.",
    categories: ["afterDailyLife"],
  },
  {
    id: "after-daily-life-04",
    order: 4,
    question: "회복 중 음주해도 괜찮은가요?",
    answer:
      "음주는 컨디션과 복용 중인 약을 고려해 신중히 결정하는 것이 좋습니다. 처방받은 약이 있다면 음주 가능 여부를 함께 확인하는 것이 안전합니다.",
    categories: ["afterDailyLife"],
  },
  {
    id: "after-daily-life-05",
    order: 5,
    question: "회복 중 장거리 여행을 가도 되나요?",
    answer:
      "장거리 이동 전에는 몸 상태를 먼저 확인하고, 이동 중 증상이 악화될 경우를 대비해 여유 있는 일정으로 계획하는 것이 도움이 될 수 있습니다.",
    categories: ["afterDailyLife"],
  },
];
