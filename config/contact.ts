import type { ContactConfig } from "@/types/contact";

/**
 * 문의·연락·위치 설정. 헤더, 모바일 하단 바, CTA, 지도에서 이 값을 읽는다.
 */
export const CONTACT: ContactConfig = {
  enabled: true,
  mode: "medical",
  kakaoEnabled: true,
  kakaoUrl:
    process.env.NEXT_PUBLIC_KAKAO_AD_URL?.trim() ||
    "http://pf.kakao.com/_TpaBj/chat",
  kakaoLabel: "카톡문의",
  phoneEnabled: true,
  phoneNumber:
    process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "tel:02-585-3650",
  phoneLabel: "02-585-3650",
  formEnabled: false,
  formLabel: "문의하기",
  clinicName: "연세365산부인과의원",
  address: "서울특별시 관악구 과천대로 939, 3층",
  locationNote: "사당역 4번 출구 인근",
  naverMapUrl:
    process.env.NEXT_PUBLIC_NAVER_MAP_URL?.trim() ||
    "https://map.naver.com/p/search/%EC%97%B0%EC%84%B8365%EC%82%B0%EB%B6%80%EC%9D%B8%EA%B3%BC%EC%9D%98%EC%9B%90",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=%EC%97%B0%EC%84%B8365%EC%82%B0%EB%B6%80%EC%9D%B8%EA%B3%BC%EC%9D%98%EC%9B%90&output=embed",
};
