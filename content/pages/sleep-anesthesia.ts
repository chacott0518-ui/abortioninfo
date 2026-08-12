import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH2_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const SLEEP_ANESTHESIA_PAGE: ContentPage = {
  id: "sleepAnesthesia",
  order: 104,
  numberLabel: "04",
  slug: "임신중절수술-수면마취",
  href: ROUTES.sleepAnesthesia,
  navLabel: "임신중절수술 수면마취",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 수면마취, 무엇을 확인해야 하나요?",
  heading: "임신중절수술 수면마취, 무엇을 확인해야 하나요?",
  breadcrumbLabel: "임신중절수술 수면마취",
  infoTopicLabel: "수술·마취",
  infoCategory: "surgery",
  infoCardDescription:
    "수면마취 전 확인이 필요한 건강정보와 마취 후 주의할 점을 안내합니다.",
  intro: [
    "수면마취는 시술 중 의식과 통증을 조절하기 위한 방법 중 하나이며, 적용 여부와 방식은 개인의 건강상태와 의료진의 판단에 따라 달라질 수 있습니다. 마취라는 단어만으로 모든 병원·모든 사람에게 동일한 방식이 적용된다고 단정하기는 어렵습니다.",
    "이 글은 마취 전에 확인해야 할 정보와 마취 후 주의할 점을 일반적인 의료정보로 정리한 안내이며, 개인의 마취 가능 여부나 방식을 판단하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사와 비용 등 전체 흐름은 ",
    anchor: "임신중절수술 종합 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  faqIds: [
    "sleep-anesthesia-01",
    "sleep-anesthesia-02",
    "sleep-anesthesia-03",
    "sleep-anesthesia-04",
    "sleep-anesthesia-05",
  ],
  faqTitle: "임신중절수술 수면마취 자주 묻는 질문",
  conclusion: [
    "수면마취는 개인의 건강상태에 따라 적용 방식과 주의사항이 달라질 수 있는 영역입니다. 복용 약, 알레르기, 기저질환, 금식 여부를 정확히 알리는 것이 안전한 진행에 도움이 됩니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 마취 가능 여부나 방식을 판단하지 않습니다. 정확한 내용은 마취 상담을 담당하는 의료진에게 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#7A6B8B",
  accentHoverColor: "#5F5470",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "마취 전 정보 확인",
      text: "복용 약, 알레르기, 기저질환, 금식 여부 등을 미리 알려야 합니다.",
    },
    {
      numberLabel: "02",
      title: "개인별 적용 여부",
      text: "마취 방식은 개인 건강상태와 의료진 판단에 따라 달라질 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "마취 후 주의",
      text: "운전, 중요한 결정, 격한 활동은 마취 후 당일 피하는 것이 일반적입니다.",
    },
  ],
  seo: {
    title: "임신중절수술 수면마취, 무엇을 확인해야 하나요?",
    description:
      "임신중절수술 수면마취 전 확인이 필요한 건강정보와 마취 후 주의할 점을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 수면마취",
      "임신중절수술 마취",
      "중절수술 수면마취",
      "임신중절수술 마취 방법",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    {
      label: "연세365산부인과의원 임신중절클리닉",
      href: YEONSEI365_LINKS.clinic,
    },
    {
      label: "연세365산부인과의원 수술 방법 안내",
      href: YEONSEI365_LINKS.method,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "sleep-what",
      order: 1,
      numberLabel: "01",
      heading: "수면마취란 무엇인가요?",
      layout: "prose",
      directAnswer:
        "수면마취는 시술 중 의식 수준을 낮추어 통증과 불안을 줄이기 위해 사용되는 마취 방법 중 하나입니다.",
      paragraphs: [
        "마취의 구체적인 방식과 약제는 의료기관과 개인 상태에 따라 다를 수 있습니다. 이 글에서는 특정 약제나 병원의 방식을 단정하지 않고 일반적인 개념만 안내합니다.",
      ],
    },
    {
      id: "sleep-before-check",
      order: 2,
      numberLabel: "02",
      heading: "마취 전 확인이 필요한 이유는 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "복용 중인 약, 알레르기, 기저질환, 최근 건강상태, 금식 여부는 마취 계획을 세우는 데 참고가 되는 정보입니다.",
      paragraphs: [
        "이 정보들은 마취 방법과 주의사항을 결정하는 데 함께 고려될 수 있으므로 빠짐없이 알리는 것이 좋습니다.",
      ],
      bullets: [
        "복용 중인 약과 건강기능식품",
        "약물·마취 관련 알레르기 이력",
        "심장·호흡기 등 기저질환",
        "과거 마취 경험과 이상반응 여부",
        "금식 안내 준수 여부",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내 보기",
    },
    {
      id: "sleep-decision",
      order: 3,
      numberLabel: "03",
      heading: "마취 방법은 어떻게 결정되나요?",
      layout: "prose",
      directAnswer:
        "마취 방법은 개인의 건강상태, 병력, 시술 방법 등을 고려해 의료진이 판단하며, 특정 방법이 모든 사람에게 동일하게 적용된다고 단정할 수 없습니다.",
      paragraphs: [
        "온라인에서 접하는 특정 마취 방식 설명을 본인에게 그대로 적용하지 않는 것이 안전합니다. 궁금한 점은 마취 상담 과정에서 직접 질문하는 것이 정확합니다.",
      ],
    },
    {
      id: "sleep-after-care",
      order: 4,
      numberLabel: "04",
      heading: "마취 후 주의해야 할 점은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "마취 후 당일에는 직접 운전을 피하고, 중요한 결정이나 격한 활동을 미루며, 어지럼이나 졸림이 남아있는지 스스로 확인하는 것이 일반적으로 권장됩니다.",
      paragraphs: [
        "회복 정도는 개인차가 있으므로 회복실에서 안내받은 시간과 기준을 따르는 것이 중요합니다.",
      ],
      bullets: [
        "당일 직접 운전하지 않기",
        "보호자·동행인과 함께 귀가하기",
        "중요한 의사결정 미루기",
        "충분히 휴식하기",
        "어지럼·메스꺼움이 남아있는지 확인하기",
      ],
    },
    {
      id: "sleep-warning",
      order: 5,
      numberLabel: "05",
      heading: "마취 관련 이상반응이 걱정된다면 어떻게 하나요?",
      layout: "callout",
      directAnswer:
        "호흡 곤란, 심한 어지럼, 의식 저하 등 평소와 다른 반응이 있다면 스스로 판단하지 말고 즉시 의료진에게 알려야 합니다.",
      paragraphs: [
        "회복실에 머무는 동안 나타나는 변화는 관찰의 대상이므로, 불편한 점이 있다면 참지 말고 바로 알리는 것이 중요합니다.",
      ],
      callout:
        "호흡 곤란, 심한 어지럼, 의식 저하 등이 느껴지면 즉시 의료진에게 알리세요.",
      relatedHref: ROUTES.dayProcedure,
      relatedLabel: "당일 절차 전체 흐름 보기",
    },
  ],
};
