import { CONTACT } from "@/config/contact";

/**
 * 문의·제휴 CTA 설정.
 * mode: partnership(기본) | sponsor(광고주 확정 후)
 */
export const ADVERTISING = {
  mode: "partnership" as "partnership" | "sponsor",
  top: {
    label: "임신중절수술 정보 안내",
    headline: "상담 전 확인이 필요하신가요?",
    button: "카톡문의",
  },
  bottom: {
    label: "상담 및 문의",
    headline: "임신중절수술 관련 상담이 필요하신가요?",
    button: "카톡문의",
  },
  get ctaUrl() {
    return CONTACT.kakaoUrl;
  },
  desktopLabel: "카톡문의",
  get desktopUrl() {
    return CONTACT.kakaoUrl;
  },
  mobileKakaoLabel: "카톡문의",
  mobilePhoneLabel: "02-585-3650",
  get mobilePhoneUrl() {
    return CONTACT.phoneNumber;
  },
  mobilePhoneDisplay: "상담전화 02-585-3650",
} as const;
