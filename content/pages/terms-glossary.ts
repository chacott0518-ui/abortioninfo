import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const TERMS_GLOSSARY_PAGE: ContentPage = {
  id: "termsGlossary",
  order: 117,
  numberLabel: "17",
  slug: "임신중절수술-관련-용어-정리",
  href: ROUTES.termsGlossary,
  navLabel: "임신중절수술 관련 용어 정리",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 관련 용어, 정확히 구분하면 어떤 점이 좋을까요?",
  heading: "임신중절수술 관련 용어, 정확히 구분하면 어떤 점이 좋을까요?",
  breadcrumbLabel: "임신중절수술 관련 용어 정리",
  infoTopicLabel: "이해·정보",
  infoCategory: "understand",
  infoCardDescription:
    "임신중절수술, 인공임신중절, 자연유산 등 자주 혼동되는 용어의 차이를 정리합니다.",
  intro: [
    "임신중절수술, 인공임신중절, 유산, 낙태 등 비슷해 보이는 용어가 실제로는 서로 다른 상황을 가리키는 경우가 있어 혼동이 생기기 쉽습니다. 용어를 정확히 구분하면 정보를 찾거나 상담에서 대화할 때 오해를 줄이는 데 도움이 될 수 있습니다.",
    "이 글은 용어 사이의 일반적인 차이를 정리한 의료정보이며, 개인의 상황에 특정 용어를 적용해 진단하지 않습니다.",
  ],
  hubContextLink: {
    before: "전체적인 절차와 정보는 ",
    anchor: "임신중절수술 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "terms-glossary-01",
    "terms-glossary-02",
    "terms-glossary-03",
    "terms-glossary-04",
    "terms-glossary-05",
  ],
  faqTitle: "임신중절수술 관련 용어 자주 묻는 질문",
  conclusion: [
    "용어의 차이를 아는 것은 정보를 정확히 이해하는 데 도움이 되지만, 본인의 상황이 어떤 용어에 해당하는지는 진료를 통해 확인하는 것이 정확합니다.",
    "이 글은 일반적인 용어 이해를 돕기 위한 의료정보이며 개인의 상태를 진단하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6B6B8B",
  accentHoverColor: "#535370",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "인공임신중절",
      text: "의료적 처치를 통해 임신을 종결하는 것을 가리키는 표현으로 설명됩니다.",
    },
    {
      numberLabel: "02",
      title: "자연유산",
      text: "의료적 처치 없이 자연적으로 임신이 종결되는 상황을 가리킵니다.",
    },
    {
      numberLabel: "03",
      title: "낙태",
      text: "일상에서 널리 쓰이는 표현이며, 문맥에 따라 가리키는 범위가 다를 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 관련 용어, 정확히 구분하면 어떤 점이 좋을까요?",
    description:
      "임신중절수술, 인공임신중절, 자연유산, 낙태 등 자주 혼동되는 용어의 차이를 의료정보로 정리합니다.",
    keywords: [
      "임신중절수술 용어",
      "인공임신중절",
      "자연유산 차이",
      "임신중절수술 낙태 차이",
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
      id: "terms-induced",
      order: 1,
      numberLabel: "01",
      heading: "인공임신중절이란 무엇인가요?",
      layout: "prose",
      directAnswer:
        "인공임신중절은 의료기관에서 의료적 처치를 통해 임신을 종결하는 것을 가리키는 표현으로 흔히 설명됩니다.",
      paragraphs: [
        "임신중절수술, 중절수술 등도 비슷한 맥락에서 함께 쓰이는 표현입니다.",
      ],
    },
    {
      id: "terms-miscarriage",
      order: 2,
      numberLabel: "02",
      heading: "자연유산은 어떻게 다른가요?",
      layout: "prose",
      directAnswer:
        "자연유산은 의료적 처치 없이 자연적으로 임신이 종결되는 상황을 가리키는 표현으로, 인공적으로 임신을 종결하는 인공임신중절과는 구분됩니다.",
      paragraphs: [
        "다만 실제 진료 과정에서는 두 상황이 함께 다뤄지거나 유사한 절차가 필요한 경우도 있어, 본인의 상황은 진료를 통해 확인하는 것이 정확합니다.",
      ],
    },
    {
      id: "terms-abortion-word",
      order: 3,
      numberLabel: "03",
      heading: "'낙태'라는 표현은 어떤 의미로 쓰이나요?",
      layout: "prose",
      directAnswer:
        "'낙태'는 일상에서 널리 쓰이는 표현이지만, 문맥에 따라 가리키는 범위나 뉘앙스가 다를 수 있어 의료·법률 문서에서는 인공임신중절 등의 표현이 함께 사용되기도 합니다.",
      paragraphs: [],
    },
    {
      id: "terms-why-matter",
      order: 4,
      numberLabel: "04",
      heading: "용어를 정확히 아는 것이 왜 도움이 되나요?",
      layout: "prose",
      directAnswer:
        "용어를 구분해 두면 자료를 찾거나 상담에서 대화할 때 오해를 줄이고, 필요한 정보를 더 정확하게 확인하는 데 도움이 될 수 있습니다.",
      paragraphs: [],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내 보기",
    },
  ],
};
