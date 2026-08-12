import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH2_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const DAY_PROCEDURE_PAGE: ContentPage = {
  id: "dayProcedure",
  order: 103,
  numberLabel: "03",
  slug: "임신중절수술-당일-절차",
  href: ROUTES.dayProcedure,
  navLabel: "임신중절수술 당일 절차",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 당일 절차, 어떻게 진행되나요?",
  heading: "임신중절수술 당일 절차, 어떻게 진행되나요?",
  breadcrumbLabel: "임신중절수술 당일 절차",
  infoTopicLabel: "수술·마취",
  infoCategory: "surgery",
  infoCardDescription:
    "접수부터 귀가까지 당일 전체 흐름과 각 단계에서 확인해야 할 사항을 안내합니다.",
  intro: [
    "임신중절수술 당일 절차는 접수와 최종 확인, 검사 재확인, 마취·시술, 회복실 관찰, 귀가 전 안내의 순서로 이루어지는 경우가 일반적입니다. 다만 세부 순서와 소요시간은 의료기관의 운영 방식과 개인 상태에 따라 달라질 수 있습니다.",
    "이 글은 당일 전체 흐름을 미리 그려볼 수 있도록 일반적인 절차를 안내하는 의료정보이며, 실제 진행 방식과 소요시간은 상담을 통해 확인하는 것이 필요합니다.",
  ],
  hubContextLink: {
    before: "비용·회복까지 포함한 전체 흐름은 ",
    anchor: "임신중절수술 종합 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  faqIds: [
    "day-procedure-01",
    "day-procedure-02",
    "day-procedure-03",
    "day-procedure-04",
    "day-procedure-05",
  ],
  faqTitle: "임신중절수술 당일 절차 자주 묻는 질문",
  conclusion: [
    "당일 절차는 접수·확인, 검사 재확인, 마취·시술, 회복실 관찰, 귀가 전 안내로 이어지는 흐름이 일반적이지만 세부 진행과 소요시간은 병원과 개인 상태에 따라 달라질 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단이나 진료를 대신하지 않습니다. 당일 정확한 절차와 예상 시간은 예약한 의료기관에 직접 확인하는 것이 필요합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#5E7A8B",
  accentHoverColor: "#48606E",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "접수·최종 확인",
      text: "도착 후 신분 확인과 검사 결과, 동의서 등 서류를 확인하는 절차가 진행됩니다.",
    },
    {
      numberLabel: "02",
      title: "마취·시술",
      text: "마취 방법에 따라 준비 과정이 다르며, 시술 자체는 의료진 판단에 따라 진행됩니다.",
    },
    {
      numberLabel: "03",
      title: "회복실 관찰",
      text: "시술 후에는 활력징후와 출혈, 통증을 관찰하는 회복 시간을 갖습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 당일 절차, 어떻게 진행되나요?",
    description:
      "임신중절수술 당일 접수부터 귀가까지의 일반적인 절차와 각 단계에서 확인할 사항을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 당일 절차",
      "임신중절수술 절차",
      "임신중절수술 당일",
      "임신중절수술 소요시간",
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
      label: "연세365산부인과의원 수술 절차 안내",
      href: YEONSEI365_LINKS.surgery,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "day-flow",
      order: 1,
      numberLabel: "01",
      heading: "당일 진행되는 기본 흐름은 어떻게 되나요?",
      layout: "steps",
      directAnswer:
        "접수와 최종 확인, 검사 재확인, 마취·시술, 회복실 관찰, 귀가 전 안내의 순서로 진행되는 경우가 일반적이지만 병원마다 세부 순서는 다를 수 있습니다.",
      paragraphs: [
        "전체 흐름을 미리 알아두면 당일 긴장을 줄이는 데 도움이 될 수 있습니다. 다만 아래 순서는 일반적인 예시이며, 실제 병원의 안내를 우선 따라야 합니다.",
      ],
      steps: [
        { label: "접수·서류 확인", text: "신분 확인, 동의서, 사전 안내 사항을 확인합니다." },
        { label: "검사·상태 재확인", text: "필요한 경우 당일 검사나 상태를 다시 확인합니다." },
        { label: "마취·시술 준비", text: "마취 방법에 따른 준비 절차를 안내받습니다." },
        { label: "시술", text: "의료진 판단에 따라 시술이 진행됩니다." },
        { label: "회복실 관찰", text: "활력징후와 출혈, 통증 등을 관찰하는 시간을 갖습니다." },
        { label: "귀가 전 안내", text: "주의사항과 재방문 시점을 안내받은 뒤 귀가합니다." },
      ],
    },
    {
      id: "day-duration",
      order: 2,
      numberLabel: "02",
      heading: "당일 병원에 머무르는 시간은 어느 정도인가요?",
      layout: "prose",
      directAnswer:
        "시술 자체보다 접수·검사·회복 관찰까지 포함한 전체 체류시간이 더 길게 느껴질 수 있으며, 정확한 시간은 개인 상태와 병원 사정에 따라 달라질 수 있습니다.",
      paragraphs: [
        "체류시간에는 시술 시간뿐 아니라 접수 대기, 검사 재확인, 마취에서 회복하는 관찰 시간이 함께 포함됩니다. 이 때문에 시술 자체 시간만으로 전체 소요시간을 가늠하기는 어렵습니다.",
        "당일 일정을 계획할 때는 여유 시간을 두고, 정확한 예상 소요시간은 예약 시 병원에 직접 확인하는 것이 좋습니다.",
      ],
    },
    {
      id: "day-final-check",
      order: 3,
      numberLabel: "03",
      heading: "시술 직전 마지막으로 확인하는 사항은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "금식 여부, 동행 여부, 보호자 연락 가능 여부, 소지품 관리 등을 시술 직전에 다시 확인하는 경우가 많습니다.",
      paragraphs: [
        "병원의 사전 안내에 금식 시간이나 준비물이 포함되어 있다면 그 안내를 우선 따르는 것이 중요합니다.",
      ],
      bullets: [
        "금식 안내를 지켰는지",
        "동행인 유무와 연락 가능 여부",
        "귀가 시 이동 수단",
        "귀중품·소지품 보관",
        "당일 복용해야 할 약이 있는지",
      ],
      relatedHref: ROUTES.bookingChecklist,
      relatedLabel: "예약 전 확인사항 보기",
    },
    {
      id: "day-recovery-room",
      order: 4,
      numberLabel: "04",
      heading: "회복실에서는 무엇을 관찰하나요?",
      layout: "prose",
      directAnswer:
        "회복실에서는 활력징후, 출혈량, 통증 정도를 관찰하며, 이상이 없는지 확인한 뒤 귀가 여부를 판단합니다.",
      paragraphs: [
        "관찰 시간은 마취 방법과 개인 회복 속도에 따라 달라질 수 있습니다. 어지럼이나 통증이 있다면 참지 말고 의료진에게 바로 알리는 것이 중요합니다.",
      ],
      relatedHref: ROUTES.sleepAnesthesia,
      relatedLabel: "수면마취 확인사항 보기",
    },
    {
      id: "day-after-warning",
      order: 5,
      numberLabel: "05",
      heading: "귀가 후 다시 병원에 연락해야 하는 경우는?",
      layout: "callout",
      directAnswer:
        "귀가 후 심한 통증, 많은 출혈, 고열, 심한 어지럼 등 안내받은 범위를 벗어나는 증상이 있으면 의료기관에 연락하는 것이 필요합니다.",
      paragraphs: [
        "귀가 전 안내받은 주의사항을 잘 기억해 두고, 걱정되는 변화가 있다면 인터넷 정보로 판단하기보다 병원에 직접 확인하는 것이 안전합니다.",
      ],
      callout:
        "심한 통증, 많은 출혈, 고열, 심한 어지럼·실신 등이 있으면 즉시 의료기관에 연락하거나 방문하세요.",
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "회복 중 이상증상 확인하기",
    },
  ],
};
