import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH4_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_ANESTHESIA_RECOVERY_PAGE: ContentPage = {
  id: "hospitalAnesthesiaRecovery",
  order: 127,
  numberLabel: "27",
  slug: "임신중절수술병원-마취-회복-체계-확인",
  href: ROUTES.hospitalAnesthesiaRecovery,
  navLabel: "임신중절수술병원 마취·회복 체계 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술병원 마취·회복 체계 확인",
  heading: "임신중절수술병원에서 마취·회복 체계는 무엇을 확인하나요?",
  breadcrumbLabel: "임신중절수술병원 마취·회복 체계 확인",
  infoTopicLabel: "병원·정보",
  infoCategory: "hospital",
  infoCardDescription:
    "마취 전 고지, 회복 관찰, 귀가·동행 안내가 어떻게 이어지는지 확인하는 기준을 안내합니다.",
  intro: [
    "임신중절수술병원에서는 마취 적용 여부와 회복 관찰, 귀가 안내가 어떻게 이어지는지가 상담에서 자주 확인되는 부분입니다. 마취 방식은 개인 상태와 의료진 판단에 따라 달라질 수 있어, 특정 방식이 모든 사람에게 동일하다고 단정하기 어렵습니다.",
    "이 글은 마취·회복 체계를 확인할 때 물어보면 좋은 점을 일반적인 의료정보로 정리한 안내이며, 개인의 마취 가능 여부나 회복 일정을 대신 결정하지 않습니다.",
  ],
  hubContextLink: {
    before: "당일 절차와 비용·회복의 큰 흐름은 ",
    anchor: "임신중절수술",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  faqIds: [
    "hospital-anesthesia-recovery-01",
    "hospital-anesthesia-recovery-02",
    "hospital-anesthesia-recovery-03",
    "hospital-anesthesia-recovery-04",
    "hospital-anesthesia-recovery-05",
  ],
  faqTitle: "임신중절수술병원 마취·회복 체계 확인 자주 묻는 질문",
  conclusion: [
    "마취 전 고지 항목, 회복 관찰 안내, 귀가·동행 기준을 미리 물어보면 당일 혼선을 줄이는 데 도움이 됩니다.",
    "병원 선택 시의 넓은 비교 기준은 임신중절수술병원 선택 기준 안내에서 확인할 수 있습니다.",
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
      title: "마취 전 고지",
      text: "병력·복용 약을 알리고 마취 관련 설명을 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "회복 관찰",
      text: "회복실 관찰과 귀가 가능 기준 안내를 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "동행·귀가",
      text: "동행 권장 여부와 귀가 시 주의점을 미리 묻습니다.",
    },
  ],
  seo: {
    title: "임신중절수술병원 마취·회복 체계 확인",
    description:
      "임신중절수술병원에서 마취 설명과 회복 관찰·귀가 안내를 확인할 때 참고할 질문을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술병원 마취",
      "임신중절수술병원 회복",
      "임신중절수술 수면마취",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    {
      label: "연세365산부인과의원 임신중절클리닉",
      href: YEONSEI365_LINKS.clinic,
    },
    {
      label: "연세365산부인과의원 수술 방법 안내",
      href: YEONSEI365_LINKS.method,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "hospital-anes-ask",
      order: 1,
      numberLabel: "01",
      heading: "마취 관련으로 무엇을 확인하나요?",
      layout: "checklist",
      directAnswer:
        "적용 가능한 마취 방식의 설명, 금식·복용 중단 안내, 병력·복용 약 고지 필요 여부를 확인하는 편이 도움이 됩니다.",
      paragraphs: [
        "특정 마취가 모든 사람에게 동일하게 적용된다고 보기 어렵고, 개인 상태에 따른 설명을 듣는 것이 중요합니다.",
      ],
      bullets: [
        "적용 가능한 마취 방식과 설명",
        "금식·복용 중단 안내 여부",
        "병력·알레르기·복용 약 고지",
      ],
      relatedHref: ROUTES.sleepAnesthesia,
      relatedLabel: "수면마취 확인사항 보기",
    },
    {
      id: "hospital-recovery-flow",
      order: 2,
      numberLabel: "02",
      heading: "회복 관찰과 귀가는 어떻게 이어지나요?",
      layout: "prose",
      directAnswer:
        "시술 후 회복실 관찰, 귀가 가능 시점, 동행 권장 여부는 병원 안내와 개인 회복 속도에 따라 달라질 수 있습니다.",
      paragraphs: [
        "어지럼·통증 변화가 있을 때 어떻게 알리면 되는지, 귀가 후 주의점은 무엇인지 미리 질문해 두면 좋습니다.",
      ],
      relatedHref: ROUTES.dayProcedure,
      relatedLabel: "당일 절차 안내 보기",
    },
    {
      id: "hospital-anes-compare",
      order: 3,
      numberLabel: "03",
      heading: "마취·회복 안내는 병원 비교에 어떻게 쓰이나요?",
      layout: "prose",
      directAnswer:
        "마취 설명의 구체성과 회복·귀가 안내의 명확성은 병원 선택 시 확인할 수 있는 기준 중 하나입니다.",
      paragraphs: [
        "검사·상담·사후관리까지 포함한 비교는 임신중절수술병원 선택 기준에서 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술병원 선택 기준",
    },
  ],
};
