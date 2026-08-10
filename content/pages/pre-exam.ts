import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_PUBLISHED_AT,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const PRE_EXAM_PAGE: ContentPage = {
  id: "preExam",
  order: 101,
  numberLabel: "01",
  slug: "임신중절수술-전-검사",
  href: ROUTES.preExam,
  navLabel: "임신중절수술 전 검사",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 전 검사, 무엇을 확인하나요?",
  heading: "임신중절수술 전 검사, 무엇을 확인하나요?",
  breadcrumbLabel: "임신중절수술 전 검사",
  infoTopicLabel: "검사·상담 준비",
  infoCardDescription:
    "상담 전에 정리할 정보와 검사 결과를 확인할 때 물어보면 좋은 질문을 안내합니다.",
  intro: [
    "임신중절수술을 고려할 때 인터넷에 나온 검사 목록만으로 진료 가능 여부나 필요한 평가를 단정하기는 어렵습니다. 개인의 임신 주수, 증상, 병력, 복용 약에 따라 확인해야 할 내용이 달라질 수 있기 때문입니다.",
    "이 글은 상담 전에 정리해 두면 도움이 되는 정보와, 검사 결과를 설명받을 때 확인할 질문을 일반적인 의료정보로 정리한 안내입니다. 개인의 진단이나 검사 처방을 대신하지 않습니다.",
  ],
  hubContextLink: {
    before: "가능 시기와 비용·회복까지 함께 보려면 ",
    anchor: "임신중절수술 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_PUBLISHED_AT,
  faqIds: [
    "pre-exam-01",
    "pre-exam-02",
    "pre-exam-03",
    "pre-exam-04",
    "pre-exam-05",
  ],
  faqTitle: "임신중절수술 전 검사 자주 묻는 질문",
  conclusion: [
    "수술 전 검사는 모두에게 같은 목록이 적용된다고 보기 어렵습니다. 마지막 생리일·증상·복용 약·병력을 정리한 뒤, 필요한 평가와 결과 의미를 상담에서 확인하는 과정이 중요합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단이나 진료를 대신하지 않습니다. 임신 주수, 증상, 병력 등에 따라 필요한 검사와 진료 방법이 달라질 수 있으므로 개인별 판단은 의료진과 상담해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#8B5E83",
  accentHoverColor: "#6E4868",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "생리 정보 정리",
      text: "마지막 생리 시작일과 평소 생리주기를 먼저 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "임신 확인 과정",
      text: "임신테스트 확인 시점과 이후 경과를 기록해 둡니다.",
    },
    {
      numberLabel: "03",
      title: "현재 증상",
      text: "복통·출혈·어지럼증 등 현재 증상을 구체적으로 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "약·건강기능식품",
      text: "복용 약과 건강기능식품, 알레르기를 함께 정리합니다.",
    },
    {
      numberLabel: "05",
      title: "병력·시술력",
      text: "기존 질환과 과거 수술·시술 이력을 상담에 알려줍니다.",
    },
    {
      numberLabel: "06",
      title: "개인별 검사",
      text: "필요한 검사는 개인 상태에 따라 달라질 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 전 검사, 무엇을 확인하나요?",
    description:
      "임신중절수술 전 검사에서 확인할 항목과 상담 전에 정리할 정보, 결과 설명 시 물어볼 질문을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 전 검사",
      "임신중절수술 검사",
      "중절수술 전 검사",
      "임신중절수술 상담",
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
    {
      label: "연세365산부인과의원 비용 안내",
      href: YEONSEI365_LINKS.cost,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "pre-exam-prepare",
      order: 1,
      numberLabel: "01",
      heading: "상담 전에 정리할 정보는 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "마지막 생리 시작일, 생리주기, 임신테스트 확인 시점, 현재 증상, 복용 약·건강기능식품, 알레르기, 기존 질환과 과거 시술·수술 이력을 정리해 두면 상담에 도움이 됩니다.",
      paragraphs: [
        "미리 적어 두면 상담 시간을 더 효율적으로 쓸 수 있습니다. 기억에만 의존하기보다 날짜와 제품명을 가능한 구체적으로 준비하는 편이 좋습니다.",
      ],
      bullets: [
        "마지막 생리 시작일",
        "평소 생리주기",
        "임신테스트 확인 시점",
        "복통·출혈·어지럼증 등 현재 증상",
        "복용 중인 약",
        "건강기능식품",
        "약물 알레르기",
        "기존 질환",
        "과거 수술·시술 이력",
      ],
    },
    {
      id: "pre-exam-gestational-age",
      order: 2,
      numberLabel: "02",
      heading: "임신 주수와 상태는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "마지막 생리일은 예상 주수를 가늠하는 참고 자료이며, 실제 평가는 진료와 필요한 검사를 통해 이루어집니다.",
      paragraphs: [
        "생리일만으로 현재 상태를 단정하기는 어렵습니다. 생리주기가 불규칙하거나 증상이 있는 경우에는 예상과 실제 확인 결과에 차이가 날 수 있습니다.",
        "초음파를 포함한 특정 검사가 모든 사람에게 무조건 필수라고 단정할 수는 없습니다. 개인 상태와 증상에 따라 의료진이 필요한 평가를 결정합니다.",
      ],
    },
    {
      id: "pre-exam-questions",
      order: 3,
      numberLabel: "03",
      heading: "검사 결과를 설명받을 때 확인할 질문은?",
      layout: "checklist",
      directAnswer:
        "검사 이유, 결과의 의미, 추가 확인 필요 여부, 진료 방법 결정에 미치는 영향, 추적 확인과 비용 포함 여부를 질문해 두면 이해가 명확해집니다.",
      paragraphs: [
        "결과 수치만 듣기보다, 그 정보가 다음 결정에 어떤 의미가 있는지 확인하는 질문이 도움이 됩니다.",
      ],
      bullets: [
        "이 검사를 시행하는 이유는 무엇인가요?",
        "결과가 무엇을 의미하나요?",
        "추가 확인이 필요한가요?",
        "진료 방법 결정에 어떤 영향을 주나요?",
        "재방문이나 추적 확인이 필요한가요?",
        "이번 비용에 포함되는 검사인가요?",
      ],
    },
    {
      id: "pre-exam-cost",
      order: 4,
      numberLabel: "04",
      heading: "상담 전에 비용도 함께 확인할 항목",
      layout: "prose",
      directAnswer:
        "검사비와 진료비가 어떻게 나뉘는지, 추가 항목이 있는지 상담에서 확인하는 것이 중요합니다.",
      paragraphs: [
        "검사 종류와 포함 범위는 견적마다 다를 수 있습니다. 이 글에서는 금액을 새로 제시하지 않으며, 검사·진료 비용 구성의 기준은 임신중절수술 비용 안내에서 따로 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "임신중절수술 비용 안내 보기",
    },
    {
      id: "pre-exam-warning",
      order: 5,
      numberLabel: "05",
      heading: "진료를 미루지 않고 의료진에게 확인해야 할 증상",
      layout: "callout",
      directAnswer:
        "심한 통증, 많은 출혈, 실신이나 심한 어지럼처럼 평소와 다른 증상이 있으면 의료기관 평가가 필요할 수 있습니다.",
      paragraphs: [
        "특정 증상을 스스로 진단하거나 원인을 단정할 수는 없습니다. 걱정되는 변화가 있다면 인터넷 정보만으로 기다리기보다 의료진에게 확인하는 것이 필요합니다.",
        "수술 전후 생활 관리와 이상 증상 확인의 일반적인 관점은 수술 전후 주의사항 안내에서도 살펴볼 수 있습니다.",
      ],
      callout:
        "심한 통증, 많은 출혈, 실신·심한 어지럼 등 우려되는 증상이 있으면 의료기관에서 평가받는 것이 필요할 수 있습니다.",
      relatedHref: ROUTES.precautions,
      relatedLabel: "수술 전후 주의사항 안내 보기",
    },
  ],
};
