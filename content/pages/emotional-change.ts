import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const EMOTIONAL_CHANGE_PAGE: ContentPage = {
  id: "emotionalChange",
  order: 115,
  numberLabel: "15",
  slug: "임신중절수술-후-감정-변화",
  href: ROUTES.emotionalChange,
  navLabel: "임신중절수술 후 감정 변화",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 감정 변화가 있을 수 있나요?",
  heading: "임신중절수술 후 감정 변화가 있을 수 있나요?",
  breadcrumbLabel: "임신중절수술 후 감정 변화",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "회복 중 나타날 수 있는 정서적 변화와 도움을 요청할 수 있는 상황을 안내합니다.",
  intro: [
    "임신중절수술 후에는 안도감, 슬픔, 피로감 등 다양한 감정을 느낄 수 있으며, 이는 신체적 회복과 함께 자연스럽게 나타날 수 있는 반응으로 언급됩니다. 느끼는 감정의 종류나 정도는 사람마다 다릅니다.",
    "이 글은 회복 중 나타날 수 있는 정서적 변화를 일반적으로 설명하는 의료정보이며, 특정 심리 상태를 진단하거나 단정하지 않습니다.",
  ],
  hubContextLink: {
    before: "회복 전반에 대한 안내는 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "emotional-change-01",
    "emotional-change-02",
    "emotional-change-03",
    "emotional-change-04",
    "emotional-change-05",
  ],
  faqTitle: "임신중절수술 후 감정 변화 자주 묻는 질문",
  conclusion: [
    "감정 변화는 회복 과정에서 자연스럽게 나타날 수 있는 반응으로 언급되며, 느끼는 방식은 사람마다 다를 수 있습니다. 힘든 감정이 오래 지속된다면 혼자 견디기보다 도움을 요청하는 것이 필요할 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 심리 상태를 진단하지 않습니다. 정서적으로 어려움이 지속된다면 전문가와 상담하는 것이 도움이 될 수 있습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B5E7A",
  accentHoverColor: "#704860",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "다양한 감정",
      text: "안도감, 슬픔, 피로감 등 다양한 감정이 자연스럽게 나타날 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "개인차",
      text: "느끼는 감정의 종류와 정도는 사람마다 다를 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "도움 요청",
      text: "힘든 감정이 오래 지속되면 전문가의 도움을 받는 것이 필요할 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 감정 변화가 있을 수 있나요?",
    description:
      "임신중절수술 후 회복 중 나타날 수 있는 정서적 변화와 도움을 요청할 수 있는 상황을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 감정",
      "임신중절수술 후 심리",
      "임신중절수술 우울감",
      "임신중절수술 정서적 변화",
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
      id: "emotion-common",
      order: 1,
      numberLabel: "01",
      heading: "어떤 감정 변화가 나타날 수 있나요?",
      layout: "info-grid",
      directAnswer:
        "안도감, 슬픔, 허탈감, 피로감 등 다양한 감정이 나타날 수 있으며, 여러 감정이 동시에 느껴지는 경우도 있습니다.",
      paragraphs: [],
      infoBlocks: [
        { label: "안도감", text: "결정에 대한 안도감을 느끼는 경우가 있습니다." },
        { label: "슬픔·허탈감", text: "슬픔이나 허탈감이 함께 나타날 수 있습니다." },
        { label: "피로감", text: "신체 회복과 함께 정서적 피로감이 동반될 수 있습니다." },
      ],
    },
    {
      id: "emotion-duration",
      order: 2,
      numberLabel: "02",
      heading: "이런 감정은 얼마나 지속되나요?",
      layout: "prose",
      directAnswer:
        "지속 기간은 개인마다 달라 특정 기간을 기준으로 제시하기 어렵습니다. 시간이 지나며 자연스럽게 안정되는 경우가 많다고 언급되지만, 모두에게 동일하게 적용된다고 단정할 수는 없습니다.",
      paragraphs: [],
    },
    {
      id: "emotion-support",
      order: 3,
      numberLabel: "03",
      heading: "주변에 이야기하는 것이 도움이 될까요?",
      layout: "prose",
      directAnswer:
        "신뢰할 수 있는 사람과 감정을 나누는 것이 도움이 될 수 있지만, 반드시 누군가에게 알려야 하는 것은 아니며 본인이 편한 방식을 선택할 수 있습니다.",
      paragraphs: [
        "이야기할 상대가 마땅치 않다면 전문 상담 기관을 이용하는 것도 방법입니다.",
      ],
    },
    {
      id: "emotion-warning",
      order: 4,
      numberLabel: "04",
      heading: "도움을 요청해야 하는 상황은 언제인가요?",
      layout: "callout",
      directAnswer:
        "힘든 감정이 오래 지속되거나 일상생활이 어려울 정도로 심하다면, 혼자 견디기보다 전문가의 도움을 받는 것이 필요할 수 있습니다.",
      paragraphs: [],
      callout:
        "힘든 감정이 지속되어 일상에 영향을 준다면 전문 상담·의료기관의 도움을 받는 것을 고려하세요.",
    },
  ],
};
