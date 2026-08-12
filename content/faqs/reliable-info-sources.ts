import type { FaqItem } from "@/types/faq";

export const RELIABLE_INFO_SOURCES_FAQS: FaqItem[] = [
  {
    id: "reliable-info-sources-01",
    order: 1,
    question: "커뮤니티 후기는 아예 참고하면 안 되나요?",
    answer:
      "경험을 이해하는 데 참고는 될 수 있지만, 의료적 사실 확인의 근거로 삼기는 어렵습니다. 개인차가 크다는 점을 함께 고려해야 합니다.",
    categories: ["reliableInfoSources"],
  },
  {
    id: "reliable-info-sources-02",
    order: 2,
    question: "임신중절수술 관련 공식 정보는 어디서 확인할 수 있나요?",
    answer:
      "세계보건기구(WHO)나 관련 의학 학회의 공식 자료, 정부·공공기관 안내를 우선 참고할 수 있습니다. 구체적인 링크는 이 사이트의 공식 출처 영역에서도 확인할 수 있습니다.",
    categories: ["reliableInfoSources"],
  },
  {
    id: "reliable-info-sources-03",
    order: 3,
    question: "블로그 글에 병원 이름이 있으면 믿어도 되나요?",
    answer:
      "특정 병원명이 언급되어도 광고성 게시물일 수 있어 그 자체로 신뢰도를 보장하지는 않습니다. 출처와 작성 목적을 함께 확인하는 것이 좋습니다.",
    categories: ["reliableInfoSources"],
  },
  {
    id: "reliable-info-sources-04",
    order: 4,
    question: "검색 결과 상단에 있으면 믿을 만한 정보인가요?",
    answer:
      "검색 노출 순위가 정보의 정확성을 보장하지는 않습니다. 순위와 별개로 출처와 작성일을 확인하는 습관이 필요합니다.",
    categories: ["reliableInfoSources"],
  },
  {
    id: "reliable-info-sources-05",
    order: 5,
    question: "AI 챗봇이 알려준 정보는 그대로 믿어도 되나요?",
    answer:
      "AI가 제공하는 정보도 출처와 최신성을 별도로 확인하는 것이 안전합니다. 의료적 판단이 필요한 내용은 AI 답변만으로 결정하지 말고 의료진과 상담해야 합니다.",
    categories: ["reliableInfoSources"],
  },
];
