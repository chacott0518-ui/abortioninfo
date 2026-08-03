import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_PAGE: ContentPage = {
  id: "hospital",
  order: 4,
  numberLabel: "04",
  slug: "임신중절수술-병원-선택",
  href: ROUTES.hospital,
  navLabel: "임신중절수술 병원 선택",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 병원 선택",

  heading: "임신중절수술 병원은 어떤 기준으로 선택해야 할까요?",
  intro: [
    "임신중절수술 병원선택은 특정 기관을 추천하는 과정이 아니라, 검사 체계·상담 설명·비용 구성·사후진료를 비교하는 과정입니다. 같은 진료 명칭이라도 설명의 구체성과 관리 범위가 다를 수 있습니다.",
    "후기나 광고 문구만으로 판단하기보다, 본인 임신 상태에 맞는 검사와 결과 설명, 적용 가능한 방법의 특성과 한계, 재방문·이상 증상 대응까지 질문해 두는 편이 안전합니다.",
  ],
  hubContextLink: {
    before: "병원 선택 전 가능 시기와 비용, 회복 기준을 정리한 ",
    anchor: "임신중절수술 종합 정보",
    after: "를 먼저 확인하세요.",
  },
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-27",
  faqIds: [
    "hospital-01",
    "hospital-02",
    "hospital-03",
    "hospital-04",
    "hospital-05",
  ],
  faqTitle: "임신중절수술 병원선택 자주 묻는 질문",
  conclusion: [
    "임신중절수술 병원선택은 검사 항목과 결과 설명, 상담의 균형, 비용의 포함·추가 구분, 경과 확인과 연락 체계를 함께 비교하는 것이 도움이 됩니다.",
    "특정 병원을 최고라고 단정할 수 없으며, 최종 판단은 검사와 상담을 통해 이루어져야 합니다. 이 페이지는 비교 기준을 안내하는 일반 정보입니다.",
  ],
  thumbnail: TOPIC_MEDIA.hospital.thumbnail,
  topImages: [TOPIC_MEDIA.hospital.thumbnail],
  bodyImage: TOPIC_MEDIA.hospital.secondaryImage,
  heroImage: TOPIC_MEDIA.hospital.thumbnail,
  secondaryImage: TOPIC_MEDIA.hospital.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.hospital.secondaryImage,
  accentColor: TOPIC_MEDIA.hospital.accentColor,
  accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "의료진 상담", text: "산부인과 의료진의 직접 상담이 가능한지 확인합니다." },
    { numberLabel: "02", title: "검사 체계", text: "임신 상태 확인 검사가 가능한지 확인합니다." },
    { numberLabel: "03", title: "비용 설명", text: "포함·제외 항목이 명확히 안내되는지 확인합니다." },
    { numberLabel: "04", title: "개인정보 보호", text: "상담·진료 과정에서 개인정보 보호가 안내되는지 확인합니다." },
    { numberLabel: "05", title: "사후관리", text: "사후진료와 이상 증상 시 연락이 가능한지 확인합니다." },
  ],
  seo: {
    title: "임신중절수술 병원 선택",
    description:
      "상담 체계, 검사, 비용 설명, 개인정보 보호와 사후관리 등 임신중절수술 병원 선택 시 확인할 기준을 안내합니다.",
    keywords: [
      "임신중절수술 병원 선택",
      "임신중절수술 병원",
      "임신중절수술 사후관리",
      "임신중절수술 상담",
      "임신중절수술 병원 비교",
    ],
    ogImage: TOPIC_MEDIA.hospital.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "hospital-exam",
      order: 1,
      numberLabel: "01",
      heading: "검사 체계는 어떻게 확인해야 하나요?",
      layout: "steps",
      directAnswer:
        "검사 체계는 어떤 항목을 왜 시행하는지, 결과를 어떻게 설명하는지, 현재 임신 상태와 진료 검토 여부·추가 검사 가능성을 구분해 안내하는지로 확인할 수 있습니다.",
      paragraphs: [
        "임신 여부·주수 확인, 혈액검사, 초음파 등 기본 확인과 함께, 건강 상태에 따라 추가 검사가 필요할 수 있습니다. 필수·선택 항목이 구분되어 있는지 물어보세요.",
        "결과 설명이 수치만 나열되지 않고, 이후 상담·진료 계획과 연결해 이해되는지 확인하면 이후 비용·방법 상담도 수월해집니다.",
      ],
      steps: [
        {
          label: "01 검사",
          text: "어떤 항목을 왜 시행하는지 확인합니다.",
        },
        {
          label: "02 설명",
          text: "결과가 이후 계획과 연결돼 이해되는지 확인합니다.",
        },
        {
          label: "03 판단",
          text: "현재 상태·진료 검토·추가 검사 가능성을 구분합니다.",
        },
      ],
    },
    {
      id: "hospital-consult",
      order: 2,
      numberLabel: "02",
      heading: "상담에서는 무엇을 물어봐야 하나요?",
      layout: "checklist",
      directAnswer:
        "상담에서는 적용 가능한 진료 방법, 각 방법의 특성과 한계, 마취·회복 과정, 사후진료 일정, 이상 증상 대응을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "장점만 강조되는 설명보다, 회복 과정에서 나타날 수 있는 변화와 한계를 함께 듣는 편이 기대 관리에 도움이 됩니다.",
        "특정 방법이 모든 사람에게 맞는다고 단정하는 표현은 신중히 보고, 본인 상태에 근거한 설명인지 확인하세요.",
      ],
      bullets: [
        "적용 가능한 진료 방법",
        "각 방법의 특성과 한계",
        "마취·수술·회복 과정",
        "사후진료 일정",
        "이상 증상 시 연락 방법",
        "비용 포함·제외 항목",
        "개인별 적합성",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "임신중절수술 비용 자세히 보기",
    },
    {
      id: "hospital-cost-care",
      order: 3,
      numberLabel: "03",
      heading: "비용과 사후진료 범위는 어떻게 비교하나요?",
      layout: "compare-table",
      directAnswer:
        "비용은 포함 항목과 추가 가능 항목을, 관리는 경과 확인 일정과 이상 증상 시 연락 방법·재방문 가능성을 함께 비교하는 편이 균형 있습니다.",
      paragraphs: [
        "총액만 낮아 보여도 검사·약제·재진이 제외되어 있으면 실제 부담이 달라질 수 있습니다. 사후진료 기간과 횟수를 구분해 요청하세요.",
        "이동 거리와 재방문 편의, 야간·응급 문의 경로도 수술 후 관리에 영향을 줄 수 있습니다.",
      ],
      compareHeaders: ["비용에서 확인할 점", "사후진료에서 확인할 점"],
      compareRows: [
        {
          criterion: "포함·추가 항목",
          left: "검사·마취·수술·약제 포함 여부",
          right: "재방문·추가 검사 발생 조건",
        },
        {
          criterion: "검사 범위",
          left: "수술 전후 검사 범위",
          right: "경과 확인 일정",
        },
        {
          criterion: "연락·안내",
          left: "견적에 명시된 항목 여부",
          right: "이상 증상 발생 시 연락 방법",
        },
        {
          criterion: "접근성",
          left: "이동 거리와 일정",
          right: "재방문·응급 대응 가능성",
        },
      ],
    },
    {
      id: "hospital-staff",
      order: 4,
      numberLabel: "04",
      heading: "의료진과 상담 환경은 어떻게 확인하나요?",
      layout: "info-grid",
      directAnswer:
        "산부인과 전문의 상담 가능 여부, 질문할 시간의 충분함, 개인 정보 보호와 비밀 유지, 응급·야간 연락 체계를 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "상담에서 본인 상태를 충분히 설명받고, 궁금한 점을 질문할 기회가 있는지가 중요합니다. 설명이 성급하거나 특정 방법만 반복 추천되면 다른 기관과 비교해 보세요.",
        "연세365산부인과의원 등 산부인과 전문 의료기관이라도, 본인에게 맞는 설명과 관리 체계가 있는지는 상담을 통해 확인해야 합니다.",
      ],
      infoBlocks: [
        {
          label: "전문성",
          text: "산부인과 진료·상담 경험과 설명의 구체성",
        },
        {
          label: "상담 시간",
          text: "질문할 시간과 결과 설명의 충분함",
        },
        {
          label: "비밀 유지",
          text: "개인 정보 보호와 상담 비밀 유지",
        },
        {
          label: "연락 체계",
          text: "재방문·응급·야간 문의 경로",
        },
        {
          label: "시설",
          text: "검사·수술·회복 공간의 위생과 안내",
        },
        {
          label: "사후진료",
          text: "경과 확인 일정과 추가 진료 안내",
        },
      ],
      relatedHref: ROUTES.reviews,
      relatedLabel: "임신중절수술 후기 확인 기준 보기",
    },
    {
      id: "hospital-questions",
      order: 5,
      numberLabel: "05",
      heading: "상담 전에 어떤 질문을 준비하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "상담 전에는 임신 상태 설명, 적용 가능한 방법, 비용 구성, 회복·관리 일정, 이상 증상 대응을 묻는 질문을 준비해 두면 필요한 정보를 빠르게 파악하기 쉽습니다.",
      paragraphs: [
        "질문을 메모해 가면 설명 속도를 따라가기 쉽고, 포함·제외 항목을 다시 확인하기도 수월합니다.",
        "특정 병원을 추천하거나 우월하다고 단정하지 않습니다. 비교 기준을 정리한 뒤, 검사와 상담에서 본인에게 맞는 안내를 확인하세요.",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "임신중절수술 FAQ 보기",
    },
  ],
};
