import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const DECISION_TAKE_TIME_PAGE: ContentPage = {
  id: "decisionTakeTime",
  order: 123,
  numberLabel: "23",
  slug: "임신중절수술-상담-결정-미루기",
  href: ROUTES.decisionTakeTime,
  navLabel: "임신중절수술 상담 결정 미루기",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 상담 후 결정을 미루거나 다시 생각해도 되나요?",
  heading: "임신중절수술 상담 후 결정을 미루거나 다시 생각해도 되나요?",
  breadcrumbLabel: "임신중절수술 상담 결정 미루기",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "상담 후 결정을 미루거나 다시 고민할 때 확인하면 좋은 점을 안내합니다.",
  intro: [
    "상담을 받았다고 해서 반드시 그 자리에서 최종 결정을 내려야 하는 것은 아닙니다. 다만 임신 주수에 따라 진료 가능 시기가 달라질 수 있어, 시간을 두고 고민하고 싶다면 이 점을 함께 고려하는 것이 필요합니다.",
    "이 글은 결정 과정에서 참고할 수 있는 일반적인 관점을 정리한 의료정보이며, 개인의 결정을 대신하지 않습니다.",
  ],
  hubContextLink: {
    before: "전반적인 상담 준비는 ",
    anchor: "임신중절수술 안내",
    after: "에서도 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "decision-take-time-01",
    "decision-take-time-02",
    "decision-take-time-03",
    "decision-take-time-04",
    "decision-take-time-05",
  ],
  faqTitle: "임신중절수술 상담 결정 미루기 자주 묻는 질문",
  conclusion: [
    "결정을 미루거나 다시 생각하는 것은 자연스러운 과정일 수 있지만, 임신 주수에 따라 진료 가능 시기가 달라질 수 있다는 점은 함께 고려해야 합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 결정을 대신하지 않습니다. 시기와 관련한 정확한 확인은 상담을 통해 이뤄져야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6E7A6E",
  accentHoverColor: "#546054",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "결정은 개인의 몫",
      text: "상담을 받았다고 그 자리에서 반드시 결정해야 하는 것은 아닙니다.",
    },
    {
      numberLabel: "02",
      title: "주수 고려 필요",
      text: "임신 주수에 따라 진료 가능 시기가 달라질 수 있어 시간 여유를 함께 확인해야 합니다.",
    },
    {
      numberLabel: "03",
      title: "재상담 가능",
      text: "생각이 정리된 후 다시 상담을 받는 것도 가능한 방법입니다.",
    },
  ],
  seo: {
    title: "임신중절수술 상담 후 결정을 미루거나 다시 생각해도 되나요?",
    description:
      "임신중절수술 상담 후 결정을 미루거나 다시 고민할 때 확인하면 좋은 점을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 결정",
      "임신중절수술 고민",
      "임신중절수술 다시 생각",
      "임신중절수술 상담 후 결정",
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
      id: "decision-can-wait",
      order: 1,
      numberLabel: "01",
      heading: "상담 후 바로 결정하지 않아도 되나요?",
      layout: "prose",
      directAnswer:
        "네. 상담은 정보를 확인하는 과정이며, 그 자리에서 반드시 최종 결정을 내려야 하는 것은 아닙니다.",
      paragraphs: [],
    },
    {
      id: "decision-time-limit",
      order: 2,
      numberLabel: "02",
      heading: "시간을 얼마나 둘 수 있는지 제한이 있나요?",
      layout: "prose",
      directAnswer:
        "임신 주수에 따라 진료 가능 시기가 달라질 수 있어, 무한정 시간을 둘 수 있다고 단정하기는 어렵습니다.",
      paragraphs: [
        "고민할 시간이 필요하다면 대략적인 기한을 상담에서 함께 확인해 두는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.earlyGestation,
      relatedLabel: "주수 확인 안내 보기",
    },
    {
      id: "decision-reconsider",
      order: 3,
      numberLabel: "03",
      heading: "마음이 바뀌면 다시 상담받을 수 있나요?",
      layout: "prose",
      directAnswer:
        "네. 생각이 정리된 후 다시 상담을 받는 것은 가능한 방법이며, 이전 상담 내용을 참고해 진행할 수 있습니다.",
      paragraphs: [],
    },
    {
      id: "decision-pressure",
      order: 4,
      numberLabel: "04",
      heading: "결정을 재촉받는 느낌이 든다면 어떻게 하나요?",
      layout: "callout",
      directAnswer:
        "충분히 생각할 시간이 필요하다고 느껴진다면, 그 마음을 상담 과정에서 솔직하게 이야기해도 괜찮습니다.",
      paragraphs: [],
      callout: "결정이 부담스럽게 느껴진다면 혼자 서두르지 말고 상담에서 시간에 대해 이야기해 보세요.",
      relatedHref: ROUTES.preProcedureAnxiety,
      relatedLabel: "심리적 부담 준비 방법 보기",
    },
  ],
};
