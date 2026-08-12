import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH2_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const AFTER_SYMPTOMS_PAGE: ContentPage = {
  id: "afterSymptoms",
  order: 106,
  numberLabel: "06",
  slug: "임신중절수술-후-이상증상",
  href: ROUTES.afterSymptoms,
  navLabel: "임신중절수술 후 이상증상",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 이상증상, 언제 병원에 다시 가야 하나요?",
  heading: "임신중절수술 후 이상증상, 언제 병원에 다시 가야 하나요?",
  breadcrumbLabel: "임신중절수술 후 이상증상",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "회복 중 나타날 수 있는 일반적인 변화와 병원에 다시 연락해야 하는 신호를 안내합니다.",
  intro: [
    "임신중절수술 후에는 어느 정도의 출혈이나 복부 불편감이 나타날 수 있지만, 어디까지가 일반적인 범위이고 어디부터 병원에 연락해야 하는지는 개인 상태에 따라 다를 수 있습니다. 온라인 정보만으로 본인의 증상을 판단하기는 어렵습니다.",
    "이 글은 회복 중 흔히 언급되는 변화와, 재방문·확인이 필요한 신호를 일반적인 의료정보로 정리한 안내입니다. 개인의 증상을 진단하거나 정상·비정상을 판정하지 않습니다.",
  ],
  hubContextLink: {
    before: "회복 전체 흐름과 일정은 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 함께 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  faqIds: [
    "after-symptoms-01",
    "after-symptoms-02",
    "after-symptoms-03",
    "after-symptoms-04",
    "after-symptoms-05",
  ],
  faqTitle: "임신중절수술 후 이상증상 자주 묻는 질문",
  conclusion: [
    "회복 중 출혈, 복통, 발열, 분비물의 변화 정도는 개인마다 다르게 나타날 수 있어 특정 수치나 기준을 일괄 적용하기 어렵습니다. 안내받은 주의사항을 기준으로 삼고, 벗어나는 변화가 있으면 병원에 확인하는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단을 대신하지 않습니다. 증상이 걱정된다면 인터넷 정보로 판단하지 말고 의료진에게 직접 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6E8B6B",
  accentHoverColor: "#547052",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "일반적인 변화",
      text: "가벼운 출혈과 복부 불편감은 회복 중 언급되는 일반적인 변화입니다.",
    },
    {
      numberLabel: "02",
      title: "개인차 존재",
      text: "출혈량과 회복 속도는 개인 상태에 따라 차이가 있을 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "확인이 필요한 신호",
      text: "심한 통증, 많은 출혈, 고열 등은 병원 확인이 필요할 수 있는 신호입니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 이상증상, 언제 병원에 다시 가야 하나요?",
    description:
      "임신중절수술 후 출혈, 복통, 발열, 분비물 등 회복 중 나타날 수 있는 변화와 병원에 다시 연락해야 하는 신호를 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 이상증상",
      "임신중절수술 후 출혈",
      "임신중절수술 후 복통",
      "임신중절수술 후 발열",
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
      id: "symptoms-general",
      order: 1,
      numberLabel: "01",
      heading: "회복 중 나타날 수 있는 일반적인 변화는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "가벼운 출혈, 복부 불편감, 일시적인 피로감은 회복 중 흔히 언급되는 변화이지만 정도와 기간은 개인마다 다를 수 있습니다.",
      paragraphs: [
        "이 변화들이 모든 사람에게 동일하게 나타난다고 단정할 수는 없습니다. 안내받은 회복 일정과 크게 다른 변화가 있다면 확인이 필요합니다.",
      ],
      infoBlocks: [
        { label: "출혈", text: "가벼운 출혈이나 소량의 갈색 분비물이 나타날 수 있습니다." },
        { label: "복부 불편감", text: "가벼운 생리통과 비슷한 불편감이 있을 수 있습니다." },
        { label: "피로감", text: "일시적인 피로감이나 컨디션 저하가 있을 수 있습니다." },
      ],
    },
    {
      id: "symptoms-bleeding",
      order: 2,
      numberLabel: "02",
      heading: "출혈은 어느 정도까지 지켜볼 수 있나요?",
      layout: "prose",
      directAnswer:
        "출혈량과 지속 기간은 개인차가 커서 특정 수치를 일괄 기준으로 제시하기 어려우며, 안내받은 범위를 크게 벗어나면 확인이 필요합니다.",
      paragraphs: [
        "생리량보다 눈에 띄게 많은 출혈, 큰 덩어리가 반복되는 출혈, 시간이 지나도 줄지 않는 출혈은 스스로 판단하기보다 병원에 문의하는 것이 안전합니다.",
        "정확한 출혈 기준은 시술 방법과 개인 상태에 따라 병원에서 다르게 안내할 수 있으므로, 귀가 전 안내받은 기준을 우선 참고하는 것이 필요합니다.",
      ],
    },
    {
      id: "symptoms-fever-discharge",
      order: 3,
      numberLabel: "03",
      heading: "발열이나 분비물은 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "체온이 평소보다 높게 지속되거나 분비물의 냄새·색이 평소와 다르게 느껴지면 감염 등의 가능성을 확인하기 위해 병원에 연락하는 것이 필요할 수 있습니다.",
      paragraphs: [
        "발열과 분비물 변화는 회복 과정에서 반드시 나타나는 것은 아니며, 나타난다면 자가 판단보다 의료진 확인이 필요한 대표적인 신호로 언급됩니다.",
      ],
    },
    {
      id: "symptoms-warning",
      order: 4,
      numberLabel: "04",
      heading: "병원에 즉시 연락해야 하는 신호는 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "심한 통증, 생리량보다 훨씬 많은 출혈, 고열, 심한 어지럼·실신 등은 병원에 바로 연락하거나 방문해야 하는 신호로 안내되는 경우가 많습니다.",
      paragraphs: [
        "아래 항목은 일반적으로 언급되는 확인 신호이며, 병원에서 개별로 안내한 기준이 있다면 그 기준을 우선 따라야 합니다.",
      ],
      bullets: [
        "진통제로 조절되지 않는 심한 통증",
        "생리량보다 훨씬 많은 출혈",
        "고열이 지속되는 경우",
        "심한 어지럼이나 실신",
        "평소와 다른 냄새의 분비물",
      ],
    },
    {
      id: "symptoms-followup",
      order: 5,
      numberLabel: "05",
      heading: "재방문·추적 진료는 어떻게 이루어지나요?",
      layout: "prose",
      directAnswer:
        "회복 경과를 확인하기 위한 재방문 시점과 검사 항목은 병원과 개인 상태에 따라 다르며, 귀가 전 안내받은 일정을 따르는 것이 일반적입니다.",
      paragraphs: [
        "재방문 없이 회복이 끝났다고 스스로 판단하기보다, 안내받은 일정에 맞춰 확인받는 것이 안전합니다. 일상활동 재개 시점이 궁금하다면 관련 안내를 함께 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.afterDailyLife,
      relatedLabel: "회복 중 일상활동 재개 가이드 보기",
    },
  ],
};
