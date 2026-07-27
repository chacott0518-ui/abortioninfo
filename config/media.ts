import type { ContentClusterId, ContentImage } from "@/types/content";

export type TopicMedia = {
  id: ContentClusterId;
  thumbnail: ContentImage;
  secondaryImage: ContentImage;
  imageAlt: string;
  secondaryImageAlt: string;
  accentColor: string;
  accentHoverColor: string;
  mobileCardDescription: string;
};

function img(src: string, alt: string, w: number, h: number): ContentImage {
  return { src, alt, width: w, height: h };
}

const CARD_BASE = "/images/임신중절수술/목차카드";
const BODY_BASE = "/images/임신중절수술/본문";
const MAIN_IMAGE = "/images/임신중절수술/임신중절수술.webp";
const MAIN_ALT = "임신중절수술 비용 주수 계산 주의사항 병원 안내";

/** 실제 픽셀: 목차카드 1254×1254, 본문 1080×10800, 메인 1080×12150 */
const CARD_W = 1254;
const CARD_H = 1254;
const BODY_W = 1080;
const BODY_H = 10800;
const MAIN_W = 1080;
const MAIN_H = 12150;

export const TOPIC_MEDIA: Record<ContentClusterId, TopicMedia> = {
  cost: {
    id: "cost",
    imageAlt: "임신중절수술 비용 확인 기준 안내",
    secondaryImageAlt: "임신중절수술 비용 상세 안내",
    accentColor: "#688B00",
    accentHoverColor: "#496700",
    mobileCardDescription: "비용이 달라지는 기준 정리",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-비용.webp`,
      "임신중절수술 비용 확인 기준 안내",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-비용.webp`,
      "임신중절수술 비용 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
  recovery: {
    id: "recovery",
    imageAlt: "임신중절수술 회복기간과 생활 관리 안내",
    secondaryImageAlt: "임신중절수술 회복기간 상세 안내",
    accentColor: "#F26916",
    accentHoverColor: "#C84D08",
    mobileCardDescription: "회복과 생활 관리 안내",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-회복기간.webp`,
      "임신중절수술 회복기간과 생활 관리 안내",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-회복기간.webp`,
      "임신중절수술 회복기간 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
  precautions: {
    id: "precautions",
    imageAlt: "임신중절수술 전후 주의사항 안내",
    secondaryImageAlt: "임신중절수술 주의사항 상세 안내",
    accentColor: "#1758C9",
    accentHoverColor: "#0D3F99",
    mobileCardDescription: "수술 전후 주의점 정리",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-주의사항.webp`,
      "임신중절수술 전후 주의사항 안내",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-주의사항.webp`,
      "임신중절수술 주의사항 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
  hospital: {
    id: "hospital",
    imageAlt: "임신중절수술 병원 선택 비교 기준",
    secondaryImageAlt: "임신중절수술 병원 선택 상세 안내",
    accentColor: "#078D93",
    accentHoverColor: "#056A70",
    mobileCardDescription: "검사와 사후관리 비교",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-병원선택.webp`,
      "임신중절수술 병원 선택 비교 기준",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-병원선택.webp`,
      "임신중절수술 병원 선택 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
  reviews: {
    id: "reviews",
    imageAlt: "임신중절수술 후기 확인 기준",
    secondaryImageAlt: "임신중절수술 후기 상세 안내",
    accentColor: "#DF3E73",
    accentHoverColor: "#B32656",
    mobileCardDescription: "후기 확인 시 주의점",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-후기.webp`,
      "임신중절수술 후기 확인 기준",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-후기.webp`,
      "임신중절수술 후기 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
  faq: {
    id: "faq",
    imageAlt: "임신중절수술 자주 묻는 질문 안내",
    secondaryImageAlt: "임신중절수술 FAQ 상세 안내",
    accentColor: "#F1683D",
    accentHoverColor: "#C94B28",
    mobileCardDescription: "자주 묻는 질문 정리",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-FAQ.webp`,
      "임신중절수술 자주 묻는 질문 안내",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-FAQ.webp`,
      "임신중절수술 FAQ 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
  faqHub: {
    id: "faqHub",
    imageAlt: "임신중절수술 자주 묻는 질문 안내",
    secondaryImageAlt: "임신중절수술 FAQ 상세 안내",
    accentColor: "#F1683D",
    accentHoverColor: "#C94B28",
    mobileCardDescription: "자주 묻는 질문 모음",
    thumbnail: img(
      `${CARD_BASE}/임신중절수술-FAQ.webp`,
      "임신중절수술 자주 묻는 질문 안내",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BODY_BASE}/임신중절수술-FAQ.webp`,
      "임신중절수술 FAQ 상세 안내",
      BODY_W,
      BODY_H,
    ),
  },
};

/** 메인 세로 이미지 (실제 1080×12150) */
export const HOME_FEATURE_IMAGE: ContentImage = img(
  MAIN_IMAGE,
  MAIN_ALT,
  MAIN_W,
  MAIN_H,
);

export function getTopicMedia(id: ContentClusterId): TopicMedia {
  return TOPIC_MEDIA[id];
}
