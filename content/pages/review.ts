import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const REVIEW_PAGE: ContentPage = {
  id: "reviews",
  order: 5,
  numberLabel: "05",
  slug: "임신중절수술-후기",
  href: ROUTES.reviews,
  navLabel: "임신중절수술 후기",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후기",

  heading: "임신중절수술 후기는 어떻게 확인해야 할까요?",
  intro: [
    "임신중절수술 후기는 다른 사람의 경험을 참고하는 자료일 뿐, 의료 판단을 대체하지 않습니다. 이 페이지는 가상 환자 후기를 작성하지 않으며, 온라인 후기를 볼 때 확인하면 좋은 기준을 안내합니다.",
    "비용·회복·상담·사후진료 과정이 함께 적힌 내용을 우선 살펴보고, 결과만 강조하거나 광고 여부가 불분명한 글은 거리를 두고 읽는 편이 안전합니다.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-27",
  faqIds: [
    "review-01",
    "review-02",
    "review-03",
    "review-04",
    "review-05",
  ],
  faqTitle: "임신중절수술 후기 자주 묻는 질문",
  conclusion: [
    "임신중절수술 후기는 참고 자료입니다. 임신 주수, 진료 방법, 회복 과정, 비용·관리 경험이 구체적으로 적힌 글을 우선 확인하고, 과장된 결과 강조나 광고 표시가 없는 홍보성 글은 신중히 구분하세요.",
    "후기 작성자와 본인의 임신 상태·건강 조건이 다를 수 있으므로, 중요한 질문은 검사와 상담에서 확인하세요. 이 페이지는 가짜 후기나 성공 사례를 제시하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.reviews.thumbnail,
  topImages: [TOPIC_MEDIA.reviews.thumbnail],
  bodyImage: TOPIC_MEDIA.reviews.secondaryImage,
  heroImage: TOPIC_MEDIA.reviews.thumbnail,
  secondaryImage: TOPIC_MEDIA.reviews.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.reviews.secondaryImage,
  accentColor: TOPIC_MEDIA.reviews.accentColor,
  accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "개인 경험의 한계", text: "후기는 참고 자료일 뿐 개인 상태를 대신하지 않습니다." },
    { numberLabel: "02", title: "광고성 후기 구분", text: "결과만 강조하거나 광고 표시가 없는 홍보성 글은 신중히 봅니다." },
    { numberLabel: "03", title: "상담 과정 확인", text: "검사와 상담 과정이 구체적으로 적혔는지 확인합니다." },
    { numberLabel: "04", title: "비용 안내 확인", text: "포함 항목이 구분되어 있는지 살펴봅니다." },
    { numberLabel: "05", title: "사후관리 확인", text: "경과 확인과 이상 증상 대응 경험이 있는지 참고합니다." },
  ],
  seo: {
    title: "임신중절수술 후기 확인 방법",
    description:
      "임신중절수술 후기를 참고할 때 광고성 표현, 개인차, 개인정보와 상담 내용을 구분해 확인하는 방법을 안내합니다.",
    keywords: [
      "임신중절수술 후기",
      "임신중절수술 후기 확인",
      "임신중절수술 상담 후기",
      "임신중절수술 회복 후기",
      "임신중절수술 병원 후기",
    ],
    ogImage: TOPIC_MEDIA.reviews.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "review-why",
      order: 1,
      numberLabel: "01",
      heading: "임신중절수술 후기를 찾는 이유는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "많은 사람이 후기에서 비용 구성, 회복기간, 상담·수술 과정, 사후진료 경험을 참고하려 합니다. 다만 개인의 조건이 다르면 같은 경험이 반복된다고 보기 어렵습니다.",
      paragraphs: [
        "후기는 '무엇이 가능했는지'보다 '어떤 조건에서 어떤 과정을 거쳤는지'를 보는 자료로 활용하는 편이 오해를 줄입니다.",
        "금액·일정·결과만 요약된 글보다, 임신 주수와 포함 항목이 드러난 글을 우선 확인하세요.",
      ],
      infoBlocks: [
        {
          label: "비용",
          text: "포함 항목과 추가 비용 확인",
        },
        {
          label: "회복기간",
          text: "출혈·통증과 일상 복귀 과정 확인",
        },
        {
          label: "상담",
          text: "검사·설명·질문 시간 확인",
        },
        {
          label: "진료 과정",
          text: "당일·수술·귀가 안내 확인",
        },
        {
          label: "사후진료",
          text: "재방문·경과 확인 경험",
        },
        {
          label: "개인차",
          text: "작성자 조건과 본인 조건 비교",
        },
      ],
    },
    {
      id: "review-mentions",
      order: 2,
      numberLabel: "02",
      heading: "후기에서는 어떤 내용이 자주 언급되나요?",
      layout: "info-grid",
      directAnswer:
        "유용한 후기에는 임신 주수, 진료 방법, 회복 과정, 출혈·통증 변화, 비용 구성, 사후진료가 함께 언급되는 경우가 많습니다.",
      paragraphs: [
        "임신 주수·진료 방법이 없고 결과만 적힌 글은 비교 기준으로 쓰기 어렵습니다. 회복 중 불편과 적응 기간이 구체적으로 적혀 있는지도 함께 보세요.",
        "비용은 총액뿐 아니라 검사·마취·재진 포함 여부가 드러나는지가 중요합니다.",
      ],
      infoBlocks: [
        {
          label: "임신 주수",
          text: "상담·검사 당시 임신 주수",
        },
        {
          label: "진료 방법",
          text: "적용된 방법과 선택 배경",
        },
        {
          label: "회복 과정",
          text: "출혈·통증과 일상 복귀 시점",
        },
        {
          label: "상담 경험",
          text: "설명의 구체성과 질문 가능 여부",
        },
        {
          label: "비용 구성",
          text: "비용 구성과 포함·제외 항목",
        },
        {
          label: "사후진료",
          text: "재방문·경과 확인 경험",
        },
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "임신중절수술 비용 자세히 보기",
    },
    {
      id: "review-caution",
      order: 3,
      numberLabel: "03",
      heading: "후기를 볼 때 무엇을 주의해야 하나요?",
      layout: "compare-table",
      directAnswer:
        "개인 상태·진료 과정이 구체적으로 적히고 개인차를 인정하는 글은 참고 가치가 높고, 결과만 강조하거나 광고 여부가 불분명한 글은 신중히 구분해야 합니다.",
      paragraphs: [
        "'당일 완료', '완전 무통', '모두 동일'처럼 단정하는 표현이 많으면 기대와 실제가 어긋나기 쉽습니다. 협찬·광고 표시 여부도 함께 확인하세요.",
        "별점·할인 링크·성공 사례만으로 판단을 대체하지 않는 것이 좋습니다.",
      ],
      compareHeaders: ["참고 가치가 높은 후기", "주의해서 볼 후기"],
      compareRows: [
        {
          criterion: "개인 상태",
          left: "임신 주수·건강 상태가 설명됨",
          right: "결과만 과도하게 강조",
        },
        {
          criterion: "진료 정보",
          left: "진료 방법·과정이 명확함",
          right: "과정 정보가 없음",
        },
        {
          criterion: "회복 과정",
          left: "출혈·통증·회복 과정이 구체적임",
          right: "즉각적인 효과만 강조",
        },
        {
          criterion: "광고 표시",
          left: "광고·협찬 표시가 있음",
          right: "광고 여부가 불분명",
        },
        {
          criterion: "개인차",
          left: "개인차를 인정함",
          right: "모두에게 같은 결과를 암시",
        },
      ],
    },
    {
      id: "review-with-exam",
      order: 4,
      numberLabel: "04",
      heading: "상담과 검사 내용을 함께 확인해야 하는 이유는 무엇인가요?",
      layout: "steps",
      directAnswer:
        "후기 작성자와 본인의 임신 상태, 건강 조건, 진료 방법 적합성이 다를 수 있어 후기만으로는 결정하기 어렵습니다. 검사와 상담으로 확인해야 합니다.",
      paragraphs: [
        "같은 방법이라도 임신 주수·건강 상태·회복 환경에 따라 체감이 달라질 수 있습니다. 후기에서 궁금한 점을 질문 목록으로 만들어 상담에 가져가면 도움이 됩니다.",
        "이 사이트는 가상 환자 후기, 가짜 인용문, 별점, 전후 사진, 수술 성공 사례를 제공하지 않습니다.",
      ],
      steps: [
        {
          label: "01 후기에서 조건 확인",
          text: "후기에 적힌 임신 주수·비용·회복 조건을 정리합니다.",
        },
        {
          label: "02 검사 결과와 구분",
          text: "본인 검사 결과와 후기 조건의 차이를 구분합니다.",
        },
        {
          label: "03 질문 목록 작성",
          text: "궁금한 점을 상담용 질문 목록으로 정리합니다.",
        },
        {
          label: "04 상담에서 질문 정리",
          text: "포함 항목·사후진료를 견적과 함께 상담에서 확인합니다.",
        },
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "임신중절수술 병원선택 기준 보기",
    },
    {
      id: "review-privacy",
      order: 5,
      numberLabel: "05",
      heading: "후기와 개인 정보는 어떻게 다루면 좋을까요?",
      layout: "prose",
      directAnswer:
        "온라인 후기에는 개인 정보가 노출될 수 있으므로, 본인도 후기 작성 시 신상·진료 세부 정보 공개에 주의하는 것이 좋습니다.",
      paragraphs: [
        "후기만으로 특정 의료기관을 단정하기보다, 상담에서 본인 상태에 맞는 설명을 직접 확인하는 과정이 필요합니다.",
        "민감한 건강 정보는 공개 게시판보다 의료진과의 상담에서 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "임신중절수술 주의사항 자세히 보기",
    },
  ],
};
