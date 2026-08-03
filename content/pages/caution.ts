import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const CAUTION_PAGE: ContentPage = {
  id: "precautions",
  order: 3,
  numberLabel: "03",
  slug: "임신중절수술-주의사항",
  href: ROUTES.precautions,
  navLabel: "임신중절수술 주의사항",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 주의사항",

  heading: "임신중절수술 전후에는 무엇을 확인해야 할까요?",
  intro: [
    "임신중절수술 전후에는 검사 준비, 당일 안내, 생활 관리와 이상 증상 확인이 이어집니다. 개인 상태와 의료진 안내에 따라 세부 내용은 달라질 수 있으므로, 일반적인 확인 관점으로 정리해 두었습니다.",
    "복용 약·기존 질환·알레르기와 생활 방식을 미리 정리하고, 수술 당일·이후에는 처방 약·위생·활동·외출 관리를 안내 범위에서 지키는 것이 중요합니다. 부작용이 전혀 없다고 보장할 수는 없습니다.",
  ],
  hubContextLink: {
    before: "가능 시기와 비용, 회복기간을 포함한 ",
    anchor: "임신중절수술 핵심 정보",
    after: "도 함께 확인하세요.",
  },
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-27",
  faqIds: [
    "caution-01",
    "caution-02",
    "caution-03",
    "caution-04",
    "caution-05",
  ],
  faqTitle: "임신중절수술 주의사항 자주 묻는 질문",
  conclusion: [
    "임신중절수술 주의사항은 검사 전 준비, 수술 당일 안내, 수술 후 생활 관리, 이상 증상 확인으로 나누어 살펴보는 편이 이해하기 쉽습니다. 처방 약 복용과 위생·활동 제한을 안내 범위에서 지키는 것이 기본입니다.",
    "평소와 다른 출혈이나 심한 통증·고열이 있으면 안내받은 연락 방법으로 확인하세요. 이 페이지는 일반 정보 안내이며, 개인의 진단·치료 결정을 대체하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.precautions.thumbnail,
  topImages: [TOPIC_MEDIA.precautions.thumbnail],
  bodyImage: TOPIC_MEDIA.precautions.secondaryImage,
  heroImage: TOPIC_MEDIA.precautions.thumbnail,
  secondaryImage: TOPIC_MEDIA.precautions.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.precautions.secondaryImage,
  accentColor: TOPIC_MEDIA.precautions.accentColor,
  accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "복용약 고지", text: "복용 중인 약과 건강기능식품을 미리 알립니다." },
    { numberLabel: "02", title: "검사·금식", text: "검사와 금식 안내는 기관별 기준을 따릅니다." },
    { numberLabel: "03", title: "귀가 계획", text: "동행·귀가·휴식 공간을 미리 준비합니다." },
    { numberLabel: "04", title: "수술 후 휴식", text: "충분한 휴식을 취하고 무리한 활동을 피합니다." },
    { numberLabel: "05", title: "이상 증상 문의", text: "이상 증상이 있으면 안내받은 연락처로 문의합니다." },
  ],
  seo: {
    title: "임신중절수술 주의사항",
    description:
      "임신중절수술 전 준비부터 수술 후 일상생활과 진료 확인까지 놓치기 쉬운 주의사항을 항목별로 정리했습니다.",
    keywords: [
      "임신중절수술 주의사항",
      "임신중절수술 전 주의사항",
      "임신중절수술 후 주의사항",
      "임신중절수술 후 관리",
      "임신중절수술 전 검사",
    ],
    ogImage: TOPIC_MEDIA.precautions.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "caution-before",
      order: 1,
      numberLabel: "01",
      heading: "검사 전에는 어떤 내용을 준비해야 하나요?",
      layout: "checklist",
      directAnswer:
        "검사 전에는 복용 약, 기존 질환, 알레르기, 과거 산부인과 수술·시술 이력, 생활 방식을 정리하고 질문 목록을 준비해 두면 상담이 수월합니다.",
      paragraphs: [
        "마지막 생리 시작일, 임신 가능 시기, 현재 느끼는 증상과 복용 중인 약물도 함께 알려 주면 검사 목적과 결과 설명을 이해하기 쉽습니다.",
        "검사 결과에 따라 추가 검사가 필요할 수 있으므로, 당일 일정과 귀가·동행 방법까지 여유 있게 준비하는 편이 좋습니다.",
      ],
      bullets: [
        "복용 중인 약물 목록",
        "기존 전신·산부인과 질환",
        "알레르기·약 부작용 이력",
        "과거 산부인과 수술·시술 경험",
        "마지막 생리일·임신 관련 증상",
        "검사 전 물어볼 질문 목록",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술 병원선택 기준 보기",
    },
    {
      id: "caution-surgery-day",
      order: 2,
      numberLabel: "02",
      heading: "수술 당일에는 무엇을 확인해야 하나요?",
      layout: "steps",
      directAnswer:
        "수술 당일에는 안내받은 금식·복용 중단, 귀가 방법, 동행 여부, 당일 일정과 복장·위생 준비를 확인하고 의료기관 안내를 우선합니다.",
      paragraphs: [
        "보호자·동행 여부, 귀가 후 휴식 공간, 처방 약 수령과 복용 시작 시점을 미리 정리해 두면 당일 혼란을 줄일 수 있습니다.",
        "금식 시간, 반지·액세서리·콘택트 착용 제한은 기관마다 안내가 다를 수 있어, 수술 전 안내문을 기준으로 따르는 것이 안전합니다.",
      ],
      steps: [
        {
          label: "01 안내문·금식 확인",
          text: "금식·복용 중단 안내와 기관 안내문을 확인합니다.",
        },
        {
          label: "02 귀가·동행 준비",
          text: "귀가 방법과 동행·휴식 공간을 미리 정리합니다.",
        },
        {
          label: "03 신분·서류 준비",
          text: "필요한 신분 확인과 동의·상담 서류를 준비합니다.",
        },
        {
          label: "04 당일 제한 확인",
          text: "복장·위생·이동 제한과 일정을 확인합니다.",
        },
      ],
    },
    {
      id: "caution-aftercare",
      order: 3,
      numberLabel: "03",
      heading: "수술 후 생활에서는 무엇을 주의해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "수술 후에는 처방 약 복용, 위생 관리, 운동·목욕, 성관계, 음주 가능 여부를 안내 범위에서 확인합니다.",
      paragraphs: [
        "무거운 짐을 들거나 장시간 서 있는 작업, 복부에 부담이 큰 운동은 안내 시점까지 피하는 경우가 많습니다. 위생 관리와 휴식을 충분히 취하는 것이 초기 회복에 도움이 됩니다.",
        "구체적 허용 기간은 담당 의료진 설명을 따르며, 임의로 일정을 앞당기지 않는 것이 좋습니다.",
      ],
      table: {
        caption: "수술 후 생활 관리 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인 포인트" },
        ],
        rows: [
          {
            item: "처방 약",
            check: "복용 시간과 횟수, 다른 약과 병용 주의",
          },
          {
            item: "위생",
            check: "샤워·생리대 교체 등 위생 관리 방법",
          },
          {
            item: "운동",
            check: "복부·골반 부담을 고려해 단계적으로 시작",
          },
          {
            item: "목욕·수영",
            check: "회복 안내에 따라 허용 시점 확인",
          },
          {
            item: "성관계",
            check: "감염·출혈 위험을 고려해 안내 확인",
          },
          {
            item: "음주",
            check: "약 복용과 회복 상태를 고려해 안내 확인",
          },
        ],
      },
      relatedHref: ROUTES.recovery,
      relatedLabel: "임신중절수술 회복기간 자세히 보기",
    },
    {
      id: "caution-urgent",
      order: 4,
      numberLabel: "04",
      heading: "어떤 변화가 있을 때 의료진에게 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "평소와 다른 많은 출혈, 심해지는 통증, 고열, 어지럼증·실신, 악취가 나는 분비물, 처방 약 복용 후 이상 반응이 의심되면 의료진에게 확인하세요.",
      paragraphs: [
        "일시적인 출혈·통증과 구분해서 안내받는 것이 중요합니다. 증상이 점점 심해지거나 갑작스럽게 변하면 지체 없이 연락하는 편이 안전합니다.",
        "주간·야간 문의 방법과 응급 절차를 연락처에 저장해 두면, 증상 변화 시 대응이 수월합니다.",
      ],
      bullets: [
        "평소와 다른 많은 출혈",
        "심해지는 하복부 통증",
        "고열·오한",
        "어지럼증·실신",
        "악취가 나는 분비물",
        "처방 약 복용 후 이상 반응이 의심되는 경우",
      ],
    },
    {
      id: "caution-legal",
      order: 5,
      numberLabel: "05",
      heading: "상담과 진료 과정에서 추가로 확인할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "상담에서는 임신 상태 확인 결과, 적용 가능한 진료 방법의 특성과 한계, 사후진료 일정과 이상 증상 대응 방법을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "의료기관 밖에서 약물을 구매·복용하는 것은 위험할 수 있으며, 반드시 의료진의 진찰과 상담을 거쳐 진행해야 합니다. 본인 상태에 맞는 안내를 받지 않으면 합병증 위험이 커질 수 있습니다.",
        "개인 정보 보호와 상담 내용의 비밀 유지가 가능한지, 재방문·연락 체계가 명확한지도 함께 확인하세요.",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "임신중절수술 FAQ 보기",
    },
  ],
};
