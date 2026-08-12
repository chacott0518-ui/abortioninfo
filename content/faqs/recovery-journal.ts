import type { FaqItem } from "@/types/faq";

export const RECOVERY_JOURNAL_FAQS: FaqItem[] = [
  {
    id: "recovery-journal-01",
    order: 1,
    question: "기록을 매일 꼭 해야 하나요?",
    answer:
      "매일 하지 않아도 괜찮습니다. 변화가 있을 때만 간단히 남겨도 재방문·상담에서 참고하는 데 도움이 될 수 있습니다.",
    categories: ["recoveryJournal"],
  },
  {
    id: "recovery-journal-02",
    order: 2,
    question: "특별한 앱을 사용해야 하나요?",
    answer:
      "특별한 도구가 필요하지는 않습니다. 메모 앱이나 종이 노트 등 편한 방식으로 기록하면 충분합니다.",
    categories: ["recoveryJournal"],
  },
  {
    id: "recovery-journal-03",
    order: 3,
    question: "임신중절수술 후 기록을 안 했는데 재방문해도 괜찮을까요?",
    answer:
      "기록이 없어도 재방문과 상담은 가능합니다. 기억나는 범위 안에서 증상을 설명하면 되며, 기록은 참고를 돕는 선택적인 방법입니다.",
    categories: ["recoveryJournal"],
  },
  {
    id: "recovery-journal-04",
    order: 4,
    question: "사진으로 남겨도 되나요?",
    answer:
      "필요하다고 느껴지면 사진으로 기록하는 것도 방법이 될 수 있습니다. 다만 민감한 정보이므로 보관과 공유에 유의하는 것이 좋습니다.",
    categories: ["recoveryJournal"],
  },
  {
    id: "recovery-journal-05",
    order: 5,
    question: "기록만 보고 병원에 갈지 말지 스스로 판단해도 되나요?",
    answer:
      "기록은 참고 자료일 뿐 진단을 대신하지 않습니다. 걱정되는 변화가 있다면 기록 여부와 관계없이 병원에 확인하는 것이 안전합니다.",
    categories: ["recoveryJournal"],
  },
];
