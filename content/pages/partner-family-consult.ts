import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const PARTNER_FAMILY_CONSULT_PAGE: ContentPage = {
  id: "partnerFamilyConsult",
  order: 124,
  numberLabel: "24",
  slug: "임신중절수술-상담-배우자-가족",
  href: ROUTES.partnerFamilyConsult,
  navLabel: "임신중절수술 상담 배우자·가족",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 상담, 배우자·가족과 꼭 상의해야 하나요?",
  heading: "임신중절수술 상담, 배우자·가족과 꼭 상의해야 하나요?",
  breadcrumbLabel: "임신중절수술 상담 배우자·가족",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "배우자·가족과의 상의 여부, 동행이 필요한 경우를 확인하는 관점을 안내합니다.",
  intro: [
    "임신중절수술 상담을 앞두고 배우자나 가족에게 반드시 알려야 하는지 고민하는 경우가 많습니다. 일반적인 진료 동의와 관련된 사항은 병원의 절차에 따라 다를 수 있어, 이 글에서 특정 기준을 단정하지 않습니다.",
    "이 글은 배우자·가족과의 상의 여부를 고민할 때 참고할 수 있는 일반적인 관점을 정리한 의료정보입니다.",
  ],
  hubContextLink: {
    before: "전반적인 상담 준비는 ",
    anchor: "임신중절수술 안내",
    after: "에서도 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "partner-family-consult-01",
    "partner-family-consult-02",
    "partner-family-consult-03",
    "partner-family-consult-04",
    "partner-family-consult-05",
  ],
  faqTitle: "임신중절수술 상담 배우자·가족 자주 묻는 질문",
  conclusion: [
    "배우자·가족과의 상의 여부와 관련한 병원의 실제 절차는 기관마다 다를 수 있어, 정확한 사항은 상담을 원하는 병원에 직접 확인하는 것이 필요합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 특정 병원의 동의 절차를 대신 설명하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#7A6E8B",
  accentHoverColor: "#605470",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "병원별 절차 확인",
      text: "동의·상의 관련 절차는 병원마다 다를 수 있어 직접 확인이 필요합니다.",
    },
    {
      numberLabel: "02",
      title: "동행 여부",
      text: "마취 방법 등에 따라 동행이 권장되는 경우가 있을 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "개인 선택",
      text: "상의 여부와 정도는 개인의 상황에 따라 선택할 수 있는 부분입니다.",
    },
  ],
  seo: {
    title: "임신중절수술 상담, 배우자·가족과 꼭 상의해야 하나요?",
    description:
      "임신중절수술 상담 시 배우자·가족과의 상의 여부, 동행이 필요한 경우를 확인하는 관점을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 배우자 동의",
      "임신중절수술 가족 상의",
      "임신중절수술 동행",
      "임신중절수술 상담 배우자",
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
      id: "partner-consent",
      order: 1,
      numberLabel: "01",
      heading: "배우자 동의가 반드시 필요한가요?",
      layout: "callout",
      directAnswer:
        "구체적인 동의 절차는 병원과 개인 상황에 따라 다를 수 있어 이 글에서 일괄적으로 단정하지 않으며, 상담을 원하는 병원에 직접 확인하는 것이 정확합니다.",
      paragraphs: [],
      callout: "동의·절차 관련 사항은 병원별 확인이 필요합니다.",
    },
    {
      id: "partner-companion",
      order: 2,
      numberLabel: "02",
      heading: "동행은 꼭 필요한가요?",
      layout: "prose",
      directAnswer:
        "마취 방법에 따라 귀가 시 동행을 권장하는 경우가 있을 수 있어, 혼자 방문을 계획한다면 예약 시 미리 확인하는 것이 안전합니다.",
      paragraphs: [],
      relatedHref: ROUTES.bookingChecklist,
      relatedLabel: "예약 전 확인사항 보기",
    },
    {
      id: "partner-tell-or-not",
      order: 3,
      numberLabel: "03",
      heading: "가족에게 알리고 싶지 않다면 어떻게 하나요?",
      layout: "prose",
      directAnswer:
        "알리는 것은 개인의 선택 영역이며, 상황에 따라 알리지 않고 진행하는 경우도 있습니다. 다만 진료 동의나 동행이 필요한 절차가 있는지는 병원에 확인하는 것이 필요합니다.",
      paragraphs: [],
    },
    {
      id: "partner-support",
      order: 4,
      numberLabel: "04",
      heading: "상의할 상대가 마땅치 않다면?",
      layout: "prose",
      directAnswer:
        "가까운 사람에게 알리기 어렵다면, 병원 상담을 통해 진행 절차와 필요한 부분을 직접 확인하는 것도 방법입니다.",
      paragraphs: [],
      relatedHref: ROUTES.consultPrivacy,
      relatedLabel: "상담 개인정보 안내 보기",
    },
  ],
};
