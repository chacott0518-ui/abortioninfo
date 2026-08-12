import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const MINOR_CONSULT_PAGE: ContentPage = {
  id: "minorConsult",
  order: 116,
  numberLabel: "16",
  slug: "미성년자-임신중절수술-상담",
  href: ROUTES.minorConsult,
  navLabel: "미성년자 임신중절수술 상담",
  categoryLabel: SITE.categoryLabel,
  h1: "미성년자 임신중절수술 상담 전 무엇을 확인해야 하나요?",
  heading: "미성년자 임신중절수술 상담 전 무엇을 확인해야 하나요?",
  breadcrumbLabel: "미성년자 임신중절수술 상담",
  infoTopicLabel: "상담·준비",
  infoCategory: "consult",
  infoCardDescription:
    "미성년자가 상담을 고려할 때 확인이 필요한 사항과 도움을 받을 수 있는 방법을 안내합니다.",
  intro: [
    "미성년자의 임신중절수술 상담은 법적·보호자 관련 사항이 함께 고려되어야 하는 민감한 영역입니다. 정확한 법적 기준과 절차는 이 글에서 임의로 단정하지 않으며, 공식 기관과 의료기관을 통해 확인이 필요합니다.",
    "이 글은 상담을 준비하는 과정에서 일반적으로 도움이 되는 방향을 안내하는 의료정보이며, 법률 자문이나 개인의 진료 가능 여부를 대신 결정하지 않습니다.",
  ],
  hubContextLink: {
    before: "전반적인 상담 준비는 ",
    anchor: "임신중절수술 안내",
    after: "에서도 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "minor-consult-01",
    "minor-consult-02",
    "minor-consult-03",
    "minor-consult-04",
    "minor-consult-05",
  ],
  faqTitle: "미성년자 임신중절수술 상담 자주 묻는 질문",
  conclusion: [
    "미성년자의 상담·진료와 관련된 법적 기준, 보호자 동의 범위는 공식 근거가 명확하지 않은 내용을 임의로 단정하지 않았습니다. 정확한 절차는 상담을 원하는 의료기관과 관련 공공기관을 통해 확인이 필요합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 법률 자문이나 개별 진료 가능 여부 판단을 대신하지 않습니다. 혼자 판단하기 어렵다면 신뢰할 수 있는 성인이나 전문기관에 도움을 요청하는 것도 방법입니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#5E7A5E",
  accentHoverColor: "#486048",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "확인 필요 영역",
      text: "법적 기준과 보호자 동의 관련 사항은 공식 기관을 통해 확인이 필요합니다.",
    },
    {
      numberLabel: "02",
      title: "상담 준비",
      text: "건강정보와 궁금한 점을 미리 정리해 두면 상담에 도움이 됩니다.",
    },
    {
      numberLabel: "03",
      title: "도움 요청",
      text: "혼자 판단하기 어렵다면 신뢰할 수 있는 성인이나 전문기관에 도움을 요청할 수 있습니다.",
    },
  ],
  seo: {
    title: "미성년자 임신중절수술 상담 전 무엇을 확인해야 하나요?",
    description:
      "미성년자가 임신중절수술 상담을 고려할 때 확인이 필요한 사항과 도움을 받을 수 있는 방법을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "미성년자 임신중절수술",
      "미성년자 임신중절수술 상담",
      "청소년 임신중절수술",
      "미성년자 산부인과 상담",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
  ],
  officialSources: [
    ...INFO_GUIDE_OFFICIAL_SOURCES,
    {
      organization: "국가법령정보센터",
      title: "미성년자 진료 관련 법적 기준 확인 필요",
      url: "https://www.law.go.kr",
    },
  ],
  sections: [
    {
      id: "minor-legal",
      order: 1,
      numberLabel: "01",
      heading: "법적으로 확인이 필요한 부분은 무엇인가요?",
      layout: "callout",
      directAnswer:
        "미성년자의 진료 동의, 보호자 관련 절차 등 법적 기준은 이 글에서 임의로 단정하지 않으며, 공식 기관과 의료기관을 통해 확인이 필요합니다.",
      paragraphs: [
        "인터넷의 일반적인 설명을 그대로 본인 상황에 적용하기보다, 국가법령정보센터나 상담을 원하는 의료기관에 직접 확인하는 것이 정확합니다.",
      ],
      callout: "법적 기준·보호자 동의 관련 사항은 출처 확인 필요 상태이며, 공식 기관을 통한 확인이 필요합니다.",
    },
    {
      id: "minor-prepare",
      order: 2,
      numberLabel: "02",
      heading: "상담 전 어떤 정보를 정리해 두면 좋을까요?",
      layout: "checklist",
      directAnswer:
        "마지막 생리일, 현재 증상, 복용 중인 약, 궁금한 점을 미리 정리해 두면 상담에 도움이 될 수 있습니다.",
      paragraphs: [],
      bullets: [
        "마지막 생리 시작일",
        "현재 느끼는 증상",
        "복용 중인 약",
        "상담에서 확인하고 싶은 질문",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내 보기",
    },
    {
      id: "minor-support",
      order: 3,
      numberLabel: "03",
      heading: "혼자 결정하기 어렵다면 어떻게 해야 하나요?",
      layout: "prose",
      directAnswer:
        "신뢰할 수 있는 성인이나 관련 상담 기관에 먼저 도움을 요청하는 것도 방법이 될 수 있습니다.",
      paragraphs: [
        "혼자 모든 것을 판단하려 하기보다, 상황을 이해하고 도와줄 수 있는 사람이나 기관을 찾는 것이 부담을 줄이는 데 도움이 될 수 있습니다.",
      ],
    },
    {
      id: "minor-hospital-check",
      order: 4,
      numberLabel: "04",
      heading: "병원에는 무엇을 먼저 문의하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "미성년자 상담 진행 방식, 필요한 서류나 동의 절차를 상담 예약 시 미리 문의해 확인하는 것이 도움이 됩니다.",
      paragraphs: [
        "병원마다 안내 방식이 다를 수 있으므로, 이 글의 일반적인 설명보다 실제 상담을 원하는 병원의 안내를 우선 따르는 것이 정확합니다.",
      ],
    },
  ],
};
