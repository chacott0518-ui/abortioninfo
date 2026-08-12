import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const RECOVERY_JOURNAL_PAGE: ContentPage = {
  id: "recoveryJournal",
  order: 121,
  numberLabel: "21",
  slug: "임신중절수술-후-회복-기록",
  href: ROUTES.recoveryJournal,
  navLabel: "임신중절수술 후 회복 기록",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 회복 상태를 기록해두면 어떤 점이 도움이 되나요?",
  heading: "임신중절수술 후 회복 상태를 기록해두면 어떤 점이 도움이 되나요?",
  breadcrumbLabel: "임신중절수술 후 회복 기록",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "회복 중 몸 상태를 스스로 기록하는 방법과 재방문 시 활용하는 방법을 안내합니다.",
  intro: [
    "회복 중 나타나는 출혈, 통증, 컨디션 변화를 간단히 기록해두면 재방문이나 상담에서 상태를 더 정확하게 설명하는 데 도움이 될 수 있습니다. 기록 자체가 진단을 대신하지는 않습니다.",
    "이 글은 회복 상태를 기록할 때 참고할 수 있는 항목과 방법을 정리한 의료정보입니다.",
  ],
  hubContextLink: {
    before: "회복 전반에 대한 안내는 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "recovery-journal-01",
    "recovery-journal-02",
    "recovery-journal-03",
    "recovery-journal-04",
    "recovery-journal-05",
  ],
  faqTitle: "임신중절수술 후 회복 기록 자주 묻는 질문",
  conclusion: [
    "간단한 기록은 재방문이나 상담에서 본인의 상태를 정확하게 전달하는 데 도움이 될 수 있는 실용적인 방법입니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 기록 자체가 진단이나 이상 유무 판단을 대신하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6E8B7A",
  accentHoverColor: "#547060",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "기록 항목",
      text: "출혈량, 통증 정도, 발열, 컨디션 등을 간단히 기록할 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "변화 파악",
      text: "매일 간단히 기록하면 변화 추이를 스스로 파악하는 데 도움이 됩니다.",
    },
    {
      numberLabel: "03",
      title: "상담 활용",
      text: "재방문·상담 시 기록을 보여주면 상태 설명이 더 정확해질 수 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 회복 상태를 기록해두면 어떤 점이 도움이 되나요?",
    description:
      "임신중절수술 후 회복 상태를 기록하는 방법과 재방문·상담에서 활용하는 방법을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 회복 기록",
      "임신중절수술 회복 일지",
      "임신중절수술 증상 기록",
      "임신중절수술 재방문 준비",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 회복·사후관리 안내", href: YEONSEI365_LINKS.recovery },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "journal-what",
      order: 1,
      numberLabel: "01",
      heading: "무엇을 기록하면 좋을까요?",
      layout: "checklist",
      directAnswer:
        "출혈량과 색, 통증 정도, 체온, 컨디션 변화 등을 날짜별로 간단히 기록해두면 도움이 될 수 있습니다.",
      paragraphs: [],
      bullets: [
        "날짜별 출혈량·색 변화",
        "통증 정도(약함/보통/심함 등)",
        "체온 확인 결과",
        "전반적인 컨디션·피로감",
      ],
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "회복 중 이상증상 확인하기",
    },
    {
      id: "journal-how",
      order: 2,
      numberLabel: "02",
      heading: "어떻게 기록하면 부담 없이 이어갈 수 있나요?",
      layout: "prose",
      directAnswer:
        "메모 앱이나 노트에 짧은 문장으로 매일 한두 줄만 남겨도 충분하며, 완벽하게 기록하려고 부담을 가질 필요는 없습니다.",
      paragraphs: [],
    },
    {
      id: "journal-use",
      order: 3,
      numberLabel: "03",
      heading: "기록을 상담에서 어떻게 활용하나요?",
      layout: "prose",
      directAnswer:
        "재방문이나 이상증상으로 문의할 때 기록을 함께 보여주면, 변화 추이를 의료진에게 더 정확하게 전달하는 데 도움이 될 수 있습니다.",
      paragraphs: [],
    },
    {
      id: "journal-limit",
      order: 4,
      numberLabel: "04",
      heading: "기록만으로 판단해도 되나요?",
      layout: "callout",
      directAnswer:
        "기록은 상태를 파악하는 참고 도구일 뿐 진단을 대신하지 않습니다. 걱정되는 변화가 있다면 기록과 별개로 병원에 확인하는 것이 필요합니다.",
      paragraphs: [],
      callout: "기록상 변화가 크게 느껴진다면 스스로 판단하지 말고 병원에 문의하세요.",
    },
  ],
};
