import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { FAQ_QUESTIONS_30_GROUPS } from "@/content/faqs/questions-30";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.faqHub;

export const FAQ_QUESTIONS_PAGE: ContentPage = {
  id: "faqHub",
  order: 7,
  numberLabel: "07",
  slug: "임신중절수술-자주-묻는-질문",
  href: ROUTES.faq,
  navLabel: "임신중절수술 자주 묻는 질문",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 자주 묻는 질문 30가지",
  breadcrumbLabel: "임신중절수술 자주 묻는 질문",
  heading: "임신중절수술 자주 묻는 질문 30가지",
  intro: [
    "임신 상태 확인부터 검사, 비용, 회복기간, 주의사항과 병원 선택까지 자주 묻는 내용을 분야별로 정리했습니다. 각 답변은 일반적인 건강정보이며 개인의 검사 결과와 진료 상황에 따라 달라질 수 있습니다.",
    "특정 진료 방법을 모든 사람에게 권장하지 않으며, 의료기관 밖에서 약물을 구매·복용하는 것은 위험할 수 있습니다. 최종 확인은 산부인과 의료진과의 상담에서 받으세요.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-27",
  faqIds: [],
  faqTitle: "임신중절수술 자주 묻는 질문 30가지",
  conclusion: [
    "같은 질문이라도 임신 주수와 건강 상태에 따라 확인해야 할 내용이 달라질 수 있습니다. 관심 주제의 상세 안내와 검사·상담을 함께 참고하세요.",
  ],
  thumbnail: media.thumbnail,
  topImages: [],
  bodyImage: null,
  heroImage: media.thumbnail,
  secondaryImage: null,
  repeatImage: null,
  repeatImageBeforeSectionNumber: null,
  inlineImage: media.thumbnail,
  accentColor: media.accentColor,
  accentHoverColor: media.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: false,
  showFaqHub: false,
  seo: {
    title: "임신중절수술 자주 묻는 질문 30가지 | 비용·회복·주의사항",
    description:
      "임신 상태 확인, 검사, 비용, 회복기간, 수술 전후 주의사항과 병원 선택에 관한 자주 묻는 질문을 분야별로 확인해보세요.",
    keywords: [
      "임신중절수술 자주 묻는 질문",
      "임신중절수술 FAQ 30가지",
      "임신중절수술 비용 질문",
      "임신중절수술 회복기간 질문",
      "임신중절수술 주의사항 질문",
      "임신중절수술 병원 선택 질문",
    ],
    ogImage: media.thumbnail.src,
    socialImage: "/images/임신중절수술/임신중절수술.webp",
    category: SITE.categoryLabel,
  },
  sections: FAQ_QUESTIONS_30_GROUPS.map((group) => ({
    id: group.id,
    order: Number(group.numberLabel),
    numberLabel: group.numberLabel,
    heading: group.heading,
    paragraphs: [],
    faqIds: [...group.faqIds],
  })),
};
