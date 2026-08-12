import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const MYTHS_FACTS_PAGE: ContentPage = {
  id: "mythsFacts",
  order: 122,
  numberLabel: "22",
  slug: "임신중절수술-오해와-사실",
  href: ROUTES.mythsFacts,
  navLabel: "임신중절수술 오해와 사실",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술에 대한 흔한 오해, 사실은 어떻게 다른가요?",
  heading: "임신중절수술에 대한 흔한 오해, 사실은 어떻게 다른가요?",
  breadcrumbLabel: "임신중절수술 오해와 사실",
  infoTopicLabel: "이해·정보",
  infoCategory: "understand",
  infoCardDescription:
    "임신중절수술을 둘러싼 흔한 오해를 짚어보고 일반적인 사실 관계를 정리합니다.",
  intro: [
    "임신중절수술에 대해서는 온라인에 정확하지 않은 정보나 과장된 이야기가 함께 떠도는 경우가 있습니다. 이런 오해는 불필요한 불안을 키우거나 잘못된 판단으로 이어질 수 있습니다.",
    "이 글은 자주 언급되는 오해를 짚어보고, 확인된 범위 안에서 일반적인 사실 관계를 정리한 의료정보입니다. 개인의 상황에 대한 진단이나 결과를 보장하지 않습니다.",
  ],
  hubContextLink: {
    before: "전체적인 정보 구성은 ",
    anchor: "임신중절수술 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "myths-facts-01",
    "myths-facts-02",
    "myths-facts-03",
    "myths-facts-04",
    "myths-facts-05",
  ],
  faqTitle: "임신중절수술 오해와 사실 자주 묻는 질문",
  conclusion: [
    "온라인에 떠도는 단정적인 정보를 그대로 믿기보다, 궁금한 점은 공식 출처나 의료진을 통해 확인하는 것이 정확합니다.",
    "이 글은 일반적인 오해를 짚어보는 의료정보이며 특정 결과를 보장하거나 개인의 상황을 진단하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B6E6E",
  accentHoverColor: "#705454",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "단정적 정보 주의",
      text: "특정 결과를 보장하는 단정적인 온라인 정보는 신중하게 볼 필요가 있습니다.",
    },
    {
      numberLabel: "02",
      title: "개인차 고려",
      text: "많은 정보가 일반화된 설명이며 실제로는 개인차가 있을 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "공식 확인",
      text: "정확한 사실 확인은 공식 출처나 의료진 상담을 통해 이뤄져야 합니다.",
    },
  ],
  seo: {
    title: "임신중절수술에 대한 흔한 오해, 사실은 어떻게 다른가요?",
    description:
      "임신중절수술을 둘러싼 흔한 오해를 짚어보고 일반적인 사실 관계를 의료정보로 정리합니다.",
    keywords: [
      "임신중절수술 오해",
      "임신중절수술 진실",
      "임신중절수술 잘못된 정보",
      "임신중절수술 사실 확인",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "myth-method",
      order: 1,
      numberLabel: "01",
      heading: "'특정 방법이 무조건 가장 안전하다'는 말은 사실인가요?",
      layout: "prose",
      directAnswer:
        "그렇지 않습니다. 적용 가능한 방법은 임신 주수와 건강상태에 따라 달라질 수 있어 특정 방법을 모두에게 동일하게 권할 수 없습니다.",
      paragraphs: [
        "방법 간 차이가 궁금하다면 관련 안내를 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.procedureMethods,
      relatedLabel: "흡입술과 소파술 차이 보기",
    },
    {
      id: "myth-fertility",
      order: 2,
      numberLabel: "02",
      heading: "'시술 후 임신이 어려워진다'는 말은 사실인가요?",
      layout: "prose",
      directAnswer:
        "이런 주장을 단정적으로 확인할 근거는 이 글에서 제시하지 않습니다. 향후 임신과 관련해 걱정되는 부분이 있다면 온라인의 단정적인 정보보다 진료를 통해 확인하는 것이 정확합니다.",
      paragraphs: [],
      relatedHref: ROUTES.nextPregnancyPlanning,
      relatedLabel: "다음 임신 계획 안내 보기",
    },
    {
      id: "myth-pain",
      order: 3,
      numberLabel: "03",
      heading: "'통증이 전혀 없다'거나 '매우 심하다'는 말 중 무엇이 맞나요?",
      layout: "prose",
      directAnswer:
        "통증 정도는 개인차가 커서 '전혀 없다'거나 '항상 매우 심하다'처럼 극단적으로 단정하는 정보는 모두 신중하게 볼 필요가 있습니다.",
      paragraphs: [],
      relatedHref: ROUTES.painChange,
      relatedLabel: "수술 후 통증 변화 안내 보기",
    },
    {
      id: "myth-checklist",
      order: 4,
      numberLabel: "04",
      heading: "오해를 피하려면 어떤 정보를 우선 봐야 하나요?",
      layout: "callout",
      directAnswer:
        "출처가 명확하고 단정적 표현을 피하는 정보를 우선 참고하고, 궁금한 점은 상담에서 직접 확인하는 것이 정확합니다.",
      paragraphs: [],
      callout: "확신을 주는 단정적 정보일수록 출처와 근거를 한 번 더 확인하세요.",
      relatedHref: ROUTES.reliableInfoSources,
      relatedLabel: "신뢰할 수 있는 정보 확인 방법 보기",
    },
  ],
};
