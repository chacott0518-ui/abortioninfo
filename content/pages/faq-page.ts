import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { FAQ_HUB_GROUPS } from "@/content/faqs";
import type { ContentPage } from "@/types/content";

export const FAQ_PAGE: ContentPage = {
  id: "faq",
  order: 6,
  numberLabel: "06",
  slug: "임신중절수술-자주-묻는-질문",
  href: ROUTES.faq,
  navLabel: "임신중절수술 FAQ",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 자주 묻는 질문",

  heading: "임신중절수술과 관련해 자주 묻는 질문은 무엇일까요?",
  intro: [
    "임신중절수술 FAQ는 임신 상태 확인, 비용·검사, 회복·생활 관리, 주의사항, 병원선택·후기 확인으로 나누어 정리했습니다. 각 답변은 일반적인 정보 안내이며 개인 진료를 대체하지 않습니다.",
    "임신 주수와 건강 상태에 따라 답이 달라질 수 있으므로, 관심 주제의 상세 페이지와 함께 읽고 최종 확인은 검사와 상담에서 받으세요.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-27",
  faqIds: [
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
  ],
  faqTitle: "임신중절수술 자주 묻는 질문",
  conclusion: [
    "자주 묻는 질문은 정보 탐색의 출발점입니다. 같은 질문이라도 검사 결과와 건강 상태에 따라 확인해야 할 내용이 달라질 수 있습니다.",
    "비용, 회복기간, 주의사항, 병원선택, 후기 확인 기준 페이지를 함께 살펴본 뒤, 본인에게 중요한 항목은 상담에서 직접 확인하세요.",
  ],
  thumbnail: TOPIC_MEDIA.faq.thumbnail,
  topImages: [TOPIC_MEDIA.faq.thumbnail],
  bodyImage: TOPIC_MEDIA.faq.secondaryImage,
  heroImage: TOPIC_MEDIA.faq.thumbnail,
  secondaryImage: TOPIC_MEDIA.faq.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.faq.secondaryImage,
  accentColor: TOPIC_MEDIA.faq.accentColor,
  accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "가능 시기", text: "가능 시점은 검사와 상담으로 확인합니다." },
    { numberLabel: "02", title: "비용", text: "주수·검사·마취·사후진료에 따라 달라질 수 있습니다." },
    { numberLabel: "03", title: "회복기간", text: "회복 속도와 일상 복귀는 개인차가 있습니다." },
    { numberLabel: "04", title: "출혈과 통증", text: "출혈·통증은 나타날 수 있으며 변화 관찰이 필요합니다." },
    { numberLabel: "05", title: "병원 선택", text: "상담·검사·사후관리를 함께 비교합니다." },
    { numberLabel: "06", title: "보호자", text: "동반 기준은 병원 안내를 미리 확인합니다." },
    { numberLabel: "07", title: "당일 진료", text: "당일 진행 가능 여부는 검사와 일정에 따라 달라집니다." },
    { numberLabel: "08", title: "약물중절 안내", text: "직접 시행·처방은 하지 않으며, 일반 정보와 상담 방향은 안내할 수 있습니다." },
  ],
  seo: {
    title: "임신중절수술 자주 묻는 질문",
    description:
      "임신중절수술의 시기, 비용, 회복, 합법 여부, 보호자, 미성년자, 당일 진행과 상담 절차에 관한 자주 묻는 질문을 정리했습니다.",
    keywords: [
      "임신중절수술 FAQ",
      "임신중절수술 자주 묻는 질문",
      "임신중절수술 상담",
      "임신중절수술 비용",
      "임신중절수술 회복기간",
    ],
    ogImage: TOPIC_MEDIA.faq.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: FAQ_HUB_GROUPS.map((group) => ({
    id: group.id,
    order: Number(group.numberLabel),
    numberLabel: group.numberLabel,
    heading: group.heading,
    directAnswer: group.directAnswer,
    paragraphs: [...group.paragraphs],
    faqIds: [...group.faqIds],
    relatedHref:
      group.id === "faq-cost-lens"
        ? ROUTES.cost
        : group.id === "faq-recovery-life"
          ? ROUTES.recovery
          : group.id === "faq-caution"
            ? ROUTES.precautions
            : group.id === "faq-hospital"
              ? ROUTES.hospital
              : group.id === "faq-reviews"
                ? ROUTES.reviews
                : group.id === "faq-diff" || group.id === "faq-symptoms"
                  ? ROUTES.precautions
                  : ROUTES.hospital,
    relatedLabel:
      group.id === "faq-cost-lens"
        ? "임신중절수술 비용 자세히 보기"
        : group.id === "faq-recovery-life"
          ? "임신중절수술 회복기간 자세히 보기"
          : group.id === "faq-caution" || group.id === "faq-diff"
            ? "임신중절수술 주의사항 자세히 보기"
            : group.id === "faq-hospital"
              ? "임신중절수술 병원선택 기준 보기"
              : group.id === "faq-reviews"
                ? "임신중절수술 후기 확인 기준 보기"
                : group.id === "faq-symptoms"
                  ? "임신중절수술 병원선택 기준 보기"
                  : "임신중절수술 FAQ 전체 보기",
  })),
};
