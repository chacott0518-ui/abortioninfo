import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH4_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_CONSULT_CHECK_PAGE: ContentPage = {
  id: "hospitalConsultCheck",
  order: 125,
  numberLabel: "25",
  slug: "임신중절수술병원-상담-전-확인사항",
  href: ROUTES.hospitalConsultCheck,
  navLabel: "임신중절수술병원 상담 전 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술병원 상담 전 확인사항",
  heading: "임신중절수술병원 상담 전, 무엇을 확인하면 좋을까요?",
  breadcrumbLabel: "임신중절수술병원 상담 전 확인사항",
  infoTopicLabel: "병원·정보",
  infoCategory: "hospital",
  infoCardDescription:
    "상담 예약 전 일정·동행·질문 목록을 정리해 두면 병원 비교가 수월해집니다.",
  intro: [
    "임신중절수술병원 상담을 앞두고는 방문 일정과 동행 여부, 미리 물어볼 질문을 정리해 두면 상담 시간을 더 효율적으로 쓸 수 있습니다. 병원마다 예약·상담 방식이 다를 수 있어, 총액이나 광고 문구만으로 비교하기보다 설명의 구체성을 확인하는 과정이 필요합니다.",
    "이 글은 상담 전에 확인하면 도움이 되는 준비 항목을 일반적인 의료정보로 정리한 안내이며, 특정 병원을 추천하거나 개인의 진료 가능 여부를 판단하지 않습니다.",
  ],
  hubContextLink: {
    before: "가능 시기와 비용·회복까지 포함한 전체 안내는 ",
    anchor: "임신중절수술",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH4_PUBLISHED_AT,
  faqIds: [
    "hospital-consult-check-01",
    "hospital-consult-check-02",
    "hospital-consult-check-03",
    "hospital-consult-check-04",
    "hospital-consult-check-05",
  ],
  faqTitle: "임신중절수술병원 상담 전 확인사항 자주 묻는 질문",
  conclusion: [
    "상담 전에는 방문 일정, 동행 여부, 복용 약·병력 메모, 궁금한 질문 목록을 준비해 두면 설명을 더 정확히 들을 수 있습니다.",
    "이 글은 일반 정보 안내이며, 병원 선택 기준의 큰 흐름은 임신중절수술병원 선택 기준 안내에서 함께 확인할 수 있습니다.",
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
      title: "일정·동행",
      text: "방문 가능한 날짜와 동행 여부를 먼저 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "건강 정보",
      text: "생리일·복용 약·병력을 메모해 두면 상담이 수월합니다.",
    },
    {
      numberLabel: "03",
      title: "질문 목록",
      text: "검사·비용·사후관리를 구분해 질문하면 비교가 쉽습니다.",
    },
  ],
  seo: {
    title: "임신중절수술병원 상담 전 확인사항",
    description:
      "임신중절수술병원 상담 전 일정·동행·질문 목록을 정리하는 방법을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술병원 상담",
      "임신중절수술병원 상담 전 확인사항",
      "임신중절수술 병원 상담 준비",
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
      id: "hospital-consult-prep",
      order: 1,
      numberLabel: "01",
      heading: "상담 전에 무엇을 준비하나요?",
      layout: "checklist",
      directAnswer:
        "방문 일정, 동행 여부, 마지막 생리 시작일, 복용 약과 기존 질환, 궁금한 질문 목록을 미리 정리해 두면 상담이 더 정확해질 수 있습니다.",
      paragraphs: [
        "준비 항목은 병원마다 요청 범위가 다를 수 있어, 예약 시 필요한 서류를 함께 확인하는 것이 좋습니다.",
      ],
      bullets: [
        "방문 가능한 날짜·시간",
        "동행인 유무",
        "마지막 생리 시작일",
        "복용 중인 약·건강기능식품",
        "기존 질환·수술 이력·알레르기",
        "비용·검사·사후관리 질문 메모",
      ],
    },
    {
      id: "hospital-consult-questions",
      order: 2,
      numberLabel: "02",
      heading: "상담에서 꼭 물어보면 좋은 질문은?",
      layout: "checklist",
      directAnswer:
        "검사 범위, 적용 가능한 진료 방법의 특성과 한계, 비용 포함·추가 항목, 사후진료와 연락 방법을 구분해 질문하는 편이 도움이 됩니다.",
      paragraphs: [
        "총액만 듣고 결정하기보다, 포함·제외 항목과 추가 비용이 생길 수 있는 조건을 함께 확인하세요.",
      ],
      bullets: [
        "어떤 검사를 진행하나요?",
        "적용 가능한 방법과 제한은 무엇인가요?",
        "견적에 포함·제외되는 항목은 무엇인가요?",
        "사후진료 일정과 연락 방법은 어떻게 되나요?",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술병원 선택 기준",
    },
    {
      id: "hospital-consult-compare",
      order: 3,
      numberLabel: "03",
      heading: "상담만으로 병원을 비교할 수 있나요?",
      layout: "prose",
      directAnswer:
        "상담은 설명의 구체성과 질문 시간을 확인할 수 있는 과정이지만, 최종 판단은 검사 결과와 본인 상태를 바탕으로 이루어지는 것이 안전합니다.",
      paragraphs: [
        "광고·후기만으로 비교하기보다, 상담에서 들은 검사·비용·관리 설명을 메모해 두면 이후 선택에 도움이 됩니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술병원 선택 기준 보기",
    },
  ],
};
