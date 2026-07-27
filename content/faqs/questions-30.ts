import type { FaqItem } from "@/types/faq";

/**
 * /임신중절수술-자주묻는질문 전용 30문항.
 * 기존 FAQ(공통·주제·hub)와 의미 중복을 피한 신규 원본이다.
 */
export const FAQ_QUESTIONS_30: FaqItem[] = [
  {
    id: "q30-01",
    order: 1,
    question: "임신 초기에 나타나는 증상은 무엇인가요?",
    answer:
      "임신 초기에는 메스꺼움, 유방 변화, 피로감 등이 나타날 수 있습니다. 증상의 유무와 정도는 개인마다 달라 검사로 현재 상태를 확인하는 편이 정확합니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-02",
    order: 2,
    question: "생리가 늦어지면 바로 검사를 받아야 하나요?",
    answer:
      "생리 지연이 있으면 임신 여부를 확인하는 검사를 고려할 수 있습니다. 다만 다른 원인일 수도 있으니 증상만으로 단정하지는 않습니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-03",
    order: 3,
    question: "임신 테스트기와 병원 검사 결과가 다를 수 있나요?",
    answer:
      "자가 테스트기와 병원 검사는 민감도와 확인 시점에 따라 결과가 다를 수 있습니다. 불확실하면 병원에서 초음파·혈액 검사로 확인하는 편이 안전합니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-04",
    order: 4,
    question: "출혈이 있는데도 임신일 수 있나요?",
    answer:
      "착상 출혈 등으로 생리와 혼동되는 경우가 있을 수 있습니다. 출혈 양과 패턴이 평소와 다르면 검사로 상태를 확인해 보는 편이 좋습니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-05",
    order: 5,
    question: "이전 수술 이력이 있으면 상담 시 알려야 하나요?",
    answer:
      "자궁 수술이나 이전 임신중절수술 이력이 있으면 진료 계획에 영향을 줄 수 있습니다. 과거 경험과 현재 건강 상태를 함께 알려 주면 상담이 수월합니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-06",
    order: 6,
    question: "초음파 검사는 왜 필요한가요?",
    answer:
      "초음파는 임신 주수와 자궁 내 상태를 확인하는 데 도움이 됩니다. 진료 가능 여부와 방법을 판단하는 데 필요한 정보를 제공할 수 있습니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-07",
    order: 7,
    question: "혈액 검사에서는 무엇을 확인하나요?",
    answer:
      "혈액 검사는 임신 호르몬 수치와 건강 상태 등을 확인하는 데 사용됩니다. 필요한 검사 항목은 개인 상태와 진료 계획에 따라 달라질 수 있습니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-08",
    order: 8,
    question: "전신 질환이 있으면 검사 결과가 달라질 수 있나요?",
    answer:
      "당뇨, 심혈관 질환, 출혈 경향 등이 있으면 검사 해석과 수술·마취 계획이 달라질 수 있습니다. 기존 진단과 치료 이력을 미리 알려 주면 상담이 수월합니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-09",
    order: 9,
    question: "복용 중인 약이 있으면 수술 전 무엇을 확인해야 하나요?",
    answer:
      "혈압약, 항응고제, 호르몬제 등 복용 약이 수술·마취 계획에 영향을 줄 수 있어 미리 알려 주는 것이 좋습니다. 중단·조정 여부는 의료진 안내를 따르세요.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-10",
    order: 10,
    question: "알레르기가 있으면 상담 시 알려야 하나요?",
    answer:
      "약물·마취제 알레르기가 있으면 수술 계획에 영향을 줄 수 있어 반드시 알려 주세요. 과거 알레르기 반응 경험도 함께 설명하면 도움이 됩니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-11",
    order: 11,
    question: "상담 시기가 진료에 영향을 줄 수 있나요?",
    answer:
      "임신 주수와 건강 상태에 따라 적용 가능한 진료 방법이 달라질 수 있기 때문입니다. 가능한 시기에 상담을 받아 현재 상태를 확인하는 편이 도움이 됩니다.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-12",
    order: 12,
    question: "수술 당일 보호자 동반 여부는 어떻게 확인하나요?",
    answer:
      "기관마다 귀가·안내 기준이 달라 보호자 동반을 권하는 경우가 있습니다. 수술 전 안내문에서 동행·교통편·휴식 계획을 확인하세요.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-13",
    order: 13,
    question: "수술 전날 식사나 금식은 어떻게 해야 하나요?",
    answer:
      "금식·가벼운 식사 허용 여부는 마취·일정 계획에 따라 달라질 수 있습니다. 임의로 판단하지 말고 수술 전 안내를 확인하세요.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-14",
    order: 14,
    question: "수술 당일 준비물은 무엇이 필요한가요?",
    answer:
      "신분증, 편한 복장, 위생용품 등 필요한 준비물은 기관마다 안내가 다를 수 있습니다. 수술 전 안내문에서 확인하고, 모르는 항목은 미리 문의하세요.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-15",
    order: 15,
    question: "당뇨가 있으면 검사 과정에서 무엇을 추가로 확인하나요?",
    answer:
      "혈당 조절 상태가 수술·회복 계획에 영향을 줄 수 있어 관련 검사를 함께 확인하는 경우가 있습니다. 복용 약과 최근 수치도 알려 주면 도움이 됩니다.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-16",
    order: 16,
    question: "국소마취와 전신마취 중 어떤 것이 맞는지 어떻게 알 수 있나요?",
    answer:
      "마취 방법은 임신 주수, 건강 상태, 진료 계획에 따라 달라질 수 있습니다. 각 방법의 장단점과 회복 과정을 상담에서 함께 확인하세요.",
    categories: ["faq-questions", "method"],
  },
  {
    id: "q30-17",
    order: 17,
    question: "수술 시간은 보통 얼마나 걸리나요?",
    answer:
      "수술 시간은 임신 주수와 진료 방법에 따라 달라질 수 있습니다. 대략적인 소요 시간은 상담 시 안내받을 수 있으며, 개인 상태에 따라 달라질 수 있습니다.",
    categories: ["faq-questions", "method"],
  },
  {
    id: "q30-18",
    order: 18,
    question: "수술 후 바로 귀가할 수 있나요?",
    answer:
      "당일 귀가 가능 여부는 마취 방법, 회복 상태, 기관 안내에 따라 달라질 수 있습니다. 귀가 후 관리 방법과 연락처를 미리 확인하는 것이 좋습니다.",
    categories: ["faq-questions", "method"],
  },
  {
    id: "q30-19",
    order: 19,
    question: "자궁 내 장치(IUD)가 있으면 수술 전 확인이 필요한가요?",
    answer:
      "자궁 내 장치가 있으면 제거 여부와 시점을 상담에서 확인해야 할 수 있습니다. 장치 종류와 위치에 따라 계획이 달라질 수 있으니 미리 알려 주세요.",
    categories: ["faq-questions", "method"],
  },
  {
    id: "q30-20",
    order: 20,
    question: "수술 후 피임 방법도 상담할 수 있나요?",
    answer:
      "수술 후 피임 방법에 대한 상담을 함께 받을 수 있는 경우가 많습니다. 회복 기간과 적합한 방법은 개인 상태에 따라 달라질 수 있으니 상담에서 확인하세요.",
    categories: ["faq-questions", "method"],
  },
  {
    id: "q30-21",
    order: 21,
    question: "실손보험 청구 전에 어떤 서류를 확인해야 하나요?",
    answer:
      "진단서·영수증·세부 내역서 등 필요한 서류는 약관과 보험사 안내에 따라 달라질 수 있습니다. 적용 여부는 이 페이지만으로 단정하지 말고 관련 기관에 확인하세요.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-22",
    order: 22,
    question: "비용 상담 시 총 예상 비용을 확인하려면 무엇을 물어봐야 하나요?",
    answer:
      "검사·마취·수술·약제·사후진료가 어디까지 포함되는지, 추가 비용이 생길 수 있는 조건을 구분해 묻는 편이 도움이 됩니다. 포함·제외 항목을 구체적으로 확인하세요.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-23",
    order: 23,
    question: "건강보험 적용 범위는 어디에서 확인해야 하나요?",
    answer:
      "급여·비급여 구분은 개인 상황과 제도 안내에 따라 달라질 수 있습니다. 상담에서 해당 항목을 확인하고, 필요하면 관련 기관 안내도 함께 참고하세요.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-24",
    order: 24,
    question: "견적에 약제비와 재진비가 포함되는지 왜 확인해야 하나요?",
    answer:
      "총액만 보면 포함 범위가 다른 견적을 같은 기준으로 비교하기 어렵습니다. 약제·재진·추가 검사가 제외되면 실제 부담이 달라질 수 있습니다.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-25",
    order: 25,
    question: "비용 비교 자료를 요청해도 되나요?",
    answer:
      "포함·제외 항목이 적힌 자료를 요청하면 구두 설명만 들을 때보다 비교가 수월합니다. 항목이 불명확하면 다시 질문해 두는 편이 좋습니다.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-26",
    order: 26,
    question: "수술 후 바로 일상으로 돌아갈 수 있나요?",
    answer:
      "초기에는 출혈·복부 불편·피로감이 나타날 수 있어 바로 일상 복귀가 어려운 경우도 있습니다. 경과와 개인 상태에 따라 회복 속도는 달라질 수 있습니다.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-27",
    order: 27,
    question: "회복 중 갑작스러운 증상이 생기면 무엇을 확인해야 하나요?",
    answer:
      "갑작스러운 과다 출혈, 심한 통증, 고열, 어지럼증처럼 안내와 다른 증상이 있으면 의료진에게 확인하는 편이 안전합니다. 응급·야간 연락 방법을 미리 저장해 두세요.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-28",
    order: 28,
    question: "사후진료 일정은 개인마다 달라질 수 있나요?",
    answer:
      "건강 상태와 수술·회복 경과에 따라 사후진료 간격이 달라질 수 있습니다. 안내받은 일정을 기준으로 하며, 불편이 있으면 예정보다 일찍 확인할 수 있습니다.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-29",
    order: 29,
    question: "수술 후 얼마나 쉬어야 하나요?",
    answer:
      "휴식 기간은 출혈·통증·피로 정도와 의료진 안내에 따라 달라질 수 있습니다. 일정과 회복 상태를 고려해 단계적으로 활동을 재개하는 편이 좋습니다.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-30",
    order: 30,
    question: "수술 후 감정 변화가 나타날 수 있나요?",
    answer:
      "수술 후 신체적 회복과 함께 감정 변화를 경험하는 경우도 있습니다. 혼자 겪지 않아도 되며, 필요하면 상담·지원 자원을 함께 확인하는 것도 도움이 될 수 있습니다.",
    categories: ["faq-questions", "recovery"],
  },
];

export const FAQ_QUESTIONS_30_GROUPS = [
  {
    id: "q30-symptoms",
    numberLabel: "01",
    heading: "임신 확인과 증상",
    faqIds: ["q30-01", "q30-02", "q30-03", "q30-04", "q30-05"],
  },
  {
    id: "q30-exam",
    numberLabel: "02",
    heading: "검사와 상담",
    faqIds: ["q30-06", "q30-07", "q30-08", "q30-09", "q30-10"],
  },
  {
    id: "q30-timing",
    numberLabel: "03",
    heading: "수술 시기와 준비",
    faqIds: ["q30-11", "q30-12", "q30-13", "q30-14", "q30-15"],
  },
  {
    id: "q30-method",
    numberLabel: "04",
    heading: "진료 방법과 마취",
    faqIds: ["q30-16", "q30-17", "q30-18", "q30-19", "q30-20"],
  },
  {
    id: "q30-cost",
    numberLabel: "05",
    heading: "비용과 보험 확인",
    faqIds: ["q30-21", "q30-22", "q30-23", "q30-24", "q30-25"],
  },
  {
    id: "q30-recovery",
    numberLabel: "06",
    heading: "회복과 수술 후 확인",
    faqIds: ["q30-26", "q30-27", "q30-28", "q30-29", "q30-30"],
  },
] as const;
