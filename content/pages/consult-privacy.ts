import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const CONSULT_PRIVACY_PAGE: ContentPage = {
  id: "consultPrivacy",
  order: 109,
  numberLabel: "09",
  slug: "임신중절수술-상담-개인정보",
  href: ROUTES.consultPrivacy,
  navLabel: "임신중절수술 상담 개인정보",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 상담 시 개인정보는 어떻게 다뤄지나요?",
  heading: "임신중절수술 상담 시 개인정보는 어떻게 다뤄지나요?",
  breadcrumbLabel: "임신중절수술 상담 개인정보",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "상담·진료 과정에서 개인정보가 어떻게 다뤄지는지, 방문 전 확인하면 좋은 점을 안내합니다.",
  intro: [
    "임신중절수술 상담을 앞두고 개인정보가 어떻게 관리되는지 걱정하는 경우가 많습니다. 일반적으로 의료기관은 진료 목적 범위 안에서 환자 정보를 다루지만, 구체적인 처리 방식은 병원마다 다를 수 있습니다.",
    "이 글은 상담 전에 개인정보와 관련해 확인해 두면 도움이 되는 관점을 정리한 일반 의료정보이며, 특정 병원의 실제 정책을 대신 설명하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사·비용을 포함한 전체 흐름은 ",
    anchor: "임신중절수술 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "consult-privacy-01",
    "consult-privacy-02",
    "consult-privacy-03",
    "consult-privacy-04",
    "consult-privacy-05",
  ],
  faqTitle: "임신중절수술 상담 개인정보 자주 묻는 질문",
  conclusion: [
    "개인정보 처리 방식은 병원마다 세부 절차가 다를 수 있어, 걱정되는 부분이 있다면 상담 전에 직접 문의해 확인하는 것이 정확합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며, 특정 의료기관의 개인정보 처리방침을 대신하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6E7A8B",
  accentHoverColor: "#556170",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "진료 목적 범위",
      text: "의료기관은 통상 진료 목적 범위 안에서 환자 정보를 다룹니다.",
    },
    {
      numberLabel: "02",
      title: "병원별 차이",
      text: "구체적인 처리 절차와 안내 방식은 병원마다 다를 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "사전 확인",
      text: "걱정되는 부분은 상담 전에 직접 문의해 확인하는 것이 정확합니다.",
    },
  ],
  seo: {
    title: "임신중절수술 상담 시 개인정보는 어떻게 다뤄지나요?",
    description:
      "임신중절수술 상담·진료 과정의 개인정보 처리에 대해 확인하면 좋은 점을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 상담 개인정보",
      "임신중절수술 개인정보 보호",
      "임신중절수술 상담 비밀유지",
      "임신중절수술 진료 기록",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
    { label: "진료 안내 확인", href: YEONSEI365_LINKS.surgery },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "privacy-basic",
      order: 1,
      numberLabel: "01",
      heading: "상담 시 어떤 정보를 알리게 되나요?",
      layout: "prose",
      directAnswer:
        "보통 진료에 필요한 건강정보(주수, 증상, 병력, 복용 약 등)와 연락 가능한 기본 정보를 안내하게 됩니다.",
      paragraphs: [
        "이는 진료 계획을 세우는 데 필요한 정보이며, 병원마다 요청하는 항목의 범위는 다를 수 있습니다. 불필요하다고 느끼는 항목이 있다면 이유를 물어보는 것도 방법입니다.",
      ],
    },
    {
      id: "privacy-handling",
      order: 2,
      numberLabel: "02",
      heading: "진료 정보는 어떻게 관리되나요?",
      layout: "prose",
      directAnswer:
        "의료기관은 통상 진료 목적 범위 안에서 환자 정보를 관리하지만, 구체적인 보관·처리 절차는 병원의 내부 정책에 따라 다를 수 있습니다.",
      paragraphs: [
        "온라인에서 접한 일반적인 설명을 특정 병원에 그대로 적용하기보다, 궁금한 점은 해당 병원에 직접 확인하는 것이 정확합니다.",
      ],
    },
    {
      id: "privacy-questions",
      order: 3,
      numberLabel: "03",
      heading: "상담 전 확인하면 좋은 질문은?",
      layout: "checklist",
      directAnswer:
        "정보 보관 방식, 동행인에게 공개되는 범위, 예약 확인 연락 방식 등을 미리 물어보면 걱정을 줄이는 데 도움이 될 수 있습니다.",
      paragraphs: [],
      bullets: [
        "진료 기록은 어떻게 보관되나요?",
        "동행인에게 어디까지 공유되나요?",
        "예약·결과 안내는 어떤 방식으로 연락하나요?",
        "온라인 상담 시 정보는 어떻게 전달되나요?",
      ],
      relatedHref: ROUTES.bookingChecklist,
      relatedLabel: "예약 전 확인사항 보기",
    },
    {
      id: "privacy-comfort",
      order: 4,
      numberLabel: "04",
      heading: "정보를 알리는 것이 걱정될 때는 어떻게 하나요?",
      layout: "callout",
      directAnswer:
        "걱정되는 부분을 상담 시작 전에 미리 이야기하면, 진행 방식을 조정하거나 설명을 더 자세히 들을 수 있는 경우가 많습니다.",
      paragraphs: [],
      callout:
        "개인정보와 관련해 불안한 점이 있다면 혼자 판단하기보다 상담 시 직접 질문해 확인하는 것이 도움이 됩니다.",
    },
  ],
};
