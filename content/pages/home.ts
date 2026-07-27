import { HOME_FEATURE_IMAGE, TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type {
  ArticleSection,
  ContentCard,
  HomeIndexItem,
  HomeIntro,
  PageSeo,
} from "@/types/content";

export const HOME_SEO: PageSeo = {
  title: "임신중절수술",
  description:
    "연세365산부인과의원이 안내하는 임신중절수술 정보입니다. 가능 시기, 비용, 회복기간, 주의사항, 병원 선택 기준과 자주 묻는 질문을 확인할 수 있습니다.",
  keywords: [
    "임신중절수술",
    "임신중절수술 비용",
    "임신중절수술 회복기간",
    "임신중절수술 주의사항",
    "임신중절수술 병원 선택",
    "임신중절수술 후기",
    "임신중절수술 FAQ",
  ],
  ogImage: "/images/og/임신중절수술-kakao.png",
  socialImage: "/images/og/임신중절수술-kakao.png",
  category: SITE.categoryLabel,
};

export const HOME_INTRO: HomeIntro = {
  h1: "임신중절수술",
  subtitle:
    "임신 주수와 현재 상태 확인부터 비용, 회복기간, 주의사항, 병원 선택 기준까지 상담 전에 필요한 내용을 정리했습니다.",
  heading: "임신중절수술이란?",
  featureImage: HOME_FEATURE_IMAGE,
  paragraphs: [
    "임신중절수술은 임신을 지속하기 어려운 상황에서 산부인과 의료진의 진찰과 상담을 통해 진행 여부와 적절한 진료 과정을 결정하는 의료 절차입니다. 임신 주수와 현재 건강 상태, 복용 중인 약물과 과거 병력에 따라 필요한 검사와 상담 내용이 달라질 수 있습니다.",
    "임신 중절수술 가능 여부나 비용만 비교하기보다 현재 임신 상태, 검사 범위, 회복 과정, 수술 후 이상 증상에 대응할 수 있는 진료 체계까지 함께 확인하는 것이 중요합니다.",
  ],
  summary:
    "상담 전에는 임신 상태 확인, 비용 구성, 회복 관리, 사후진료 가능 여부를 함께 점검하는 것이 도움이 됩니다.",
  keySummary: [
    {
      numberLabel: "01",
      title: "임신 상태 확인",
      text: "임신 주수와 현재 임신 상태를 먼저 확인해야 합니다.",
    },
    {
      numberLabel: "02",
      title: "개인별 진료",
      text: "개인 상태에 따라 검사와 진료 과정이 달라질 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "비용 구성",
      text: "비용은 주수·검사·마취·진료 범위에 따라 달라질 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "회복 관찰",
      text: "회복 중에는 출혈과 통증 등 몸의 변화를 관찰해야 합니다.",
    },
    {
      numberLabel: "05",
      title: "사후관리",
      text: "상담부터 사후관리까지 가능한 의료기관인지 확인해야 합니다.",
    },
  ],
};

export const HOME_EXAM_NOTICE =
  "본 콘텐츠는 일반적인 건강정보 제공을 목적으로 하며 개인의 진단이나 치료를 대신하지 않습니다. 임신 상태와 건강 조건에 따라 의료진의 진찰과 상담이 필요합니다.";

export const HOME_CONCLUSION = [
  "임신중절수술 상담 전에는 임신 상태 확인, 비용 구성, 회복 과정, 주의사항과 병원 선택 기준을 함께 살펴보는 것이 도움이 됩니다. 총액이나 후기만으로 결정하기보다 검사 결과와 의료진 설명을 기준으로 판단하세요.",
  "개인 상태와 임신 주수에 따라 필요한 과정이 달라질 수 있으므로, 최종 확인은 산부인과 진찰과 상담에서 이루어지는 것이 안전합니다.",
];

export const HOME_INDEX: HomeIndexItem[] = [
  {
    order: 1,
    numberLabel: "01",
    title: "임신중절수술 비용",
    description: "비용이 달라지는 기준과 상담 전 확인사항",
    href: ROUTES.cost,
  },
  {
    order: 2,
    numberLabel: "02",
    title: "임신중절수술 회복기간",
    description: "수술 후 회복 과정과 생활 관리",
    href: ROUTES.recovery,
  },
  {
    order: 3,
    numberLabel: "03",
    title: "임신중절수술 주의사항",
    description: "수술 전후 확인해야 할 주의점",
    href: ROUTES.precautions,
  },
  {
    order: 4,
    numberLabel: "04",
    title: "임신중절수술 병원 선택",
    description: "의료진·검사·사후관리 확인 기준",
    href: ROUTES.hospital,
  },
  {
    order: 5,
    numberLabel: "05",
    title: "임신중절수술 후기",
    description: "후기를 확인할 때 주의할 부분",
    href: ROUTES.reviews,
  },
  {
    order: 6,
    numberLabel: "06",
    title: "임신중절수술 FAQ",
    description: "상담 전 자주 묻는 질문 정리",
    href: ROUTES.faq,
  },
];

export const HOME_TOC = [
  {
    id: "home-meaning",
    numberLabel: "01",
    label: "임신중절수술이란?",
    description: "뜻과 개인별 확인이 필요한 이유",
  },
  {
    id: "home-checklist",
    numberLabel: "02",
    label: "상담 전 무엇을 준비해야 하나요?",
    description: "생리일·약·병력 체크리스트",
  },
  {
    id: "home-timing",
    numberLabel: "03",
    label: "임신 주수와 가능 시기는 어떻게 확인하나요?",
    description: "검사와 상담 단계",
  },
  {
    id: "home-cost",
    numberLabel: "04",
    label: "비용은 어떤 기준으로 달라지나요?",
    description: "주수·검사·마취·사후진료",
  },
  {
    id: "home-recovery",
    numberLabel: "05",
    label: "회복기간에는 무엇을 확인해야 하나요?",
    description: "회복 흐름과 생활관리",
  },
  {
    id: "home-precautions",
    numberLabel: "06",
    label: "수술 전후 주의사항은 무엇인가요?",
    description: "준비와 회복 중 주의점",
  },
  {
    id: "home-hospital",
    numberLabel: "07",
    label: "병원은 어떤 기준으로 선택해야 하나요?",
    description: "상담·검사·사후관리",
  },
  {
    id: "home-reviews",
    numberLabel: "08",
    label: "후기는 어떻게 확인해야 하나요?",
    description: "참고 기준과 한계",
  },
];

export const HOME_SECTIONS: ArticleSection[] = [
  {
    id: "home-meaning",
    order: 1,
    numberLabel: "01",
    heading: "임신중절수술이란?",
    layout: "prose",
    directAnswer:
      "임신중절수술은 임신을 지속하기 어려운 상황에서 산부인과 의료진의 진찰과 상담을 통해 진행 여부와 적절한 진료 과정을 결정하는 의료 절차입니다.",
    paragraphs: [
      "임신 주수, 현재 증상, 과거 질환, 수술 이력과 복용 중인 약물에 따라 필요한 검사와 상담 내용이 달라질 수 있으므로 개인별 확인이 필요합니다.",
      "가능 여부만 묻기보다 검사 범위, 회복 과정, 이상 증상 대응까지 함께 확인할 수 있는 진료 체계인지도 살펴보는 것이 도움이 됩니다.",
    ],
    relatedHref: ROUTES.precautions,
    relatedLabel: "임신중절수술 주의사항 자세히 보기",
  },
  {
    id: "home-checklist",
    order: 2,
    numberLabel: "02",
    heading: "상담 전 무엇을 준비해야 하나요?",
    layout: "checklist",
    directAnswer:
      "마지막 생리 시작일, 생리주기, 임신테스트 결과, 현재 증상, 복용 약과 기존 질환을 미리 정리해 두면 상담을 더 정확하게 진행할 수 있습니다.",
    paragraphs: [
      "검사비·마취비·사후진료 포함 여부를 구분해 질문해 두면 비용 비교에도 도움이 됩니다.",
    ],
    bullets: [
      "마지막 생리 시작일",
      "생리주기",
      "임신테스트 결과와 확인 날짜",
      "복통·출혈·어지럼증 여부",
      "복용 중인 약과 건강기능식품",
      "기존 질환·수술 이력·알레르기",
      "검사비·마취비·사후진료 포함 여부",
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "임신중절수술 병원 선택 자세히 보기",
  },
  {
    id: "home-timing",
    order: 3,
    numberLabel: "03",
    heading: "임신 주수와 가능 시기는 어떻게 확인하나요?",
    layout: "steps",
    directAnswer:
      "가능 시기는 마지막 생리일만으로 확정하기 어렵고, 초음파 등 검사를 통해 임신 상태를 확인한 뒤 의료진과 상담하는 과정이 필요합니다.",
    paragraphs: [
      "마지막 생리일 추정만으로 주수를 단정하면 오차가 생길 수 있어, 검사 결과를 기준으로 적용 가능한 진료 방법을 확인하는 편이 안전합니다.",
    ],
    steps: [
      {
        label: "01 마지막 생리일 확인",
        text: "생리 시작일과 주기를 정리해 예상 임신 주수를 파악합니다.",
      },
      {
        label: "02 예상 주수 계산",
        text: "생리일 기준으로 예상 주수를 정리하되, 검사로 최종 확인합니다.",
      },
      {
        label: "03 진찰 및 검사",
        text: "초음파 등 검사로 임신 상태와 실제 임신 주수를 확인합니다.",
      },
      {
        label: "04 의료진 상담",
        text: "검사 결과를 바탕으로 가능 여부와 적용 가능한 진료 방법을 설명받습니다.",
      },
      {
        label: "05 개인별 가능 여부 확인",
        text: "회복 중 주의점과 이상 증상 발생 시 연락 방법을 미리 확인합니다.",
      },
    ],
    relatedHref: ROUTES.cost,
    relatedLabel: "임신중절수술 비용 자세히 보기",
  },
  {
    id: "home-cost",
    order: 4,
    numberLabel: "04",
    heading: "비용은 어떤 기준으로 달라지나요?",
    layout: "responsive-table",
    directAnswer:
      "비용은 임신 주수, 검사 범위, 마취 방식, 진료 포함 항목과 사후진료 구성에 따라 달라질 수 있습니다. 전국 공통의 확정 금액은 없습니다.",
    paragraphs: [
      "같은 명칭의 진료라도 포함 항목이 다르면 총액만으로 비교하기 어렵습니다. 견적에서 검사비·마취비·진료비·사후진료 비용을 구분해 확인하는 것이 좋습니다.",
    ],
    table: {
      caption: "임신중절수술 비용 구성 요소",
      mobileMode: "cards",
      columns: [
        { key: "item", label: "항목" },
        { key: "desc", label: "확인 포인트" },
      ],
      rows: [
        {
          item: "임신 주수",
          desc: "임신 상태에 따라 필요한 검사와 진료 과정이 달라질 수 있습니다.",
        },
        {
          item: "검사 범위",
          desc: "기본·추가 검사 포함 여부에 따라 구성이 달라질 수 있습니다.",
        },
        {
          item: "마취 방식",
          desc: "마취 종류와 당일 진료 범위에 따라 견적이 달라질 수 있습니다.",
        },
        {
          item: "진료 과정",
          desc: "적용 가능한 진료 방법과 추가 처치 여부에 따라 달라질 수 있습니다.",
        },
        {
          item: "약제·추가 처치",
          desc: "처방 약과 추가 처치 포함 여부를 견적에서 확인합니다.",
        },
        {
          item: "사후진료",
          desc: "경과 확인, 약제, 이상 증상 대응 포함 여부를 함께 확인합니다.",
        },
      ],
    },
    relatedHref: ROUTES.cost,
    relatedLabel: "임신중절수술 비용 자세히 보기",
  },
  {
    id: "home-recovery",
    order: 5,
    numberLabel: "05",
    heading: "회복기간에는 무엇을 확인해야 하나요?",
    layout: "timeline",
    directAnswer:
      "회복 속도와 일상 복귀 시점은 개인차와 진료 방법, 몸 상태에 따라 달라질 수 있으므로 모든 사람에게 동일한 날짜를 단정할 수 없습니다.",
    paragraphs: [
      "출혈·통증 변화를 관찰하고, 세안·샤워·운동·성관계 등 생활 재개 시점은 의료진 안내를 따르는 것이 안전합니다.",
    ],
    timeline: [
      {
        label: "수술 당일",
        text: "휴식과 처방 안내를 따르며, 출혈·통증 변화를 확인합니다.",
      },
      {
        label: "초기 회복",
        text: "일상 활동은 단계적으로 재개하고, 무리한 운동은 제한될 수 있습니다.",
      },
      {
        label: "일상 복귀",
        text: "샤워·외출·업무 복귀 시점은 개인차와 의료진 안내에 따릅니다.",
      },
      {
        label: "사후 확인",
        text: "사후진료 일정이 있다면 경과와 이상 증상 여부를 점검합니다.",
      },
    ],
    relatedHref: ROUTES.recovery,
    relatedLabel: "임신중절수술 회복기간 자세히 보기",
  },
  {
    id: "home-precautions",
    order: 6,
    numberLabel: "06",
    heading: "수술 전후 주의사항은 무엇인가요?",
    layout: "comparison",
    directAnswer:
      "수술 전에는 복용 약과 병력을 알리고, 수술 후에는 출혈·통증 변화와 생활 제한 안내를 확인하는 것이 중요합니다.",
    paragraphs: [
      "자가 판단으로 약물을 구매하거나 복용하지 말고, 이상 증상이 있으면 안내받은 연락처로 바로 문의하세요.",
    ],
    comparison: {
      left: {
        label: "수술 전",
        text: "복용약·병력·알레르기 고지, 검사와 금식 여부 확인, 귀가·동행 계획 준비",
      },
      right: {
        label: "수술 후",
        text: "충분한 휴식, 무리한 운동 피하기, 출혈·통증 관찰, 이상 증상 시 의료기관 문의",
      },
    },
    relatedHref: ROUTES.precautions,
    relatedLabel: "임신중절수술 주의사항 자세히 보기",
  },
  {
    id: "home-hospital",
    order: 7,
    numberLabel: "07",
    heading: "병원은 어떤 기준으로 선택해야 하나요?",
    layout: "checklist",
    directAnswer:
      "의료진 설명 명확성, 검사 범위, 비용 안내 투명성, 사후관리와 이상 증상 시 연락 방법을 기준으로 비교하는 편이 도움이 됩니다.",
    paragraphs: [
      "상담부터 경과 확인까지 이어지는지, 질문할 시간이 충분한지를 함께 확인하세요. 광고 문구나 후기만으로 결정하기보다 본인 상태에 맞는 설명을 직접 듣는 과정이 중요합니다.",
    ],
    bullets: [
      "산부인과 의료진의 직접 상담 여부",
      "임신 상태 확인 검사 가능 여부",
      "비용 포함 항목 명확한 안내 여부",
      "개인정보 보호 안내 여부",
      "사후진료와 이상 증상 연락 가능 여부",
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "임신중절수술 병원 선택 자세히 보기",
  },
  {
    id: "home-reviews",
    order: 8,
    numberLabel: "08",
    heading: "후기는 어떻게 확인해야 하나요?",
    layout: "info-blocks",
    directAnswer:
      "후기는 참고 자료일 뿐이며, 작성자와 본인의 임신 주수·건강 상태·진료 과정이 다르면 같은 경험이 반복된다고 보기 어렵습니다.",
    paragraphs: [
      "비용·회복·주의사항이 구체적으로 적혔는지, 광고성·과장된 결과 표현은 없는지 구분하는 편이 안전합니다.",
    ],
    infoBlocks: [
      {
        label: "검사와 상담 과정",
        text: "어떤 검사와 설명이 있었는지 과정이 구체적으로 적혔는지 확인합니다.",
      },
      {
        label: "비용 설명의 명확성",
        text: "포함·제외 항목이 구분되어 있는지, 총액만 강조하지는 않는지 살펴봅니다.",
      },
      {
        label: "사후관리 경험",
        text: "경과 확인과 이상 증상 대응 경험이 함께 적혔는지 참고합니다.",
      },
    ],
    relatedHref: ROUTES.reviews,
    relatedLabel: "임신중절수술 후기 자세히 보기",
  },
];

export const HOME_FAQ_IDS = [
  "common-01",
  "common-02",
  "common-03",
  "common-04",
  "common-05",
  "common-06",
  "common-07",
  "common-08",
  "common-09",
  "common-10",
  "common-11",
  "common-12",
] as const;

export const CARD_PUBLISHED_AT = "2026-07-27";

export const CONTENT_CARDS: ContentCard[] = [
  {
    id: "cost",
    order: 1,
    numberLabel: "01",
    href: ROUTES.cost,
    slug: "임신중절수술-비용",
    title: "임신중절수술 비용",
    cardTitle: "임신중절수술 비용",
    shortTitle: "임신중절수술 비용",
    cardMetaLabel: "수술비용",
    iconKey: "cost",
    description: "비용이 달라지는 기준과 상담 전 확인사항",
    cardDescription:
      "검사 범위와 마취 방법, 수술 및 사후관리 포함 항목을 구분해 비용이 달라지는 기준을 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.cost.mobileCardDescription,
    accent: "orange",
    accentColor: TOPIC_MEDIA.cost.accentColor,
    accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05", "cost-06"],
    image: TOPIC_MEDIA.cost.thumbnail,
    heroImage: TOPIC_MEDIA.cost.thumbnail,
    inlineImage: TOPIC_MEDIA.cost.thumbnail,
  },
  {
    id: "recovery",
    order: 2,
    numberLabel: "02",
    href: ROUTES.recovery,
    slug: "임신중절수술-회복기간",
    title: "임신중절수술 회복기간",
    cardTitle: "임신중절수술 회복기간",
    shortTitle: "임신중절수술 회복기간",
    cardMetaLabel: "회복기간",
    iconKey: "recovery",
    description: "수술 후 회복 과정과 생활 관리",
    cardDescription:
      "수술 직후부터 일상 복귀까지 회복 과정과 출혈·통증 관찰, 생활관리 기준을 순서대로 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.recovery.mobileCardDescription,
    accent: "pink",
    accentColor: TOPIC_MEDIA.recovery.accentColor,
    accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "recovery-01",
      "recovery-02",
      "recovery-03",
      "recovery-04",
      "recovery-05",
    ],
    image: TOPIC_MEDIA.recovery.thumbnail,
    heroImage: TOPIC_MEDIA.recovery.thumbnail,
    inlineImage: TOPIC_MEDIA.recovery.thumbnail,
  },
  {
    id: "precautions",
    order: 3,
    numberLabel: "03",
    href: ROUTES.precautions,
    slug: "임신중절수술-주의사항",
    title: "임신중절수술 주의사항",
    cardTitle: "임신중절수술 주의사항",
    shortTitle: "임신중절수술 주의사항",
    cardMetaLabel: "주의사항",
    iconKey: "precautions",
    description: "수술 전후 확인해야 할 주의점",
    cardDescription:
      "수술 전 준비부터 회복 중 생활 관리까지 놓치기 쉬운 주의점을 항목별로 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.precautions.mobileCardDescription,
    accent: "lime",
    accentColor: TOPIC_MEDIA.precautions.accentColor,
    accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "caution-01",
      "caution-02",
      "caution-03",
      "caution-04",
      "caution-05",
    ],
    image: TOPIC_MEDIA.precautions.thumbnail,
    heroImage: TOPIC_MEDIA.precautions.thumbnail,
    inlineImage: TOPIC_MEDIA.precautions.thumbnail,
  },
  {
    id: "hospital",
    order: 4,
    numberLabel: "04",
    href: ROUTES.hospital,
    slug: "임신중절수술-병원-선택",
    title: "임신중절수술 병원 선택",
    cardTitle: "임신중절수술 병원 선택",
    shortTitle: "임신중절수술 병원 선택",
    cardMetaLabel: "병원선택",
    iconKey: "hospital",
    description: "의료진·검사·사후관리 확인 기준",
    cardDescription:
      "의료진 상담, 검사 체계, 비용 설명, 개인정보 보호와 사후관리를 비교할 때 확인할 기준을 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.hospital.mobileCardDescription,
    accent: "blue",
    accentColor: TOPIC_MEDIA.hospital.accentColor,
    accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "hospital-01",
      "hospital-02",
      "hospital-03",
      "hospital-04",
      "hospital-05",
    ],
    image: TOPIC_MEDIA.hospital.thumbnail,
    heroImage: TOPIC_MEDIA.hospital.thumbnail,
    inlineImage: TOPIC_MEDIA.hospital.thumbnail,
  },
  {
    id: "reviews",
    order: 5,
    numberLabel: "05",
    href: ROUTES.reviews,
    slug: "임신중절수술-후기",
    title: "임신중절수술 후기",
    cardTitle: "임신중절수술 후기",
    shortTitle: "임신중절수술 후기",
    cardMetaLabel: "후기",
    iconKey: "reviews",
    description: "후기를 확인할 때 주의할 부분",
    cardDescription:
      "후기는 참고 자료일 뿐이며, 광고성 표현과 개인차의 한계를 구분해 읽는 방법을 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.reviews.mobileCardDescription,
    accent: "cyan",
    accentColor: TOPIC_MEDIA.reviews.accentColor,
    accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "review-01",
      "review-02",
      "review-03",
      "review-04",
      "review-05",
    ],
    image: TOPIC_MEDIA.reviews.thumbnail,
    heroImage: TOPIC_MEDIA.reviews.thumbnail,
    inlineImage: TOPIC_MEDIA.reviews.thumbnail,
  },
  {
    id: "faq",
    order: 6,
    numberLabel: "06",
    href: ROUTES.faq,
    slug: "임신중절수술-자주-묻는-질문",
    title: "임신중절수술 FAQ",
    cardTitle: "임신중절수술 FAQ",
    shortTitle: "임신중절수술 FAQ",
    cardMetaLabel: "FAQ",
    iconKey: "faq",
    description: "상담 전 자주 묻는 질문 정리",
    cardDescription:
      "가능 시기, 비용, 회복, 합법 확인, 약물중절 상담 등 상담 전 자주 묻는 질문을 주제별로 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.faq.mobileCardDescription,
    accent: "neutral",
    accentColor: TOPIC_MEDIA.faq.accentColor,
    accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [...HOME_FAQ_IDS],
    image: TOPIC_MEDIA.faq.thumbnail,
    heroImage: TOPIC_MEDIA.faq.thumbnail,
    inlineImage: TOPIC_MEDIA.faq.thumbnail,
  },
];
