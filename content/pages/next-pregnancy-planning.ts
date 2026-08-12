import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const NEXT_PREGNANCY_PLANNING_PAGE: ContentPage = {
  id: "nextPregnancyPlanning",
  order: 119,
  numberLabel: "19",
  slug: "임신중절수술-후-다음-임신-계획",
  href: ROUTES.nextPregnancyPlanning,
  navLabel: "임신중절수술 후 다음 임신 계획",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 다음 임신 계획, 언제 상담하면 좋을까요?",
  heading: "임신중절수술 후 다음 임신 계획, 언제 상담하면 좋을까요?",
  breadcrumbLabel: "임신중절수술 후 다음 임신 계획",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "향후 임신을 계획할 때 상담을 고려하면 좋은 시점과 확인사항을 안내합니다.",
  intro: [
    "임신중절수술 이후 다음 임신을 계획하고 있다면, 신체적 회복 상태를 확인한 뒤 상담을 통해 시점과 준비사항을 점검하는 것이 도움이 될 수 있습니다. 특정 기간이 지나야만 임신이 가능하다고 일괄적으로 단정하기는 어렵습니다.",
    "이 글은 다음 임신을 계획할 때 참고할 수 있는 일반적인 관점을 정리한 의료정보이며, 개인의 정확한 상태와 시점 판단을 대신하지 않습니다.",
  ],
  hubContextLink: {
    before: "회복 전반에 대한 안내는 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "next-pregnancy-planning-01",
    "next-pregnancy-planning-02",
    "next-pregnancy-planning-03",
    "next-pregnancy-planning-04",
    "next-pregnancy-planning-05",
  ],
  faqTitle: "임신중절수술 후 다음 임신 계획 자주 묻는 질문",
  conclusion: [
    "다음 임신을 계획하는 시점은 신체적 회복 상태와 개인 상황에 따라 달라질 수 있습니다. 정확한 판단은 진료를 통해 확인하는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 임신 계획 시점을 단정하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#5E8B6E",
  accentHoverColor: "#487054",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "회복 상태 확인",
      text: "신체적 회복 상태를 먼저 확인하는 것이 계획의 출발점이 될 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "상담을 통한 시점 확인",
      text: "구체적인 시점은 개인 상태에 따라 달라 상담을 통해 확인하는 것이 정확합니다.",
    },
    {
      numberLabel: "03",
      title: "건강 준비",
      text: "필요한 검사나 건강 준비사항을 함께 확인할 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 다음 임신 계획, 언제 상담하면 좋을까요?",
    description:
      "임신중절수술 후 다음 임신을 계획할 때 상담을 고려하면 좋은 시점과 확인사항을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 임신 계획",
      "임신중절수술 후 다음 임신",
      "임신중절수술 임신 준비",
      "임신중절수술 후 임신 상담",
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
      id: "next-preg-timing",
      order: 1,
      numberLabel: "01",
      heading: "언제부터 다음 임신을 계획할 수 있나요?",
      layout: "prose",
      directAnswer:
        "특정 기간이 지나야만 가능하다고 일괄적으로 단정하기는 어려우며, 신체적 회복 상태를 확인한 뒤 상담을 통해 시점을 논의하는 것이 일반적입니다.",
      paragraphs: [
        "회복 속도는 개인마다 다를 수 있어, 회복기간 안내와 함께 본인의 상태를 확인하는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "임신중절수술 회복기간 안내 보기",
    },
    {
      id: "next-preg-checkup",
      order: 2,
      numberLabel: "02",
      heading: "상담에서는 무엇을 확인하나요?",
      layout: "prose",
      directAnswer:
        "현재 건강상태, 회복 경과, 필요한 검사 여부 등을 확인하며 임신 준비와 관련한 궁금한 점을 논의할 수 있습니다.",
      paragraphs: [],
    },
    {
      id: "next-preg-contraception",
      order: 3,
      numberLabel: "03",
      heading: "피임을 하고 있었다면 어떻게 전환하나요?",
      layout: "prose",
      directAnswer:
        "사용 중인 피임 방법에 따라 중단·전환 시점이 다를 수 있어, 임신을 계획한다면 상담을 통해 확인하는 것이 필요합니다.",
      paragraphs: [],
      relatedHref: ROUTES.contraceptionTiming,
      relatedLabel: "피임 상담 시점 확인하기",
    },
    {
      id: "next-preg-worry",
      order: 4,
      numberLabel: "04",
      heading: "이전 시술이 다음 임신에 영향을 줄까 걱정된다면?",
      layout: "callout",
      directAnswer:
        "이런 걱정은 자연스러운 반응일 수 있으며, 궁금한 점은 온라인 정보보다 진료에서 직접 확인하는 것이 정확합니다.",
      paragraphs: [],
      callout: "다음 임신과 관련된 걱정이 있다면 진료를 통해 정확한 정보를 확인하세요.",
    },
  ],
};
