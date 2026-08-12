import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const PRE_PROCEDURE_ANXIETY_PAGE: ContentPage = {
  id: "preProcedureAnxiety",
  order: 118,
  numberLabel: "18",
  slug: "임신중절수술-전-심리적-부담",
  href: ROUTES.preProcedureAnxiety,
  navLabel: "임신중절수술 전 심리적 부담",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 전 심리적 부담, 어떻게 준비하면 좋을까요?",
  heading: "임신중절수술 전 심리적 부담, 어떻게 준비하면 좋을까요?",
  breadcrumbLabel: "임신중절수술 전 심리적 부담",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "결정 과정에서 느끼는 불안·부담을 줄이는 데 참고할 수 있는 일반적인 방법을 안내합니다.",
  intro: [
    "임신중절수술을 앞두고 불안이나 부담을 느끼는 것은 자연스러운 반응으로 언급됩니다. 정보 부족, 주변 시선에 대한 걱정, 결정 자체에 대한 부담 등 이유는 다양할 수 있습니다.",
    "이 글은 상담 전 심리적 부담을 줄이는 데 참고할 수 있는 일반적인 방법을 정리한 의료정보이며, 개인의 심리 상태를 진단하지 않습니다.",
  ],
  hubContextLink: {
    before: "전반적인 상담 준비는 ",
    anchor: "임신중절수술 안내",
    after: "에서도 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "pre-procedure-anxiety-01",
    "pre-procedure-anxiety-02",
    "pre-procedure-anxiety-03",
    "pre-procedure-anxiety-04",
    "pre-procedure-anxiety-05",
  ],
  faqTitle: "임신중절수술 전 심리적 부담 자주 묻는 질문",
  conclusion: [
    "불안이나 부담을 느끼는 것은 자연스러운 반응일 수 있으며, 정보를 충분히 확인하고 필요한 경우 주변의 도움을 받는 것이 부담을 줄이는 데 도움이 될 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 심리 상태를 진단하지 않습니다. 어려움이 크게 느껴진다면 전문가와 상담하는 것도 방법입니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B6E8B",
  accentHoverColor: "#705470",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "자연스러운 반응",
      text: "불안이나 부담을 느끼는 것은 자연스러운 반응으로 언급됩니다.",
    },
    {
      numberLabel: "02",
      title: "정보 확인",
      text: "절차와 상담 과정을 미리 알아두면 부담을 줄이는 데 도움이 될 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "도움 요청",
      text: "혼자 감당하기 어렵다면 주변이나 전문가의 도움을 받을 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 전 심리적 부담, 어떻게 준비하면 좋을까요?",
    description:
      "임신중절수술을 앞두고 느낄 수 있는 불안·부담을 줄이는 데 참고할 수 있는 방법을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 전 불안",
      "임신중절수술 심리적 부담",
      "임신중절수술 걱정",
      "임신중절수술 상담 준비",
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
      id: "anxiety-common",
      order: 1,
      numberLabel: "01",
      heading: "왜 불안이나 부담을 느끼게 되나요?",
      layout: "prose",
      directAnswer:
        "정보 부족, 절차에 대한 낯섦, 주변 시선에 대한 걱정 등 다양한 이유로 불안을 느낄 수 있으며, 이는 자연스러운 반응으로 언급됩니다.",
      paragraphs: [],
    },
    {
      id: "anxiety-info",
      order: 2,
      numberLabel: "02",
      heading: "정보를 미리 아는 것이 도움이 될까요?",
      layout: "prose",
      directAnswer:
        "당일 절차와 상담 흐름을 미리 알아두면 낯섦에서 오는 불안을 줄이는 데 도움이 될 수 있습니다.",
      paragraphs: [],
      relatedHref: ROUTES.dayProcedure,
      relatedLabel: "당일 절차 전체 흐름 보기",
    },
    {
      id: "anxiety-decision",
      order: 3,
      numberLabel: "03",
      heading: "결정을 급하게 내려야 한다는 부담이 있다면?",
      layout: "prose",
      directAnswer:
        "충분히 생각할 시간이 필요하다고 느껴진다면, 그 부담을 상담 과정에서 이야기해 볼 수 있습니다.",
      paragraphs: [],
      relatedHref: ROUTES.decisionTakeTime,
      relatedLabel: "결정을 미루거나 다시 생각해도 되는지 확인하기",
    },
    {
      id: "anxiety-support",
      order: 4,
      numberLabel: "04",
      heading: "혼자 감당하기 어려울 때는 어떻게 하나요?",
      layout: "callout",
      directAnswer:
        "신뢰할 수 있는 사람과 이야기를 나누거나, 필요하다면 전문 상담기관의 도움을 받는 것도 방법입니다.",
      paragraphs: [],
      callout: "불안이나 부담이 크게 느껴진다면 혼자 견디기보다 도움을 요청하는 것을 고려하세요.",
    },
  ],
};
