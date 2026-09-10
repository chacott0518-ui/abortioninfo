import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH4_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_EXAM_GESTATION_PAGE: ContentPage = {
  id: "hospitalExamGestation",
  order: 126,
  numberLabel: "26",
  slug: "임신중절수술병원-검사와-주수-확인",
  href: ROUTES.hospitalExamGestation,
  navLabel: "임신중절수술병원 검사와 주수 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술병원 검사와 주수 확인",
  heading: "임신중절수술병원에서 검사와 주수는 어떻게 확인하나요?",
  breadcrumbLabel: "임신중절수술병원 검사와 주수 확인",
  infoTopicLabel: "병원·정보",
  infoCategory: "hospital",
  infoCardDescription:
    "병원에서 주수·임신 상태를 확인할 때 묻는 질문과 결과 설명의 포인트를 안내합니다.",
  intro: [
    "임신중절수술병원에서는 보통 초음파 등 검사로 임신 상태와 주수를 확인한 뒤 상담을 진행합니다. 생리일만으로 주수를 단정하기 어렵고, 검사 결과 설명이 이후 방법·비용·회복 안내와 어떻게 연결되는지가 중요합니다.",
    "이 글은 병원 상담에서 검사·주수를 확인할 때 참고할 관점을 일반적인 의료정보로 정리한 안내이며, 개인의 검사 결과나 가능 여부를 대신 판단하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사·비용·회복의 전체 흐름은 ",
    anchor: "임신중절수술",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  faqIds: [
    "hospital-exam-gestation-01",
    "hospital-exam-gestation-02",
    "hospital-exam-gestation-03",
    "hospital-exam-gestation-04",
    "hospital-exam-gestation-05",
  ],
  faqTitle: "임신중절수술병원 검사와 주수 확인 자주 묻는 질문",
  conclusion: [
    "주수와 임신 상태는 검사 결과를 기준으로 확인하고, 결과 설명이 이후 진료 계획과 연결되는지 살펴보는 것이 도움이 됩니다.",
    "병원 비교의 큰 기준은 임신중절수술병원 선택 기준 안내에서 함께 확인할 수 있습니다.",
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
      title: "검사 확인",
      text: "주수·임신 상태는 검사 결과를 기준으로 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "설명 연결",
      text: "결과 설명이 방법·비용·관리 안내와 이어지는지 봅니다.",
    },
    {
      numberLabel: "03",
      title: "질문 준비",
      text: "추가 검사 필요 여부와 의미를 미리 물어봅니다.",
    },
  ],
  seo: {
    title: "임신중절수술병원 검사와 주수 확인",
    description:
      "임신중절수술병원에서 검사와 주수를 확인할 때 확인하면 좋은 질문과 설명 포인트를 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술병원 검사",
      "임신중절수술병원 주수 확인",
      "임신중절수술 초음파",
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
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "hospital-exam-why",
      order: 1,
      numberLabel: "01",
      heading: "병원에서 주수를 다시 확인하는 이유는?",
      layout: "prose",
      directAnswer:
        "마지막 생리일 추정만으로는 오차가 생길 수 있어, 초음파 등 검사로 현재 임신 상태를 확인하는 과정이 필요합니다.",
      paragraphs: [
        "검사 결과는 적용 가능한 진료 방법과 상담 내용을 정하는 데 함께 참고될 수 있습니다.",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내",
    },
    {
      id: "hospital-exam-ask",
      order: 2,
      numberLabel: "02",
      heading: "결과 설명을 들을 때 무엇을 물어보나요?",
      layout: "checklist",
      directAnswer:
        "현재 주수·상태의 의미, 추가 검사 필요 여부, 이후 상담·진료 계획과의 연결을 질문해 두면 이해가 명확해질 수 있습니다.",
      paragraphs: [
        "수치만 나열되지 않고 다음 단계 설명이 이어지는지 확인하는 편이 도움이 됩니다.",
      ],
      bullets: [
        "현재 확인된 주수·상태는 무엇인가요?",
        "추가 검사가 필요한 경우는 언제인가요?",
        "이 결과가 방법·일정 상담에 어떤 영향을 주나요?",
      ],
      relatedHref: ROUTES.earlyGestation,
      relatedLabel: "임신초기 주수 확인 안내",
    },
    {
      id: "hospital-exam-compare",
      order: 3,
      numberLabel: "03",
      heading: "검사 설명은 병원 비교에 어떻게 쓰이나요?",
      layout: "prose",
      directAnswer:
        "검사 항목과 결과 설명의 구체성은 병원 선택 시 확인할 기준 중 하나입니다. 설명 없이 진행만 강조하는 경우는 신중히 구분하는 편이 안전합니다.",
      paragraphs: [
        "검사·상담 체계를 포함한 비교 기준은 임신중절수술병원 선택 기준에서 더 넓게 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술병원 선택 기준",
    },
  ],
};
