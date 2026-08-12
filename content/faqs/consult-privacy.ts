import type { FaqItem } from "@/types/faq";

export const CONSULT_PRIVACY_FAQS: FaqItem[] = [
  {
    id: "consult-privacy-01",
    order: 1,
    question: "상담 내용이 가족에게 자동으로 전달되나요?",
    answer:
      "일반적으로 진료 정보는 환자 본인 동의 없이 임의로 가족에게 전달되지 않는다고 설명됩니다. 다만 구체적인 절차는 병원마다 다를 수 있어, 걱정되는 부분은 상담 전에 직접 문의해 확인하는 것이 정확합니다.",
    categories: ["consultPrivacy"],
  },
  {
    id: "consult-privacy-02",
    order: 2,
    question: "동행인도 제 진료 내용을 알게 되나요?",
    answer:
      "동행인에게 공유되는 정보 범위는 병원의 진행 방식에 따라 다를 수 있습니다. 원하지 않는 정보 공유가 걱정된다면 상담 시작 전에 미리 이야기해 두는 것이 도움이 됩니다.",
    categories: ["consultPrivacy"],
  },
  {
    id: "consult-privacy-03",
    order: 3,
    question: "온라인 상담이나 예약 시 입력한 정보는 안전한가요?",
    answer:
      "정보 처리 방식은 병원과 이용하는 채널에 따라 다를 수 있습니다. 궁금하다면 예약 채널의 안내를 확인하거나 병원에 직접 문의하는 것이 정확합니다.",
    categories: ["consultPrivacy"],
  },
  {
    id: "consult-privacy-04",
    order: 4,
    question: "임신중절수술 상담 기록은 어디까지 남게 되나요?",
    answer:
      "진료 기록의 보관 범위와 방식은 의료기관의 내부 정책에 따라 달라질 수 있습니다. 이 글에서 특정 병원의 정책을 단정하지 않으며, 정확한 사항은 상담을 원하는 병원에 확인해야 합니다.",
    categories: ["consultPrivacy"],
  },
  {
    id: "consult-privacy-05",
    order: 5,
    question: "개인정보가 걱정돼 상담을 미루고 있다면 어떻게 해야 하나요?",
    answer:
      "걱정되는 부분을 상담 전화나 방문 시 미리 질문해 확인하면 불안을 줄이는 데 도움이 될 수 있습니다. 확인 없이 혼자 판단해 상담을 미루기보다 직접 문의해 보는 것을 권합니다.",
    categories: ["consultPrivacy"],
  },
];
