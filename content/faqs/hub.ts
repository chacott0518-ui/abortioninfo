import type { FaqItem } from "@/types/faq";

/**
 * FAQ 통합 페이지 확장 문항.
 * 기존 주제 FAQ와 중복되지 않는 질문만 추가한다.
 */
export const HUB_FAQS: FaqItem[] = [
  {
    id: "hub-diff-01",
    order: 10,
    question: "약물중절에 대해서도 안내받을 수 있나요?",
    answer:
      "연세365산부인과의원에서는 약물중절을 직접 시행하거나 관련 약물을 처방하지 않지만, 약물중절에 관한 일반적인 정보와 현재 상태에 따른 상담 방향은 안내할 수 있습니다. 구체적인 진료 방법과 적용 가능 여부는 임신 주수와 건강 상태를 확인한 뒤 의료진과 상담해야 합니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "common"],
  },
  {
    id: "hub-diff-02",
    order: 11,
    question: "초기 임신과 후기 임신에서 진료 방법이 다른가요?",
    answer:
      "임신 주수에 따라 적용 가능한 진료 방법과 검사 범위가 달라질 수 있습니다. 증상이나 주수만으로 단정하기 어렵고, 초음파 등 검사 결과와 의료진 상담을 함께 확인해야 합니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "common"],
  },
  {
    id: "hub-diff-03",
    order: 12,
    question: "임신 테스트 후 바로 상담을 받아야 하나요?",
    answer:
      "임신이 확인되면 가능한 시기에 상담을 받아 현재 상태를 확인하는 편이 도움이 됩니다. 진료 가능 여부와 시기는 개인 상태와 의료기관 기준에 따라 달라질 수 있어, 검사 결과를 바탕으로 확인하는 것이 안전합니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-diff-04",
    order: 13,
    question: "이전 임신중절수술 경험이 이번 진료에 영향을 줄 수 있나요?",
    answer:
      "이전 수술 이력이 있으면 자궁 상태와 회복 경과에 따라 이번 진료 계획이 달라질 수 있습니다. 과거 경험과 현재 건강 상태를 함께 알려 주면 상담과 검사가 수월해집니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-01",
    order: 20,
    question: "임신 초기 증상과 수술 후 증상을 어떻게 구분하나요?",
    answer:
      "임신 초기에는 메스꺼움·유방 변화 등이 나타날 수 있고, 수술 후에는 출혈·복부 불편이 흔합니다. 증상만으로 상태를 단정하기 어렵고, 검사와 경과 관찰을 함께 확인하는 편이 안전합니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-02",
    order: 21,
    question: "임신중절수술 상담에서는 어떤 검사를 받나요?",
    answer:
      "초음파, 혈액 검사, 건강 상태 확인 등 필요한 항목을 확인하는 경우가 많습니다. 검토 중인 진료 방법과 개인 상태에 따라 추가 검사가 필요할 수 있어 결과 설명까지 들어보는 것이 중요합니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-03",
    order: 22,
    question: "전신 질환이 있으면 추가 검사가 필요한 경우가 있나요?",
    answer:
      "당뇨, 심혈관 질환, 출혈 경향 등이 있으면 수술·마취 계획을 확인하기 위해 추가 검사가 안내될 수 있습니다. 필요한 범위는 개인 상태에 따라 달라질 수 있으므로, 왜 해당 검사가 필요한지 설명을 요청하세요.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-04",
    order: 23,
    question: "검사 결과만으로 수술 시기를 바로 결정하나요?",
    answer:
      "검사 결과는 중요한 근거이지만, 건강 상태, 일정, 상담 내용도 함께 고려합니다. 결과만으로 시기를 단정하기보다 설명과 질문을 충분히 나눈 뒤 판단하는 편이 안전합니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-cost-01",
    order: 30,
    question: "견적에 검사비와 수술비는 어떻게 구분되나요?",
    answer:
      "견적은 검사·마취·수술·약제·사후진료가 어떻게 나뉘는지에 따라 달라질 수 있습니다. 각 항목의 포함 범위를 함께 구분해야 총액을 정확히 비교할 수 있습니다.",
    relatedSlug: "비용",
    relatedLabel: "비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-02",
    order: 31,
    question: "검사비와 마취비는 별도로 확인해야 하나요?",
    answer:
      "검사비와 마취비가 분리돼 있는지 확인하면 견적 비교가 수월합니다. 같은 총액이라도 포함·제외 항목이 다르면 실제 부담이 달라질 수 있습니다.",
    relatedSlug: "비용",
    relatedLabel: "비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-03",
    order: 32,
    question: "마취 방법에 따라 비용이 달라질 수 있나요?",
    answer:
      "국소마취와 전신마취 등 선택에 따라 비용과 회복 과정이 달라질 수 있습니다. 어느 한쪽이 모든 사람에게 더 낫다고 단정하기는 어렵고, 본인 상태에 맞는지 함께 확인하세요.",
    relatedSlug: "비용",
    relatedLabel: "비용과 진료 방법",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-04",
    order: 33,
    question: "추가 검사가 필요한 경우도 있나요?",
    answer:
      "건강 상태나 검사 결과에 따라 추가 검사가 필요할 수 있습니다. 추가 검사의 이유와 비용 포함 여부를 미리 물어두면 견적 오해를 줄일 수 있습니다.",
    relatedSlug: "비용",
    relatedLabel: "비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-05",
    order: 34,
    question: "비용 확인 시 포함 항목을 왜 살펴봐야 하나요?",
    answer:
      "총액만 보면 서로 다른 구성의 견적을 같은 기준으로 비교하기 어렵습니다. 검사·마취·약제·사후진료가 어디까지 포함되는지 확인해야 실제 부담을 파악하기 쉽습니다.",
    relatedSlug: "비용",
    relatedLabel: "비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-recovery-01",
    order: 40,
    question: "수술 후 일상생활은 언제부터 가능한가요?",
    answer:
      "일상 복귀 시점은 출혈·통증·피로 정도와 의료진 안내에 따라 달라질 수 있습니다. 무리한 활동은 회복에 영향을 줄 수 있어, 허용 범위와 단계적 재개 일정을 함께 확인하는 편이 좋습니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-02",
    order: 41,
    question: "목욕과 샤워는 어떤 점을 주의해야 하나요?",
    answer:
      "수술 후 목욕·샤워는 감염 위험을 줄이기 위해 허용 시점까지 제한되는 경우가 많습니다. 허용 시점은 개인 경과에 따라 달라질 수 있어 의료진 설명을 우선하세요.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-03",
    order: 42,
    question: "운전 재개 시점은 어떻게 판단하나요?",
    answer:
      "출혈·통증·어지럼증이 운전에 지장을 주는지 확인한 뒤 판단하는 편이 안전합니다. 스스로 편하다고 느껴도 경과 관찰 결과를 함께 확인하세요.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-04",
    order: 43,
    question: "회복 속도는 사람마다 다른가요?",
    answer:
      "임신 주수, 건강 상태, 진료 방법에 따라 회복 체감이 다르게 느껴질 수 있습니다. 다른 사람의 일정과 동일하게 맞추기보다 본인 경과를 기준으로 확인하는 것이 좋습니다.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-05",
    order: 44,
    question: "회복 중 출혈이 지속되면 어떻게 해야 하나요?",
    answer:
      "회복 과정에서 출혈이 나타날 수 있지만, 점점 심해지거나 안내와 다른 변화가 있으면 의료진에게 확인하세요. 출혈량과 통증 정도를 구체적으로 설명해 두면 도움이 됩니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-caution-01",
    order: 50,
    question: "수술 전 복용 약을 알려야 하나요?",
    answer:
      "복용 중인 약과 보조제는 미리 알려 주는 것이 좋습니다. 전신 질환·알레르기·이전 산부인과 이력도 함께 정리해 두면 검사와 상담이 수월해집니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-02",
    order: 51,
    question: "수술 후 무거운 물건을 들면 안 되는 이유는 무엇인가요?",
    answer:
      "초기에는 무거운 물건 들기나 과도한 복부 압력이 회복에 영향을 줄 수 있어 피하도록 안내되는 경우가 많습니다. 구체적 금기 기간은 담당 의료진 설명을 따르세요.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-03",
    order: 52,
    question: "처방약 사용법을 잘못 알았을 때는 어떻게 해야 하나요?",
    answer:
      "사용법을 헷갈렸다면 임의로 추가 복용하기보다 안내받은 방법을 다시 확인하는 편이 안전합니다. 이상 반응이 의심되면 의료진에게 문의하세요.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-04",
    order: 53,
    question: "운동과 사우나는 언제부터 확인해야 하나요?",
    answer:
      "운동·사우나·고온 노출은 회복 안내에 따라 허용 시점이 달라질 수 있습니다. 강도와 충격 가능성을 고려해 단계적으로 재개하는 편이 일반적입니다.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-05",
    order: 54,
    question: "수술 후 성관계는 언제 확인해야 하나요?",
    answer:
      "성관계와 탐폰 사용은 감염·출혈 위험을 줄이기 위해 허용 시점까지 미루는 안내가 흔합니다. 본인 경과에 맞는 일정을 의료진에게 확인하세요.",
    relatedSlug: "주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-hospital-01",
    order: 60,
    question: "검사 결과를 어떤 방식으로 설명받아야 하나요?",
    answer:
      "수치만 나열되기보다 현재 상태와 진료 가능 여부가 어떻게 연결되는지 이해할 수 있게 설명해 주는지가 중요합니다. 모르는 항목은 질문 목록으로 정리해 두면 도움이 됩니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-02",
    order: 61,
    question: "진료 방법의 장점과 제한점을 모두 확인해야 하나요?",
    answer:
      "장점만 듣기보다 제한점과 회복 과정도 함께 확인하는 편이 기대 관리에 도움이 됩니다. 본인 건강 상태와 일정을 기준으로 비교하세요.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-03",
    order: 62,
    question: "수술 후 경과 확인 일정도 비교해야 하나요?",
    answer:
      "경과 확인 일정과 이상 증상 시 연락 방법은 수술 후 관리에 영향을 줄 수 있습니다. 비용과 함께 관리 범위를 비교하면 선택이 균형 있어집니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-04",
    order: 63,
    question: "비용만으로 병원을 선택해도 괜찮을까요?",
    answer:
      "비용은 중요한 비교 항목이지만, 검사 설명·진료 상담·사후관리까지 함께 보는 편이 안전합니다. 총액만 낮아 보여도 포함 범위가 다르면 실제 부담이 달라질 수 있습니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-05",
    order: 64,
    question: "병원 방문 전 질문을 정리하는 것이 도움이 되나요?",
    answer:
      "질문을 메모해 가면 설명 속도를 따라가기 쉽고, 포함·제외 항목을 다시 확인하기도 수월합니다. 진료 방법·비용·관리·이상 증상 대응을 구분해 두면 좋습니다.",
    relatedSlug: "병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-review-01",
    order: 70,
    question: "임신중절수술 후기를 그대로 믿기 어려운 이유는 무엇인가요?",
    answer:
      "후기 작성자와 본인의 임신 주수·건강 상태·진료 방법이 다를 수 있기 때문입니다. 참고 자료로 활용하되, 중요한 판단은 검사와 상담에서 확인하는 편이 안전합니다.",
    relatedSlug: "후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
  {
    id: "hub-review-02",
    order: 71,
    question: "광고성 후기는 어떻게 구분할 수 있나요?",
    answer:
      "결과만 강조하거나 광고·협찬 표시가 불분명한 글은 신중히 구분하세요. 개인 상태·진료 방법·회복 과정이 구체적으로 적힌 글을 우선 참고하는 편이 도움이 됩니다.",
    relatedSlug: "후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
  {
    id: "hub-review-03",
    order: 72,
    question: "후기 작성자의 임신 주수를 확인해야 하나요?",
    answer:
      "임신 주수와 진료 방법이 적혀 있으면 비교 기준으로 쓰기 쉬워집니다. 상태 정보 없이 결과만 적힌 글은 본인 상황에 그대로 적용하기 어렵습니다.",
    relatedSlug: "후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
  {
    id: "hub-review-04",
    order: 73,
    question: "회복기간 후기가 사람마다 다른 이유는 무엇인가요?",
    answer:
      "임신 주수, 건강 상태, 진료 방법과 생활 환경에 따라 회복 체감이 달라질 수 있습니다. 다른 사람의 일정과 동일하게 맞추기보다 본인 경과를 기준으로 확인하세요.",
    relatedSlug: "회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "reviews", "recovery"],
  },
  {
    id: "hub-review-05",
    order: 74,
    question: "수술 결과만 강조된 후기는 왜 주의해야 하나요?",
    answer:
      "결과만 강조되면 회복 과정·불편·개인차 정보가 빠져 기대와 실제가 어긋나기 쉽습니다. 과정과 조건이 함께 적힌 글을 우선 참고하는 편이 안전합니다.",
    relatedSlug: "후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
];
