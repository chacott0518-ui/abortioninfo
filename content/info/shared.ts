/** 신규 의료정보 글 공통 공식 출처 (본문 참고용) */
export const INFO_GUIDE_OFFICIAL_SOURCES = [
  {
    organization: "World Health Organization (WHO)",
    title: "Abortion care guideline, second edition / Executive summary",
    url: "https://www.who.int/publications/i/item/B09573",
  },
  {
    organization:
      "American College of Obstetricians and Gynecologists (ACOG)",
    title: "Abortion Care",
    url: "https://www.acog.org/womens-health/faqs/induced-abortion",
  },
] as const;

export const YEONSEI365_LINKS = {
  clinic: "https://www.yeonsei365.com/abortion",
  surgery: "https://www.yeonsei365.com/abortion/surgery",
  method: "https://www.yeonsei365.com/abortion/method",
  cost: "https://www.yeonsei365.com/abortion/cost",
  recovery: "https://www.yeonsei365.com/abortion/recovery",
} as const;

/** 신규 의료정보 가이드 최초 발행일 (1차 배치: 전 검사·주수 확인) */
export const INFO_GUIDE_PUBLISHED_AT = "2026-08-10";

/** 2차 배치 발행일 (수술·마취/회복·관리/상담·준비 신규 6편) */
export const INFO_GUIDE_BATCH2_PUBLISHED_AT = "2026-08-12";

/** 정보허브 카테고리 라벨·아이콘 */
export const INFO_CATEGORIES = {
  exam: { label: "검사·진단", icon: "🔎" },
  consult: { label: "상담·준비", icon: "📋" },
  surgery: { label: "수술·마취", icon: "🩺" },
  recovery: { label: "회복·관리", icon: "🌿" },
  hospital: { label: "병원·정보", icon: "📖" },
  understand: { label: "이해·정보", icon: "💡" },
} as const;

/** 3차 배치 발행일 (이해·정보/회복 확장 신규 16편) */
export const INFO_GUIDE_BATCH3_PUBLISHED_AT = "2026-08-12";
