import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH2_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const BOOKING_CHECKLIST_PAGE: ContentPage = {
  id: "bookingChecklist",
  order: 108,
  numberLabel: "08",
  slug: "임신중절수술-예약-전-확인사항",
  href: ROUTES.bookingChecklist,
  navLabel: "임신중절수술 예약 전 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 예약 전, 무엇을 확인해야 하나요?",
  heading: "임신중절수술 예약 전, 무엇을 확인해야 하나요?",
  breadcrumbLabel: "임신중절수술 예약 전 확인사항",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "예약 전 결정할 사항과 처음 방문 시 준비물, 미리 확인하면 좋은 질문을 안내합니다.",
  intro: [
    "임신중절수술 예약 전에는 방문 날짜와 동행 여부, 지참할 자료를 미리 정리해 두면 상담을 더 원활하게 진행할 수 있습니다. 예약 방식과 준비물은 의료기관마다 다를 수 있어 예약 시 함께 확인하는 것이 필요합니다.",
    "이 글은 예약을 준비하는 과정에서 일반적으로 확인하면 도움이 되는 사항을 정리한 의료정보이며, 특정 병원의 예약 절차나 정책을 의미하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사·비용을 포함한 전체 흐름은 ",
    anchor: "임신중절수술 종합 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  faqIds: [
    "booking-checklist-01",
    "booking-checklist-02",
    "booking-checklist-03",
    "booking-checklist-04",
    "booking-checklist-05",
  ],
  faqTitle: "임신중절수술 예약 전 확인사항 자주 묻는 질문",
  conclusion: [
    "예약 전 방문 날짜, 동행 여부, 지참 자료를 정리해 두면 상담 시간을 더 효율적으로 쓸 수 있습니다. 예약 방식과 준비물 안내는 병원마다 다를 수 있으므로 예약 과정에서 직접 확인하는 것이 정확합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진료 가능 여부를 판단하지 않습니다. 정확한 예약 절차는 방문하려는 의료기관에 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B5E6E",
  accentHoverColor: "#704857",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "방문 일정",
      text: "방문 가능한 날짜와 동행 여부를 먼저 정리해 두면 예약이 수월합니다.",
    },
    {
      numberLabel: "02",
      title: "지참 자료",
      text: "이전 검사 결과나 복용 약 목록이 있다면 함께 준비합니다.",
    },
    {
      numberLabel: "03",
      title: "사전 질문",
      text: "당일 절차와 비용 안내 방식을 예약 시 미리 물어볼 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 예약 전, 무엇을 확인해야 하나요?",
    description:
      "임신중절수술 예약 전 결정할 사항, 처음 방문 시 준비물, 예약 시 확인하면 좋은 질문을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 예약",
      "임신중절수술 예약 전 확인사항",
      "임신중절수술 상담 예약",
      "임신중절수술 방문 준비",
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
      label: "연세365산부인과의원 비용 안내",
      href: YEONSEI365_LINKS.cost,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "booking-basic",
      order: 1,
      numberLabel: "01",
      heading: "예약 전 결정해야 할 기본 사항은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "방문 가능한 날짜와 시간, 동행 여부, 이전 검사 기록의 지참 여부를 먼저 정리해 두면 예약과 상담이 더 수월해집니다.",
      paragraphs: [
        "미리 정리해 두면 예약 통화나 상담에서 빠뜨리는 내용을 줄일 수 있습니다.",
      ],
      bullets: [
        "방문 가능한 날짜·시간",
        "동행인 유무",
        "이전 검사 결과 지참 여부",
        "복용 중인 약 목록",
        "궁금한 점 미리 메모하기",
      ],
    },
    {
      id: "booking-first-visit",
      order: 2,
      numberLabel: "02",
      heading: "처음 방문이라면 무엇을 준비하나요?",
      layout: "checklist",
      directAnswer:
        "신분 확인 서류, 이전에 받은 검사 결과지, 복용 약 목록을 준비해 가면 상담에 참고가 될 수 있습니다.",
      paragraphs: [
        "다른 병원에서 이미 검사를 받은 경우, 결과지를 지참하면 중복 검사를 줄이는 데 도움이 될 수 있습니다.",
      ],
      bullets: [
        "신분 확인이 가능한 서류",
        "이전 병원의 검사 결과지",
        "복용 중인 약과 건강기능식품 목록",
        "마지막 생리 시작일 메모",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내 보기",
    },
    {
      id: "booking-questions",
      order: 3,
      numberLabel: "03",
      heading: "예약 시 병원에 미리 확인하면 좋은 질문은?",
      layout: "checklist",
      directAnswer:
        "당일 절차 진행 방식, 비용 안내 방식, 검사 포함 여부, 동행 필요 여부를 예약 단계에서 미리 물어보면 방문 당일 혼선을 줄일 수 있습니다.",
      paragraphs: [
        "예약 통화나 온라인 문의에서 확인한 내용은 메모해 두면 당일 상담에서 다시 비교하기 좋습니다.",
      ],
      bullets: [
        "당일 진행 절차와 예상 소요시간",
        "비용은 어떤 방식으로 안내되나요?",
        "예약 시 필요한 검사가 있나요?",
        "동행이 꼭 필요한가요?",
        "예약 변경·취소는 어떻게 하나요?",
      ],
      relatedHref: ROUTES.dayProcedure,
      relatedLabel: "당일 절차 전체 흐름 보기",
    },
    {
      id: "booking-companion",
      order: 4,
      numberLabel: "04",
      heading: "혼자 방문해도 되나요, 동행이 필요한가요?",
      layout: "prose",
      directAnswer:
        "동행 필요 여부는 마취 방법과 병원 정책에 따라 다를 수 있어, 혼자 방문을 계획하고 있다면 예약 시 미리 확인하는 것이 안전합니다.",
      paragraphs: [
        "수면마취를 적용하는 경우 귀가 시 동행을 권장하는 안내가 있을 수 있습니다. 정확한 기준은 병원마다 다를 수 있으므로 예약 단계에서 확인해 두는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.sleepAnesthesia,
      relatedLabel: "수면마취 확인사항 보기",
    },
    {
      id: "booking-change",
      order: 5,
      numberLabel: "05",
      heading: "예약 변경·취소 시 확인할 사항은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "일정 변경이 필요할 경우를 대비해 변경·취소 방법과 연락 가능한 시간을 예약 시 함께 확인해 두는 것이 도움이 됩니다.",
      paragraphs: [
        "몸 상태 변화나 개인 사정으로 일정을 조정해야 할 수도 있으므로, 변경 절차를 미리 알아두면 당일 혼선을 줄일 수 있습니다.",
      ],
    },
  ],
};
