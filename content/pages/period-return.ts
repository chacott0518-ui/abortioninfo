import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const PERIOD_RETURN_PAGE: ContentPage = {
  id: "periodReturn",
  order: 112,
  numberLabel: "12",
  slug: "임신중절수술-후-생리",
  href: ROUTES.periodReturn,
  navLabel: "임신중절수술 후 생리",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 생리는 언제 다시 시작하나요?",
  heading: "임신중절수술 후 생리는 언제 다시 시작하나요?",
  breadcrumbLabel: "임신중절수술 후 생리",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "생리 재개 시점과 주기·양상 변화를 확인할 때 참고할 수 있는 일반적인 관점을 안내합니다.",
  intro: [
    "임신중절수술 후 생리가 다시 시작되는 시점은 개인의 호르몬 변화와 회복 속도에 따라 차이가 있어 특정 날짜로 단정하기 어렵습니다. 또한 처음 몇 번의 생리는 평소와 양상이 다르게 느껴질 수 있습니다.",
    "이 글은 생리 재개와 관련해 일반적으로 언급되는 관점과, 확인이 필요한 변화를 정리한 의료정보입니다. 개인의 정확한 상태는 진료를 통해 확인해야 합니다.",
  ],
  hubContextLink: {
    before: "회복 전체 흐름은 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "period-return-01",
    "period-return-02",
    "period-return-03",
    "period-return-04",
    "period-return-05",
  ],
  faqTitle: "임신중절수술 후 생리 자주 묻는 질문",
  conclusion: [
    "생리 재개 시점과 양상은 개인차가 커서 일률적인 기준을 적용하기 어렵습니다. 평소와 크게 다른 변화가 지속된다면 자가 판단보다 진료를 통해 확인하는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 상태를 진단하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B5E5E",
  accentHoverColor: "#704848",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "개인차 큰 영역",
      text: "생리 재개 시점은 호르몬 변화와 회복 속도에 따라 개인차가 있습니다.",
    },
    {
      numberLabel: "02",
      title: "첫 생리 양상",
      text: "처음 몇 번의 생리는 양이나 주기가 평소와 다르게 느껴질 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "지속되는 변화",
      text: "변화가 오래 지속되면 진료를 통해 확인하는 것이 필요합니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 생리는 언제 다시 시작하나요?",
    description:
      "임신중절수술 후 생리 재개 시점과 주기·양상 변화를 확인할 때 참고할 수 있는 내용을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 생리",
      "임신중절수술 생리 언제",
      "임신중절수술 후 생리 양상",
      "임신중절수술 생리 불규칙",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 회복·사후관리 안내", href: YEONSEI365_LINKS.recovery },
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "period-timing",
      order: 1,
      numberLabel: "01",
      heading: "생리는 보통 언제쯤 다시 시작하나요?",
      layout: "prose",
      directAnswer:
        "재개 시점은 개인의 호르몬 변화와 회복 속도에 따라 달라질 수 있어 특정 기간을 일괄 기준으로 제시하기 어렵습니다.",
      paragraphs: [
        "출혈이 멈춘 뒤 첫 생리가 시작되기까지 걸리는 시간은 사람마다 차이가 있습니다. 인터넷의 특정 정보를 본인에게 그대로 적용하지 않는 것이 좋습니다.",
      ],
    },
    {
      id: "period-pattern",
      order: 2,
      numberLabel: "02",
      heading: "처음 생리 양상이 평소와 다를 수 있나요?",
      layout: "prose",
      directAnswer:
        "네. 처음 몇 번의 생리는 양이 평소보다 많거나 적을 수 있고, 주기도 일시적으로 불규칙해질 수 있습니다.",
      paragraphs: [
        "이런 변화가 반드시 문제를 의미하는 것은 아니지만, 오래 지속되거나 정도가 심하다면 확인이 필요할 수 있습니다.",
      ],
    },
    {
      id: "period-vs-bleeding",
      order: 3,
      numberLabel: "03",
      heading: "수술 후 출혈과 첫 생리는 어떻게 구분하나요?",
      layout: "prose",
      directAnswer:
        "시술 직후 출혈과 이후 시작되는 생리를 명확히 구분하기 어려운 경우가 있어, 헷갈린다면 진료에서 확인하는 것이 정확합니다.",
      paragraphs: [
        "출혈 지속 기간이나 양상이 궁금하다면 회복 중 이상증상 확인 안내를 함께 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "회복 중 이상증상 확인하기",
    },
    {
      id: "period-when-to-check",
      order: 4,
      numberLabel: "04",
      heading: "언제 병원에서 확인받는 것이 좋을까요?",
      layout: "callout",
      directAnswer:
        "생리가 오랫동안 시작되지 않거나, 양이나 통증이 평소와 크게 다른 상태가 지속된다면 진료를 통해 확인하는 것이 필요합니다.",
      paragraphs: [],
      callout:
        "생리 관련 변화가 걱정된다면 인터넷 정보로 판단하지 말고 진료에서 확인하세요.",
      relatedHref: ROUTES.contraceptionTiming,
      relatedLabel: "피임 상담 시점 확인하기",
    },
  ],
};
