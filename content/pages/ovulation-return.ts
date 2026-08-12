import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const OVULATION_RETURN_PAGE: ContentPage = {
  id: "ovulationReturn",
  order: 113,
  numberLabel: "13",
  slug: "임신중절수술-후-배란-임신-가능성",
  href: ROUTES.ovulationReturn,
  navLabel: "임신중절수술 후 배란·임신 가능성",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 배란과 임신 가능성은 언제부터 다시 생기나요?",
  heading: "임신중절수술 후 배란과 임신 가능성은 언제부터 다시 생기나요?",
  breadcrumbLabel: "임신중절수술 후 배란·임신 가능성",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "배란과 임신 가능성이 재개되는 시점에 대한 일반적인 관점과 피임 관련 확인사항을 안내합니다.",
  intro: [
    "임신중절수술 후에도 배란은 비교적 이른 시점에 다시 시작될 수 있다고 일반적으로 설명되며, 이는 생리가 시작되기 전에도 임신이 가능할 수 있다는 의미로 이어집니다. 다만 정확한 시점을 개인별로 단정하기는 어렵습니다.",
    "이 글은 배란·임신 가능성 재개와 관련해 일반적으로 언급되는 내용을 정리한 의료정보이며, 개인의 정확한 상태 판단을 대신하지 않습니다.",
  ],
  hubContextLink: {
    before: "회복 전반에 대한 안내는 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "ovulation-return-01",
    "ovulation-return-02",
    "ovulation-return-03",
    "ovulation-return-04",
    "ovulation-return-05",
  ],
  faqTitle: "임신중절수술 후 배란·임신 가능성 자주 묻는 질문",
  conclusion: [
    "배란과 임신 가능성은 생리가 시작되기 전에도 재개될 수 있다고 일반적으로 설명됩니다. 계획하지 않은 임신을 원하지 않는다면 피임 시작 시점을 미리 상담하는 것이 도움이 될 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 배란·임신 가능 시점을 단정하지 않습니다. 정확한 판단은 진료를 통해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#5E8B8B",
  accentHoverColor: "#487070",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "이른 배란 재개 가능성",
      text: "배란은 생리보다 먼저, 비교적 이른 시점에 재개될 수 있다고 설명됩니다.",
    },
    {
      numberLabel: "02",
      title: "임신 가능성",
      text: "생리 전이라도 임신이 가능할 수 있다는 점을 참고해야 합니다.",
    },
    {
      numberLabel: "03",
      title: "피임 상담 필요",
      text: "계획하지 않은 임신을 원하지 않는다면 피임 상담 시점을 확인하는 것이 좋습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 배란과 임신 가능성은 언제부터 다시 생기나요?",
    description:
      "임신중절수술 후 배란과 임신 가능성이 재개되는 시점에 대한 일반적인 관점을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 배란",
      "임신중절수술 후 임신 가능성",
      "임신중절수술 가임력",
      "임신중절수술 후 임신",
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
      id: "ovulation-timing",
      order: 1,
      numberLabel: "01",
      heading: "배란은 언제부터 다시 시작될 수 있나요?",
      layout: "prose",
      directAnswer:
        "배란은 생리가 시작되기 전, 비교적 이른 시점부터 재개될 수 있다고 일반적으로 설명되지만 정확한 시점은 개인마다 다릅니다.",
      paragraphs: [
        "이 때문에 '아직 생리를 하지 않았으니 안전하다'고 단정하는 것은 위험할 수 있습니다.",
      ],
      relatedHref: ROUTES.periodReturn,
      relatedLabel: "수술 후 생리 안내 보기",
    },
    {
      id: "ovulation-pregnancy",
      order: 2,
      numberLabel: "02",
      heading: "생리 전에도 임신이 가능한가요?",
      layout: "prose",
      directAnswer:
        "배란이 먼저 재개되면 생리를 시작하기 전이라도 임신이 가능할 수 있습니다.",
      paragraphs: [
        "임신 계획이 없다면 이 시기부터 피임 방법을 고려하는 것이 필요할 수 있습니다.",
      ],
    },
    {
      id: "ovulation-contraception",
      order: 3,
      numberLabel: "03",
      heading: "피임은 언제부터 준비하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "계획하지 않은 임신을 원하지 않는다면, 회복 초기부터 피임 방법에 대해 상담해 보는 것이 도움이 될 수 있습니다.",
      paragraphs: [
        "구체적인 방법과 시작 시점은 개인 건강상태에 따라 달라질 수 있어 상담을 통해 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.contraceptionTiming,
      relatedLabel: "피임 상담 시점 확인하기",
    },
    {
      id: "ovulation-uncertain",
      order: 4,
      numberLabel: "04",
      heading: "정확한 배란 시점을 알 수 있는 방법이 있나요?",
      layout: "callout",
      directAnswer:
        "온라인의 일반적인 정보만으로 본인의 정확한 배란 시점을 알기는 어려우며, 궁금하다면 진료에서 확인하는 것이 정확합니다.",
      paragraphs: [],
      callout:
        "정확한 배란·가임 시점 확인이 필요하다면 자가 판단보다 진료를 통해 확인하세요.",
    },
  ],
};
