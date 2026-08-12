import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const CONTRACEPTION_TIMING_PAGE: ContentPage = {
  id: "contraceptionTiming",
  order: 114,
  numberLabel: "14",
  slug: "임신중절수술-후-피임-상담",
  href: ROUTES.contraceptionTiming,
  navLabel: "임신중절수술 후 피임 상담",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 피임은 언제 상담해야 하나요?",
  heading: "임신중절수술 후 피임은 언제 상담해야 하나요?",
  breadcrumbLabel: "임신중절수술 후 피임 상담",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "피임 상담을 고려하면 좋은 시점과 상담에서 확인할 수 있는 내용을 안내합니다.",
  intro: [
    "임신중절수술 후 배란이 예상보다 이르게 재개될 수 있다는 점 때문에, 계획하지 않은 임신을 원하지 않는다면 피임 상담을 미리 고려하는 것이 도움이 될 수 있습니다. 특정 피임법을 권장하기보다는 상담을 통해 본인에게 맞는 방법을 확인하는 과정이 중요합니다.",
    "이 글은 피임 상담을 고려할 시점과 상담에서 확인할 수 있는 내용을 정리한 의료정보이며, 특정 피임 방법의 처방이나 효과를 보장하지 않습니다.",
  ],
  hubContextLink: {
    before: "회복 전반에 대한 안내는 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "contraception-timing-01",
    "contraception-timing-02",
    "contraception-timing-03",
    "contraception-timing-04",
    "contraception-timing-05",
  ],
  faqTitle: "임신중절수술 후 피임 상담 자주 묻는 질문",
  conclusion: [
    "피임 상담은 회복 초기부터 고려할 수 있는 주제이며, 어떤 방법이 본인에게 맞는지는 건강상태에 따라 다를 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 특정 피임법을 권장하거나 처방을 대신하지 않습니다. 정확한 방법 선택은 상담을 통해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#7A5E8B",
  accentHoverColor: "#604870",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "이른 상담 고려",
      text: "배란이 이르게 재개될 수 있어 회복 초기부터 상담을 고려할 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "개인별 방법",
      text: "적합한 피임 방법은 건강상태에 따라 달라질 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "상담에서 확인",
      text: "구체적인 방법과 시작 시점은 상담을 통해 확인하는 것이 정확합니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 피임은 언제 상담해야 하나요?",
    description:
      "임신중절수술 후 피임 상담을 고려하면 좋은 시점과 상담에서 확인할 수 있는 내용을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 피임",
      "임신중절수술 피임 상담",
      "임신중절수술 후 피임 시작",
      "임신중절수술 피임 방법",
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
      id: "contra-why-early",
      order: 1,
      numberLabel: "01",
      heading: "왜 피임 상담을 미리 고려하나요?",
      layout: "prose",
      directAnswer:
        "배란이 생리보다 먼저 재개될 수 있어, 계획하지 않은 임신을 원하지 않는다면 회복 초기부터 상담을 고려하는 것이 도움이 될 수 있습니다.",
      paragraphs: [],
      relatedHref: ROUTES.ovulationReturn,
      relatedLabel: "배란·임신 가능성 안내 보기",
    },
    {
      id: "contra-options",
      order: 2,
      numberLabel: "02",
      heading: "피임 방법은 어떻게 정해지나요?",
      layout: "prose",
      directAnswer:
        "피임 방법은 건강상태, 생활 패턴, 개인 선호 등을 고려해 상담을 통해 정하는 것이 일반적입니다.",
      paragraphs: [
        "특정 방법이 모두에게 동일하게 권장된다고 단정할 수 없으며, 각 방법의 특징과 확인사항은 상담에서 자세히 들을 수 있습니다.",
      ],
    },
    {
      id: "contra-questions",
      order: 3,
      numberLabel: "03",
      heading: "상담에서 확인하면 좋은 질문은?",
      layout: "checklist",
      directAnswer:
        "방법별 특징, 시작 가능 시점, 부작용 관련 확인사항, 정기적인 재방문 필요 여부 등을 질문해 두면 이해에 도움이 됩니다.",
      paragraphs: [],
      bullets: [
        "이 방법은 언제부터 시작할 수 있나요?",
        "제 건강상태에 맞는 방법인가요?",
        "확인해야 할 부작용이 있나요?",
        "정기적으로 재방문해야 하나요?",
      ],
    },
    {
      id: "contra-partner",
      order: 4,
      numberLabel: "04",
      heading: "상담은 혼자 받아도 되나요?",
      layout: "prose",
      directAnswer:
        "피임 상담은 개인의 건강정보를 다루는 진료이므로 혼자 받는 경우가 일반적이며, 필요하다면 동행 여부를 병원에 확인할 수 있습니다.",
      paragraphs: [],
      relatedHref: ROUTES.partnerFamilyConsult,
      relatedLabel: "배우자·가족 상의 관련 안내 보기",
    },
  ],
};
