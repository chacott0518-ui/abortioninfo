import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH4_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_AFTERCARE_CHECK_PAGE: ContentPage = {
  id: "hospitalAftercareCheck",
  order: 128,
  numberLabel: "28",
  slug: "임신중절수술병원-사후관리-확인사항",
  href: ROUTES.hospitalAftercareCheck,
  navLabel: "임신중절수술병원 사후관리 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술병원 사후관리 확인사항",
  heading: "임신중절수술병원 사후관리, 무엇을 확인하나요?",
  breadcrumbLabel: "임신중절수술병원 사후관리 확인사항",
  infoTopicLabel: "병원·정보",
  infoCategory: "hospital",
  infoCardDescription:
    "경과 확인 일정, 이상 증상 연락, 재방문 안내를 상담에서 확인하는 방법을 안내합니다.",
  intro: [
    "임신중절수술병원 선택에서는 당일 진료뿐 아니라 사후관리—경과 확인, 이상 증상 시 연락, 재방문—까지 이어지는지가 중요합니다. 포함 범위와 연락 방법은 병원마다 다를 수 있어 상담에서 구분해 확인하는 편이 안전합니다.",
    "이 글은 사후관리를 확인할 때 참고할 질문을 일반적인 의료정보로 정리한 안내이며, 개인의 회복 일정을 단정하거나 특정 병원을 추천하지 않습니다.",
  ],
  hubContextLink: {
    before: "회복·주의사항까지 포함한 전체 안내는 ",
    anchor: "임신중절수술",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  faqIds: [
    "hospital-aftercare-check-01",
    "hospital-aftercare-check-02",
    "hospital-aftercare-check-03",
    "hospital-aftercare-check-04",
    "hospital-aftercare-check-05",
  ],
  faqTitle: "임신중절수술병원 사후관리 확인사항 자주 묻는 질문",
  conclusion: [
    "사후진료 일정, 이상 증상 연락 방법, 추가 확인이 필요할 수 있는 조건을 미리 물어보면 회복 중 대응이 수월해질 수 있습니다.",
    "병원 비교의 넓은 기준은 임신중절수술병원 선택 기준 안내에서 함께 확인할 수 있습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#4A6B7C",
  accentHoverColor: "#3A5663",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "경과 확인",
      text: "사후진료 일정·횟수 포함 여부를 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "연락 체계",
      text: "이상 증상 시 연락 가능한 경로를 미리 묻습니다.",
    },
    {
      numberLabel: "03",
      title: "추가 확인",
      text: "재방문·추가 검사가 필요할 수 있는 조건을 확인합니다.",
    },
  ],
  seo: {
    title: "임신중절수술병원 사후관리 확인사항",
    description:
      "임신중절수술병원에서 사후진료·이상 증상 연락·재방문 안내를 확인할 때 참고할 질문을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술병원 사후관리",
      "임신중절수술 사후진료",
      "임신중절수술 병원 재방문",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    {
      label: "연세365산부인과의원 회복·사후관리 안내",
      href: YEONSEI365_LINKS.recovery,
    },
    {
      label: "연세365산부인과의원 임신중절클리닉",
      href: YEONSEI365_LINKS.clinic,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "hospital-aftercare-items",
      order: 1,
      numberLabel: "01",
      heading: "사후관리에서 확인할 항목은?",
      layout: "checklist",
      directAnswer:
        "사후진료 일정과 포함 범위, 이상 증상 시 연락 방법, 재방문·추가 검사 가능성, 처방·위생 안내를 구분해 확인하는 편이 도움이 됩니다.",
      paragraphs: [
        "견적에 사후진료가 어느 범위까지 포함되는지 함께 물어보면 오해를 줄일 수 있습니다.",
      ],
      bullets: [
        "사후진료 일정·횟수",
        "이상 증상 시 연락 경로",
        "재방문·추가 검사 가능 조건",
        "처방·위생·생활 안내",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "임신중절수술 회복기간 안내",
    },
    {
      id: "hospital-aftercare-symptoms",
      order: 2,
      numberLabel: "02",
      heading: "이상 증상 안내는 왜 중요한가요?",
      layout: "prose",
      directAnswer:
        "회복 중 출혈·통증 변화는 개인차가 있어, 언제 연락해야 하는지 안내가 있으면 대응이 수월해질 수 있습니다.",
      paragraphs: [
        "일반적인 변화와 확인이 필요한 신호를 구분하는 안내는 병원마다 표현이 다를 수 있으므로 상담에서 직접 확인하세요.",
      ],
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "이상증상 확인 안내 보기",
    },
    {
      id: "hospital-aftercare-compare",
      order: 3,
      numberLabel: "03",
      heading: "사후관리는 병원 비교에 어떻게 쓰이나요?",
      layout: "prose",
      directAnswer:
        "당일 진료뿐 아니라 경과 확인과 연락 체계가 이어지는지는 병원 선택 시 확인할 핵심 기준 중 하나입니다.",
      paragraphs: [
        "검사·상담·비용과 함께 사후관리를 비교하는 방법은 임신중절수술병원 선택 기준에서 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술병원 선택 기준",
    },
  ],
};
