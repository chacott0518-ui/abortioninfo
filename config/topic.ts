import type { ClayAccent, ContentClusterId } from "@/types/content";

export type MenuItemConfig = {
  id: ContentClusterId;
  order: number;
  numberLabel: string;
  title: string;
  description: string;
  iconKey: ContentClusterId;
  accent: ClayAccent;
};

/**
 * 신규 키워드 사이트 복제 시 이 설정과 content/pages·faqs만 교체하면 된다.
 */
export const topicConfig = {
  siteName: "임신중절수술",
  primaryKeyword: "임신중절수술",
  logoText: "임신중절수술",
  defaultCategory: "임신중절수술 정보",
  operatorName: "연세365산부인과의원",
  locale: "ko-KR",
  language: "ko",
  theme: {
    accents: {
      cost: "orange" as ClayAccent,
      recovery: "pink" as ClayAccent,
      precautions: "lime" as ClayAccent,
      hospital: "blue" as ClayAccent,
      reviews: "cyan" as ClayAccent,
      faq: "neutral" as ClayAccent,
    },
  },
  menuItems: [
    {
      id: "cost",
      order: 1,
      numberLabel: "01",
      title: "임신중절수술 비용",
      description: "비용이 달라지는 기준과 상담 전 확인사항",
      iconKey: "cost",
      accent: "orange",
    },
    {
      id: "recovery",
      order: 2,
      numberLabel: "02",
      title: "임신중절수술 회복기간",
      description: "수술 후 회복 과정과 생활 관리",
      iconKey: "recovery",
      accent: "pink",
    },
    {
      id: "precautions",
      order: 3,
      numberLabel: "03",
      title: "임신중절수술 주의사항",
      description: "수술 전후 확인해야 할 주의점",
      iconKey: "precautions",
      accent: "lime",
    },
    {
      id: "hospital",
      order: 4,
      numberLabel: "04",
      title: "임신중절수술 병원 선택",
      description: "의료진·검사·사후관리 확인 기준",
      iconKey: "hospital",
      accent: "blue",
    },
    {
      id: "reviews",
      order: 5,
      numberLabel: "05",
      title: "임신중절수술 후기",
      description: "후기를 확인할 때 주의할 부분",
      iconKey: "reviews",
      accent: "cyan",
    },
    {
      id: "faq",
      order: 6,
      numberLabel: "06",
      title: "임신중절수술 FAQ",
      description: "상담 전 자주 묻는 질문 정리",
      iconKey: "faq",
      accent: "neutral",
    },
  ] satisfies MenuItemConfig[],
  keywordMap: {
    home: [
      "임신중절수술",
      "임신중절수술 비용",
      "임신중절수술 회복기간",
      "임신중절수술 주의사항",
      "임신중절수술 병원",
    ],
    cost: [
      "임신중절수술 비용",
      "임신중절 비용",
      "임신중절수술 검사비",
      "임신중절수술 상담",
    ],
    recovery: [
      "임신중절수술 회복기간",
      "임신중절수술 후 회복",
      "임신중절수술 생활관리",
    ],
    precautions: [
      "임신중절수술 주의사항",
      "임신중절수술 전 주의사항",
      "임신중절수술 후 주의사항",
    ],
    hospital: [
      "임신중절수술 병원 선택",
      "임신중절수술 병원",
      "임신중절수술 사후관리",
    ],
    reviews: [
      "임신중절수술 후기",
      "임신중절수술 후기 확인",
      "임신중절수술 상담 후기",
    ],
    faq: [
      "임신중절수술 FAQ",
      "임신중절수술 자주 묻는 질문",
      "임신중절수술 상담",
    ],
    faqHub: [
      "임신중절수술 자주 묻는 질문",
      "임신중절수술 FAQ",
      "임신중절수술 비용",
      "임신중절수술 회복기간",
    ],
  },
} as const;
