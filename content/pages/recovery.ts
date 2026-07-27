import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const RECOVERY_PAGE: ContentPage = {
  id: "recovery",
  order: 2,
  numberLabel: "02",
  slug: "임신중절수술-회복기간",
  href: ROUTES.recovery,
  navLabel: "임신중절수술 회복기간",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 회복기간",

  heading: "임신중절수술 후 회복은 얼마나 걸릴까요?",
  intro: [
    "임신중절수술 후 회복 속도는 임신 주수, 진료 방법, 기존 건강 상태와 생활 방식에 따라 달라질 수 있습니다. 다른 사람의 일정과 동일하게 맞추기보다 자신의 경과와 의료진 안내를 기준으로 일상 복귀 시점을 확인해야 합니다.",
    "수술 직후의 출혈·통증, 샤워·운동·성관계 재개, 경과 관찰은 단계적으로 확인하는 편이 안전합니다. 특정 기간 안에 모든 회복이 끝난다고 보장할 수는 없습니다.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-27",
  faqIds: [
    "recovery-01",
    "recovery-02",
    "recovery-03",
    "recovery-04",
    "recovery-05",
  ],
  faqTitle: "임신중절수술 회복기간 자주 묻는 질문",
  conclusion: [
    "임신중절수술 회복기간은 개인차가 큽니다. 임신 주수, 진료 방법, 기존 건강 상태와 생활 환경에 따라 체감 속도가 달라질 수 있으므로, 다른 사람의 일정과 비교하기보다 의료진 안내와 본인 경과를 기준으로 삼으세요.",
    "샤워·운동·업무 복귀는 허용 시점과 출혈·통증 정도를 함께 확인한 뒤 단계적으로 재개하고, 평소와 다른 출혈이나 심한 통증·고열이 있으면 안내받은 연락 방법으로 확인하세요. 이 페이지는 일반 정보 안내입니다.",
  ],
  thumbnail: TOPIC_MEDIA.recovery.thumbnail,
  topImages: [TOPIC_MEDIA.recovery.thumbnail],
  bodyImage: TOPIC_MEDIA.recovery.secondaryImage,
  heroImage: TOPIC_MEDIA.recovery.thumbnail,
  secondaryImage: TOPIC_MEDIA.recovery.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.recovery.secondaryImage,
  accentColor: TOPIC_MEDIA.recovery.accentColor,
  accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "초기 휴식", text: "수술 직후에는 안내받은 휴식과 처방을 우선합니다." },
    { numberLabel: "02", title: "출혈·통증 관찰", text: "출혈과 통증 변화를 관찰하고 평소와 다르면 문의합니다." },
    { numberLabel: "03", title: "일상 복귀", text: "샤워·외출·업무 복귀 시점은 개인차와 안내에 따릅니다." },
    { numberLabel: "04", title: "운동·생활관리", text: "무리한 운동과 생활 재개 시점은 의료진 안내를 따릅니다." },
    { numberLabel: "05", title: "이상 증상", text: "심한 통증·고열·과도한 출혈이 있으면 바로 연락합니다." },
  ],
  seo: {
    title: "임신중절수술 회복기간",
    description:
      "임신중절수술 후 회복 과정과 출혈·통증 관찰, 생활 관리 및 진료 확인이 필요한 사항을 단계별로 안내합니다.",
    keywords: [
      "임신중절수술 회복기간",
      "임신중절수술 후 회복",
      "임신중절수술 생활관리",
      "임신중절수술 후 출혈",
      "임신중절수술 후 통증",
    ],
    ogImage: TOPIC_MEDIA.recovery.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "recovery-individual",
      order: 1,
      numberLabel: "01",
      heading: "임신중절수술 회복 일정에는 개인차가 있을까요?",
      layout: "info-grid",
      directAnswer:
        "회복 속도는 임신 주수, 진료 방법, 기존 질환, 복용 약물과 생활 환경 등에 따라 달라질 수 있습니다. 특정 기간에 모든 회복이 끝난다고 단정하기는 어렵습니다.",
      paragraphs: [
        "임신 주수가 진행될수록 회복 과정에서 확인해야 할 항목이 달라질 수 있습니다. 당뇨·고혈압 등 전신 질환, 과거 산부인과 수술 이력, 사용 중인 약물도 상담 시 함께 알리는 것이 좋습니다.",
        "같은 진료 방법이라도 몸 상태와 회복 관리 준수 여부에 따라 체감 속도가 달라질 수 있습니다.",
      ],
      infoBlocks: [
        {
          label: "임신 주수",
          text: "주수에 따라 회복 과정과 확인 항목이 달라질 수 있음",
        },
        {
          label: "진료 방법",
          text: "적용된 방법과 개인 상태에 따라 회복 감각이 달라질 수 있음",
        },
        {
          label: "기존 건강",
          text: "전신·산부인과 질환과 복용 약물이 회복에 영향을 줄 수 있음",
        },
        {
          label: "생활·관리",
          text: "휴식·위생·약 복용 준수 여부도 함께 확인",
        },
      ],
    },
    {
      id: "recovery-immediate",
      order: 2,
      numberLabel: "02",
      heading: "수술 직후에는 어떤 변화가 나타날 수 있나요?",
      layout: "timeline",
      directAnswer:
        "수술 직후에는 하복부 통증, 출혈, 어지럼증, 피로감 등이 나타날 수 있으며, 정도와 지속 기간은 개인차가 있습니다.",
      paragraphs: [
        "당일에는 휴식을 취하고 안내받은 자세와 이동 방법을 따르는 경우가 많습니다. 시간이 지나며 출혈과 통증이 줄어드는 사례가 많지만, 모든 사람에게 같은 경험이 나타나지는 않습니다.",
        "처방 약 복용법, 위생 관리, 무리한 활동 피하기를 지키는 것이 초기 관리의 기본입니다. 정상·비정상을 스스로 단정하기보다, 안내 범위와 다른 변화가 있으면 재진에서 확인하세요.",
      ],
      timeline: [
        {
          label: "당일",
          text: "하복부 통증·출혈·피로감, 휴식과 이동 안내 확인",
        },
        {
          label: "초기",
          text: "출혈량·통증 변화 관찰, 처방 약 복용",
        },
        {
          label: "회복 과정",
          text: "일상 활동 재개는 단계적으로 확인",
        },
        {
          label: "확인 시점",
          text: "안내와 다른 변화가 있으면 재진에서 확인",
        },
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "임신중절수술 주의사항 자세히 보기",
    },
    {
      id: "recovery-activity",
      order: 3,
      numberLabel: "03",
      heading: "샤워·운동·업무는 언제부터 확인해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "샤워, 운동, 성관계, 음주, 업무 복귀 시점은 개인 경과와 의료진 안내에 따라 달라질 수 있습니다. 날짜만 기억하기보다 출혈·통증 정도를 함께 확인하세요.",
      paragraphs: [
        "목욕·사우나·수영처럼 물·고온 노출이 긴 활동은 허용 시점까지 미루는 경우가 많습니다. 샤워 방법과 위생 관리 안내도 기관마다 다를 수 있습니다.",
        "업무 복귀는 업무 강도와 이동·서기 시간을 고려해 단계적으로 조절하는 편이 안내될 수 있습니다.",
      ],
      table: {
        caption: "생활 활동 재개 시 확인 포인트",
        mobileMode: "cards",
        columns: [
          { key: "activity", label: "활동" },
          { key: "point", label: "확인 포인트" },
        ],
        rows: [
          {
            activity: "샤워·위생",
            point: "허용 시점과 위생 관리 방법을 안내에 따라 확인",
          },
          {
            activity: "운동",
            point: "강도와 복부·골반 부담을 고려해 단계적으로 시작",
          },
          {
            activity: "성관계",
            point: "회복 안내에 따라 허용 시점 확인",
          },
          {
            activity: "음주",
            point: "약 복용과 회복 상태를 고려해 안내 확인",
          },
          {
            activity: "업무",
            point: "업무 강도와 이동·서기 시간에 따라 조절",
          },
        ],
      },
    },
    {
      id: "recovery-urgent",
      order: 4,
      numberLabel: "04",
      heading: "회복 중 어떤 증상은 의료진에게 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "평소와 다른 많은 출혈, 심해지는 통증, 고열, 어지럼증·실신, 악취가 나는 분비물처럼 안내받은 회복 과정과 다른 증상은 지체 없이 확인하는 것이 좋습니다.",
      paragraphs: [
        "가벼운 출혈·통증과 구분해서 안내받는 것이 중요합니다. 응급·야간 연락 방법을 미리 저장해 두면 증상 변화 시 판단이 수월합니다.",
        "회복이 더뎌 느껴져도 모든 경우가 문제를 의미하지는 않지만, 불안한 변화는 안내받은 절차대로 확인하세요. 정기 경과 관찰에서는 출혈·통증 변화와 생활 재개 범위도 함께 점검할 수 있습니다.",
      ],
      bullets: [
        "평소와 다른 많은 출혈",
        "심해지는 하복부 통증",
        "고열·오한",
        "어지럼증·실신",
        "악취가 나는 분비물",
        "안내받은 회복 과정과 다른 변화",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "임신중절수술 주의사항 자세히 보기",
    },
    {
      id: "recovery-followup",
      order: 5,
      numberLabel: "05",
      heading: "사후진료와 경과 확인은 왜 필요한가요?",
      layout: "steps",
      directAnswer:
        "사후진료는 출혈·통피·자궁 회복 상태를 확인하고, 이상 징후를 조기에 점검하는 데 도움이 될 수 있습니다.",
      paragraphs: [
        "재방문 일정과 연락 방법이 명확한지, 추가 검사가 필요한 경우 어떤 안내가 있는지 미리 확인해 두면 회복에 집중하기 쉽습니다.",
        "경과 확인을 건너뛰지 않고 안내받은 일정을 따르는 것이 안전합니다.",
      ],
      steps: [
        {
          label: "01 재방문 일정",
          text: "사후진료 일정과 확인 항목을 미리 확인합니다.",
        },
        {
          label: "02 증상 기록",
          text: "출혈·통증 변화를 간단히 기록해 두면 상담에 도움이 됩니다.",
        },
        {
          label: "03 연락 방법",
          text: "이상 증상 시 연락·방문 절차를 저장합니다.",
        },
        {
          label: "04 생활 재개",
          text: "경과 확인 후 허용 범위에서 단계적으로 일상을 재개합니다.",
        },
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술 병원선택 기준 보기",
    },
  ],
};
