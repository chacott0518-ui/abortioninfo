import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const PAIN_CHANGE_PAGE: ContentPage = {
  id: "painChange",
  order: 111,
  numberLabel: "11",
  slug: "임신중절수술-후-통증-변화",
  href: ROUTES.painChange,
  navLabel: "임신중절수술 후 통증 변화",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 통증은 어떻게 변화할 수 있나요?",
  heading: "임신중절수술 후 통증은 어떻게 변화할 수 있나요?",
  breadcrumbLabel: "임신중절수술 후 통증 변화",
  infoTopicLabel: "수술·마취",
  infoCategory: "surgery",
  infoCardDescription:
    "시간 경과에 따른 통증 변화 양상과 진통제·병원 확인이 필요한 신호를 안내합니다.",
  intro: [
    "임신중절수술 후 통증은 시간이 지나며 서서히 줄어드는 경우가 일반적이지만, 변화 속도와 정도는 개인에 따라 다를 수 있습니다. 통증이 전혀 없어야 한다거나 특정 시점에 반드시 사라진다고 단정할 수는 없습니다.",
    "이 글은 통증이 시간에 따라 어떻게 변화할 수 있는지, 진통제 사용과 병원 확인이 필요한 경우를 일반적인 의료정보로 정리한 안내입니다.",
  ],
  hubContextLink: {
    before: "회복 전체 과정은 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "pain-change-01",
    "pain-change-02",
    "pain-change-03",
    "pain-change-04",
    "pain-change-05",
  ],
  faqTitle: "임신중절수술 후 통증 변화 자주 묻는 질문",
  conclusion: [
    "통증은 시간이 지나며 서서히 완화되는 경우가 일반적이지만, 변화 양상은 개인마다 다를 수 있습니다. 진통제로 조절되지 않거나 갑자기 심해지는 통증은 병원에 확인하는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 통증을 진단하지 않습니다. 걱정되는 변화가 있다면 의료진과 상담해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#5E6B8B",
  accentHoverColor: "#485370",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "점진적 완화",
      text: "통증은 시간이 지나며 서서히 줄어드는 경우가 일반적입니다.",
    },
    {
      numberLabel: "02",
      title: "개인차 존재",
      text: "변화 속도와 정도는 개인의 상태에 따라 다를 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "확인이 필요한 경우",
      text: "진통제로 조절되지 않거나 갑자기 심해지면 병원 확인이 필요합니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 통증은 어떻게 변화할 수 있나요?",
    description:
      "임신중절수술 후 시간에 따른 통증 변화 양상과 진통제 사용, 병원에 확인해야 하는 신호를 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 통증",
      "임신중절수술 통증 변화",
      "임신중절수술 후 진통제",
      "임신중절수술 회복 통증",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 회복·사후관리 안내", href: YEONSEI365_LINKS.recovery },
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "pain-early",
      order: 1,
      numberLabel: "01",
      heading: "시술 직후에는 통증이 어떻게 나타나나요?",
      layout: "prose",
      directAnswer:
        "시술 직후에는 생리통과 비슷한 복부 불편감이 나타날 수 있으며, 정도는 개인마다 차이가 있습니다.",
      paragraphs: [
        "회복실에서 안내받은 진통제 사용법을 따르는 것이 일반적이며, 통증이 심하게 느껴진다면 참지 말고 의료진에게 알리는 것이 필요합니다.",
      ],
      relatedHref: ROUTES.dayProcedure,
      relatedLabel: "당일 절차 전체 흐름 보기",
    },
    {
      id: "pain-days",
      order: 2,
      numberLabel: "02",
      heading: "며칠 사이 통증은 어떻게 변화하나요?",
      layout: "prose",
      directAnswer:
        "통증은 시간이 지나며 점차 줄어드는 경우가 일반적이지만, 완전히 사라지는 시점을 특정 날짜로 단정할 수는 없습니다.",
      paragraphs: [
        "며칠이 지나도 통증이 줄지 않거나 오히려 심해진다면, 일반적인 경과와 다를 수 있어 확인이 필요합니다.",
      ],
    },
    {
      id: "pain-relief",
      order: 3,
      numberLabel: "03",
      heading: "진통제는 어떻게 사용하면 되나요?",
      layout: "prose",
      directAnswer:
        "안내받은 진통제 복용 방법과 용량을 따르는 것이 기본이며, 임의로 다른 약을 추가하기 전에 확인하는 것이 안전합니다.",
      paragraphs: [
        "처방받지 않은 약을 함께 복용해야 할 상황이라면 상호작용 가능성을 확인하기 위해 병원에 먼저 문의하는 것이 좋습니다.",
      ],
    },
    {
      id: "pain-warning",
      order: 4,
      numberLabel: "04",
      heading: "병원에 확인해야 하는 통증 신호는?",
      layout: "callout",
      directAnswer:
        "진통제로 조절되지 않는 통증, 시간이 지나며 오히려 심해지는 통증, 다른 증상과 함께 나타나는 통증은 병원 확인이 필요한 신호로 언급됩니다.",
      paragraphs: [],
      callout:
        "통증이 점점 심해지거나 진통제로도 조절되지 않으면 병원에 연락해 확인하세요.",
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "회복 중 이상증상 확인하기",
    },
  ],
};
