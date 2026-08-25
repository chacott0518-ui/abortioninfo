import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const COST_PAGE: ContentPage = {
  id: "cost",
  order: 1,
  numberLabel: "01",
  slug: "임신중절수술-비용",
  href: ROUTES.cost,
  navLabel: "임신중절수술 비용",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 비용",

  heading: "임신중절수술 비용은 어떤 기준에 따라 달라질까요?",
  intro: [
    "임신중절수술 비용은 임신 주수, 검사 범위, 마취 방법, 진료 포함 항목과 사후진료 구성에 따라 달라질 수 있습니다. 같은 명칭의 진료라도 현재 임신 상태와 건강 조건에 따라 확인해야 할 항목이 달라질 수 있습니다.",
    "임신 중절 수술 비용이나 중절수술비용을 총액만으로 비교하기보다, 검사·마취·수술·약제·사후진료가 어디까지 포함되는지와 추가 비용이 생길 수 있는 조건을 함께 살펴보는 것이 중요합니다. 임신중절 비용으로 검색하는 경우에도 확인 항목은 같습니다.",
  ],
  hubContextLink: {
    before: "비용 구성뿐 아니라 가능 시기와 회복 과정까지 보려면 ",
    anchor: "임신 중절수술 전체 정보",
    after: "를 함께 확인하세요.",
  },
  publishedAt: "2026-07-01",
  updatedAt: "2026-08-25",
  faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05", "cost-06"],
  faqTitle: "임신중절수술 비용 자주 묻는 질문",
  conclusion: [
    "임신중절수술 비용은 총액 하나로만 이해하기 어렵습니다. 임신 주수, 검사 구성, 마취·진료 범위, 사후진료 포함 여부를 구분해 보면 견적을 더 정확히 비교할 수 있습니다.",
    "상담에서는 총액뿐 아니라 포함·제외 항목과 추가 비용이 생길 수 있는 조건을 함께 확인하세요. 이 페이지는 일반 정보 안내이며, 개인 진료나 비용 확정을 대체하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.cost.thumbnail,
  topImages: [TOPIC_MEDIA.cost.thumbnail],
  bodyImage: TOPIC_MEDIA.cost.secondaryImage,
  heroImage: TOPIC_MEDIA.cost.thumbnail,
  secondaryImage: TOPIC_MEDIA.cost.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.cost.secondaryImage,
  accentColor: TOPIC_MEDIA.cost.accentColor,
  accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "비용 결정 요소", text: "임신중절수술 비용은 임신 주수와 진료 범위에 따라 견적 구성이 달라질 수 있습니다." },
    { numberLabel: "02", title: "검사 포함 범위", text: "기본·추가 검사 포함 여부를 견적에서 구분해 확인합니다." },
    { numberLabel: "03", title: "마취·약제", text: "마취 방식과 약제 포함 여부에 따라 총액이 달라질 수 있습니다." },
    { numberLabel: "04", title: "추가 비용 조건", text: "추가 처치나 재확인이 필요한 경우 비용이 달라질 수 있습니다." },
    { numberLabel: "05", title: "사후 진료", text: "경과 확인과 사후진료 포함 여부를 미리 확인합니다." },
  ],
  seo: {
    title: "임신중절수술 비용",
    description:
      "임신중절수술 비용이 달라지는 기준과 검사, 마취, 수술 및 사후관리 포함 항목을 확인할 수 있도록 정리했습니다.",
    keywords: [
      "임신중절수술 비용",
      "임신중절 비용",
      "임신중절수술 검사비",
      "임신중절수술 상담",
      "임신중절수술 견적",
    ],
    ogImage: TOPIC_MEDIA.cost.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "cost-why",
      order: 1,
      numberLabel: "01",
      heading: "임신중절수술 비용이 달라지는 이유는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "비용은 임신 주수와 검사 범위, 마취 방법, 진료 포함 항목, 사후진료 구성 등 여러 요소에 따라 달라질 수 있습니다.",
      paragraphs: [
        "총액만 보면 서로 다른 견적을 같은 기준으로 비교하기 어렵습니다. 검사비·마취비·수술비·약제비·사후진료 비용이 어떻게 나뉘는지부터 구분해 두면, 포함 범위의 차이를 파악하기 쉽습니다.",
        "전국 공통 가격처럼 단정할 수 있는 금액은 없습니다. 임신 상태, 건강 조건, 검사 결과에 따라 산정 방식이 달라질 수 있으므로 상담·검사 이후 견적을 확인하는 편이 정확합니다.",
      ],
      infoBlocks: [
        {
          label: "임신 주수",
          text: "주수에 따라 검사·진료 범위와 방법 검토가 달라질 수 있음",
        },
        {
          label: "검사 범위",
          text: "초음파·혈액검사 등 필요한 검사 항목 구성",
        },
        {
          label: "마취·진료",
          text: "마취 방법과 수술·시술 포함 범위",
        },
        {
          label: "사후진료",
          text: "경과 확인·재방문·추가 검사 포함 여부",
        },
      ],
    },
    {
      id: "cost-exam-method",
      order: 2,
      numberLabel: "02",
      heading: "임신 중절수술 비용에서 검사·진료 방법은 어떤 영향을 주나요?",
      layout: "compare-table",
      directAnswer:
        "임신 중절수술 비용에서 수술 전 검사는 임신 상태와 건강 조건을 확인하는 과정이며, 적용 가능한 진료 방법은 임신 주수·개인 상태·의료기관 판단에 따라 달라질 수 있어 비용 구성도 함께 달라질 수 있습니다.",
      paragraphs: [
        "검사는 임신 여부·주수 확인, 혈액검사, 초음파 등 현재 상태를 파악하는 데 쓰입니다. 필요한 항목은 개인 상태에 따라 달라질 수 있어, 기본·추가 검사 포함 여부를 견적과 함께 물어보는 것이 좋습니다.",
        "진료 방법은 임신 주수와 건강 상태에 따라 검토됩니다. 특정 방법이 모든 사람에게 적합하다고 보기 어렵고, 상담에서 본인에게 가능한 선택지와 각각의 특성·한계를 함께 확인하는 것이 중요합니다.",
      ],
      compareHeaders: ["검사·상담 단계", "수술·사후진료 단계"],
      compareRows: [
        {
          criterion: "주요 확인",
          left: "임신 주수·건강 상태·복용 약물",
          right: "진료 후 출혈·통증·경과 변화",
        },
        {
          criterion: "비용 구성",
          left: "검사비·상담비 포함 여부",
          right: "마취·수술·약제·재방문 포함 여부",
        },
        {
          criterion: "추가 가능성",
          left: "추가 검사·재검사 필요 여부",
          right: "추가 진료·사후관리 발생 조건",
        },
        {
          criterion: "확인 포인트",
          left: "검사 결과 설명의 구체성",
          right: "사후진료 일정과 연락 방법",
        },
        {
          criterion: "비교 기준",
          left: "포함·제외 항목 구분",
          right: "총액과 세부 항목 분리 여부",
        },
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내",
    },
    {
      id: "cost-before-compare",
      order: 3,
      numberLabel: "03",
      heading: "중절수술 비용을 비교하기 전에 무엇을 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "중절수술 비용을 비교하기 전에 검사·마취·수술비 분리 여부, 사후진료 포함 범위, 추가 비용 가능성과 보험·본인부담 확인 경로를 정리해 두면 오해를 줄일 수 있습니다.",
      paragraphs: [
        "같은 금액이라도 포함 범위가 다르면 실제 부담이 달라질 수 있습니다. 구두 설명뿐 아니라 포함·제외 항목이 적힌 자료를 요청하면 비교가 수월합니다.",
        "급여·비급여와 개인 보험 적용 여부는 약관과 본인 조건에 따라 달라질 수 있습니다. 이 페이지만으로 적용 여부를 단정하지 말고, 상담과 관련 기관 안내를 함께 확인하세요.",
      ],
      bullets: [
        "검사 비용이 포함되는지",
        "마취·수술 비용이 분리되어 있는지",
        "약제·처치 비용 포함 여부",
        "추가 검사·재방문 가능성이 있는지",
        "사후진료 범위가 어디까지인지",
        "보험이나 본인부담 여부를 어디에서 확인할지",
      ],
    },
    {
      id: "cost-consult-check",
      order: 4,
      numberLabel: "04",
      heading: "임신중절 비용 상담 시 어떤 항목을 체크해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "상담에서는 검사 설명의 구체성, 적용 가능한 진료 방법의 특성과 한계, 비용의 포함·추가 항목 구분, 수술 후 경과 확인 일정을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "금액만 듣고 결정하기보다, 본인 임신 상태에서 검토 가능한 방법과 그 한계, 사후진료 일정, 이상 증상 시 연락 방법까지 질문해 두면 이후 비교가 쉬워집니다.",
        "견적에 사후진료가 어느 기간·횟수까지 포함되는지, 초과 시 비용이 어떻게 되는지까지 구분해 두면 예상과 다른 청구를 줄이는 데 도움이 됩니다.",
      ],
      table: {
        caption: "병원 상담 시 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인할 내용" },
        ],
        rows: [
          {
            item: "검사",
            check: "어떤 검사를 진행하고 결과를 어떻게 설명하는지",
          },
          {
            item: "진료 방법",
            check: "가능한 방법의 특성과 제한점도 설명하는지",
          },
          {
            item: "비용",
            check: "포함 항목과 추가 가능 항목을 구분하는지",
          },
          {
            item: "관리",
            check: "수술 후 경과 확인 일정과 연락 방법이 있는지",
          },
        ],
      },
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술 병원선택 기준 보기",
    },
    {
      id: "cost-insurance",
      order: 5,
      numberLabel: "05",
      heading: "임신중절수술비용의 보험·추가 항목은 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "보험 적용 여부와 추가 비용 발생 조건은 개인 조건·약관·급여·비급여 구분에 따라 달라질 수 있어, 상담 시 본인에게 해당하는 항목을 직접 확인해야 합니다.",
      paragraphs: [
        "검사 결과에 따라 추가 검사나 사후진료가 필요해질 수 있어, 초기 견적과 최종 비용이 달라질 수 있습니다. 어떤 경우 추가 비용이 발생하는지 미리 질문하는 것이 좋습니다.",
        "가격 홍보나 할인 문구만 보고 결정하기보다, 포함 범위와 사후관리, 본인에게 필요한 검사가 충분히 이루어지는지 함께 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "임신중절수술 FAQ 보기",
    },
  ],
};
