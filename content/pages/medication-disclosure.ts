import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const MEDICATION_DISCLOSURE_PAGE: ContentPage = {
  id: "medicationDisclosure",
  order: 110,
  numberLabel: "10",
  slug: "임신중절수술-상담-전-복용약-확인",
  href: ROUTES.medicationDisclosure,
  navLabel: "임신중절수술 상담 전 복용약 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 상담 전 복용 중인 약, 왜 꼭 알려야 하나요?",
  heading: "임신중절수술 상담 전 복용 중인 약, 왜 꼭 알려야 하나요?",
  breadcrumbLabel: "임신중절수술 상담 전 복용약 확인",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "처방약·일반약·건강기능식품을 알려야 하는 이유와 정리하는 방법을 안내합니다.",
  intro: [
    "복용 중인 약을 미리 알리는 것은 상담과 검사 계획, 마취 방법 결정에 참고가 되는 중요한 정보입니다. 어떤 약이든 사소하다고 생략하기보다는 함께 알리는 것이 안전합니다.",
    "이 글은 복용 약을 알려야 하는 일반적인 이유와 정리 방법을 설명하는 의료정보이며, 특정 약물의 사용 가능 여부를 개별적으로 판단하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사 전반에 대한 안내는 ",
    anchor: "임신중절수술 안내",
    after: "에서 함께 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "medication-disclosure-01",
    "medication-disclosure-02",
    "medication-disclosure-03",
    "medication-disclosure-04",
    "medication-disclosure-05",
  ],
  faqTitle: "임신중절수술 상담 전 복용약 확인 자주 묻는 질문",
  conclusion: [
    "복용 약 정보는 검사와 마취 계획을 세우는 데 참고가 되는 중요한 자료입니다. 처방약뿐 아니라 일반약, 건강기능식품까지 빠짐없이 정리해 상담에서 알리는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개별 약물의 사용 가능 여부를 판단하지 않습니다. 정확한 확인은 상담을 담당하는 의료진에게 문의해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B7A5E",
  accentHoverColor: "#706048",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "처방약·일반약 모두",
      text: "병원에서 처방받은 약과 스스로 구매한 일반약을 함께 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "건강기능식품 포함",
      text: "영양제·한약 등 건강기능식품도 검사·마취 계획에 참고가 됩니다.",
    },
    {
      numberLabel: "03",
      title: "알레르기도 함께",
      text: "약물 알레르기 이력이 있다면 반드시 함께 알립니다.",
    },
  ],
  seo: {
    title: "임신중절수술 상담 전 복용 중인 약, 왜 꼭 알려야 하나요?",
    description:
      "임신중절수술 상담 전 복용 중인 약을 알려야 하는 이유와 정리 방법을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 복용약",
      "임신중절수술 상담 전 확인사항",
      "임신중절수술 약물 알레르기",
      "임신중절수술 전 약",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
    { label: "연세365산부인과의원 수술 절차 안내", href: YEONSEI365_LINKS.surgery },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "med-why",
      order: 1,
      numberLabel: "01",
      heading: "복용 약을 왜 알려야 하나요?",
      layout: "prose",
      directAnswer:
        "복용 약 정보는 검사 계획, 마취 방법, 시술 후 관리 방향을 정하는 데 참고가 되는 중요한 정보이기 때문입니다.",
      paragraphs: [
        "특정 약이 진료에 영향을 미치는지는 개인 상태와 약의 종류에 따라 달라질 수 있어, 사소해 보이는 약이라도 미리 알리는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.sleepAnesthesia,
      relatedLabel: "수면마취 확인사항 보기",
    },
    {
      id: "med-what",
      order: 2,
      numberLabel: "02",
      heading: "어떤 약까지 알려야 하나요?",
      layout: "checklist",
      directAnswer:
        "병원에서 처방받은 약뿐 아니라 일반의약품, 건강기능식품, 한약까지 포함해 정리하는 것이 좋습니다.",
      paragraphs: [],
      bullets: [
        "병원 처방약",
        "약국에서 구매한 일반의약품",
        "영양제·건강기능식품",
        "한약·한방 치료제",
        "피임약을 포함한 호르몬제",
      ],
    },
    {
      id: "med-allergy",
      order: 3,
      numberLabel: "03",
      heading: "알레르기 이력도 함께 알려야 하나요?",
      layout: "prose",
      directAnswer:
        "네. 약물 알레르기나 과거 이상반응 이력은 검사·마취 계획에 참고가 되므로 함께 알리는 것이 필요합니다.",
      paragraphs: [
        "정확한 약 이름이 기억나지 않는다면 증상이나 시기를 함께 설명해도 상담에 도움이 될 수 있습니다.",
      ],
    },
    {
      id: "med-list",
      order: 4,
      numberLabel: "04",
      heading: "상담 전 어떻게 정리하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "약 이름과 복용 시작 시기를 메모하거나, 실물 포장·처방전을 챙겨가면 상담에서 정확하게 전달하는 데 도움이 됩니다.",
      paragraphs: [
        "기억에만 의존하기보다 스마트폰 사진이나 메모를 활용하는 것도 실용적인 방법입니다.",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내 보기",
    },
  ],
};
