import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH2_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const PROCEDURE_METHODS_PAGE: ContentPage = {
  id: "procedureMethods",
  order: 105,
  numberLabel: "05",
  slug: "흡입술과-소파술-차이",
  href: ROUTES.procedureMethods,
  navLabel: "흡입술과 소파술 차이",
  categoryLabel: SITE.categoryLabel,
  h1: "흡입술과 소파술, 무엇이 다른가요?",
  heading: "흡입술과 소파술, 무엇이 다른가요?",
  breadcrumbLabel: "흡입술과 소파술 차이",
  infoTopicLabel: "수술·마취",
  infoCategory: "surgery",
  infoCardDescription:
    "흡입술과 소파술의 기본 개념과 차이, 방법이 결정되는 기준을 안내합니다.",
  intro: [
    "흡입술과 소파술은 임신중절수술에서 사용되는 방법을 설명할 때 함께 언급되는 용어입니다. 두 용어의 뜻과 차이를 아는 것은 상담을 이해하는 데 도움이 될 수 있지만, 어떤 방법이 본인에게 적용되는지는 개인 상태에 따라 다릅니다.",
    "이 글은 두 용어의 일반적인 개념 차이를 정리한 의료정보이며, 특정 방법의 우열을 판단하거나 개인의 적용 가능 여부를 안내하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사·비용을 포함한 전체 흐름은 ",
    anchor: "임신중절수술 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  faqIds: [
    "procedure-methods-01",
    "procedure-methods-02",
    "procedure-methods-03",
    "procedure-methods-04",
    "procedure-methods-05",
  ],
  faqTitle: "흡입술과 소파술 자주 묻는 질문",
  conclusion: [
    "흡입술과 소파술은 사용하는 기구와 방식에서 개념상 차이가 있는 용어이지만, 실제로 어떤 방법이 적용되는지는 임신 주수와 건강상태, 의료진의 판단에 따라 달라집니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단이나 진료 방법을 대신 결정하지 않습니다. 본인에게 적용 가능한 방법은 상담을 통해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B6E5E",
  accentHoverColor: "#6E5648",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "용어 개념",
      text: "흡입술과 소파술은 사용하는 방식과 기구 설명이 다른 용어입니다.",
    },
    {
      numberLabel: "02",
      title: "적용 기준",
      text: "실제 적용 방법은 임신 주수, 건강상태, 의료진 판단에 따라 달라질 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "회복 과정",
      text: "방법에 따라 회복 과정 설명이 다를 수 있어 상담에서 확인이 필요합니다.",
    },
  ],
  seo: {
    title: "흡입술과 소파술, 무엇이 다른가요?",
    description:
      "임신중절수술에서 언급되는 흡입술과 소파술의 개념 차이와 방법이 결정되는 일반적인 기준을 의료정보로 안내합니다.",
    keywords: [
      "흡입술과 소파술 차이",
      "흡입술이란",
      "소파술이란",
      "임신중절수술 방법",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    {
      label: "연세365산부인과의원 수술 방법 안내",
      href: YEONSEI365_LINKS.method,
    },
    {
      label: "연세365산부인과의원 임신중절클리닉",
      href: YEONSEI365_LINKS.clinic,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "method-suction",
      order: 1,
      numberLabel: "01",
      heading: "흡입술이란 무엇인가요?",
      layout: "prose",
      directAnswer:
        "흡입술은 흡입 기구를 이용해 자궁 내용물을 제거하는 방식을 가리키는 용어로 설명되는 경우가 일반적입니다.",
      paragraphs: [
        "구체적인 기구나 방식은 의료기관마다 설명이 다를 수 있습니다. 이 글은 일반적인 용어 개념을 안내할 뿐, 특정 병원의 시술 방식을 설명하지 않습니다.",
      ],
    },
    {
      id: "method-curettage",
      order: 2,
      numberLabel: "02",
      heading: "소파술이란 무엇인가요?",
      layout: "prose",
      directAnswer:
        "소파술은 기구를 이용해 자궁 내막을 긁어내는 방식으로 설명되는 용어이며, 흡입술과 함께 또는 별도로 언급되기도 합니다.",
      paragraphs: [
        "두 용어가 실제 진료 과정에서 함께 쓰이거나 병행 설명되는 경우도 있어, 용어만으로 시술 전체 과정을 단정하기는 어렵습니다.",
      ],
    },
    {
      id: "method-compare",
      order: 3,
      numberLabel: "03",
      heading: "두 방법은 어떻게 다른가요?",
      layout: "compare-table",
      directAnswer:
        "두 용어는 사용하는 기구와 방식 설명에서 차이가 있지만, 실제 적용은 개인 상태와 의료진 판단에 따라 달라질 수 있습니다.",
      paragraphs: [
        "아래 표는 일반적으로 설명되는 개념 차이를 정리한 것으로, 특정 병원의 시술 순서나 세부 기준을 의미하지 않습니다.",
      ],
      compareHeaders: ["흡입술", "소파술"],
      compareRows: [
        {
          criterion: "기본 방식",
          left: "흡입 기구로 내용물을 제거하는 방식으로 설명됨",
          right: "기구로 자궁 내막을 긁어내는 방식으로 설명됨",
        },
        {
          criterion: "함께 언급되는 경우",
          left: "단독으로 시행되는 경우로 설명되기도 함",
          right: "흡입술과 함께 병행 설명되는 경우도 있음",
        },
        {
          criterion: "적용 여부",
          left: "임신 주수·건강상태·의료진 판단에 따라 달라짐",
          right: "임신 주수·건강상태·의료진 판단에 따라 달라짐",
        },
      ],
    },
    {
      id: "method-decision",
      order: 4,
      numberLabel: "04",
      heading: "방법은 누가, 어떻게 결정하나요?",
      layout: "prose",
      directAnswer:
        "방법 선택은 임신 주수, 건강상태, 검사 결과 등을 종합해 의료진이 판단하며, 특정 주수에 특정 방법이 반드시 적용된다고 단정할 수 없습니다.",
      paragraphs: [
        "인터넷에서 접한 특정 방법 설명을 본인 상황에 그대로 적용하지 않는 것이 중요합니다. 궁금한 점은 상담에서 직접 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.earlyGestation,
      relatedLabel: "주수·건강상태 확인 방법 보기",
    },
    {
      id: "method-recovery",
      order: 5,
      numberLabel: "05",
      heading: "방법에 따라 회복 과정도 다른가요?",
      layout: "prose",
      directAnswer:
        "회복 과정에 대한 안내는 적용된 방법과 개인 상태에 따라 달라질 수 있어, 일반화된 설명보다 담당 의료진의 안내를 따르는 것이 필요합니다.",
      paragraphs: [
        "회복 단계와 일상 복귀에 대한 일반적인 정보는 회복기간 안내에서 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "임신중절수술 회복기간 안내 보기",
    },
  ],
};
