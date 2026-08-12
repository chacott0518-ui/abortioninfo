import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH3_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const RELIABLE_INFO_SOURCES_PAGE: ContentPage = {
  id: "reliableInfoSources",
  order: 120,
  numberLabel: "20",
  slug: "임신중절수술-신뢰할-수-있는-정보-확인",
  href: ROUTES.reliableInfoSources,
  navLabel: "임신중절수술 신뢰할 수 있는 정보 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 관련 정보, 어디에서 확인해야 신뢰할 수 있나요?",
  heading: "임신중절수술 관련 정보, 어디에서 확인해야 신뢰할 수 있나요?",
  breadcrumbLabel: "임신중절수술 신뢰할 수 있는 정보 확인",
  infoTopicLabel: "이해·정보",
  infoCategory: "understand",
  infoCardDescription:
    "온라인 정보를 검토할 때 확인하면 좋은 기준과 공식 출처를 안내합니다.",
  intro: [
    "임신중절수술과 관련된 정보는 온라인에서 다양한 형태로 접할 수 있지만, 출처와 최신성에 따라 정확도가 다를 수 있습니다. 특정 게시물의 내용을 그대로 본인 상황에 적용하기보다 정보의 출처를 함께 확인하는 것이 중요합니다.",
    "이 글은 신뢰할 수 있는 정보를 구분할 때 참고할 수 있는 기준을 정리한 의료정보입니다.",
  ],
  hubContextLink: {
    before: "전체적인 정보 구성은 ",
    anchor: "임신중절수술 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH3_PUBLISHED_AT,
  faqIds: [
    "reliable-info-sources-01",
    "reliable-info-sources-02",
    "reliable-info-sources-03",
    "reliable-info-sources-04",
    "reliable-info-sources-05",
  ],
  faqTitle: "임신중절수술 신뢰할 수 있는 정보 확인 자주 묻는 질문",
  conclusion: [
    "온라인 정보는 참고 자료로 활용하되, 개인의 상태와 관련된 최종 판단은 의료기관 상담을 통해 확인하는 것이 안전합니다.",
    "이 글은 일반적인 정보 이해를 돕기 위한 의료정보이며 특정 게시물이나 사이트의 정확성을 보증하지 않습니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6B7A8B",
  accentHoverColor: "#546070",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "출처 확인",
      text: "공공기관·의학 학회 등 출처가 명확한 자료인지 확인하는 것이 중요합니다.",
    },
    {
      numberLabel: "02",
      title: "작성·수정일 확인",
      text: "정보가 언제 작성·수정되었는지 확인하면 최신성을 가늠할 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "단정적 표현 주의",
      text: "'100% 확실', '보장' 같은 단정적 표현이 많다면 신중하게 볼 필요가 있습니다.",
    },
  ],
  seo: {
    title: "임신중절수술 관련 정보, 어디에서 확인해야 신뢰할 수 있나요?",
    description:
      "임신중절수술 관련 온라인 정보를 검토할 때 확인하면 좋은 기준과 공식 출처를 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 정보 확인",
      "임신중절수술 신뢰할 수 있는 정보",
      "임신중절수술 공식 정보",
      "임신중절수술 정보 출처",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    { label: "연세365산부인과의원 임신중절클리닉", href: YEONSEI365_LINKS.clinic },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "reliable-source-check",
      order: 1,
      numberLabel: "01",
      heading: "어떤 출처를 우선 참고하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "공공기관, 의학 학회, 공식 임상 가이드라인처럼 출처가 명확한 자료를 우선 참고하는 것이 일반적으로 권장됩니다.",
      paragraphs: [
        "개인 블로그나 커뮤니티 후기는 경험을 이해하는 데 참고가 될 수 있지만, 의료적 사실 확인의 1차 근거로 삼기는 어렵습니다.",
      ],
    },
    {
      id: "reliable-date-check",
      order: 2,
      numberLabel: "02",
      heading: "정보의 작성·수정일도 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "네. 의료정보는 시간이 지나며 업데이트될 수 있어, 작성일이 오래된 정보는 최신 기준과 다를 수 있습니다.",
      paragraphs: [],
    },
    {
      id: "reliable-warning-signs",
      order: 3,
      numberLabel: "03",
      heading: "주의해야 할 표현이나 콘텐츠는 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "'100% 성공', '무조건 가능', '가장 안전' 같은 단정적·과장된 표현이 많다면 정보를 신중하게 볼 필요가 있습니다.",
      paragraphs: [],
      bullets: [
        "특정 결과를 보장하는 표현",
        "가격·성공률을 과장하는 광고성 문구",
        "출처가 표기되지 않은 통계",
        "작성일·수정일이 없는 게시물",
      ],
    },
    {
      id: "reliable-final-check",
      order: 4,
      numberLabel: "04",
      heading: "결국 최종 판단은 어떻게 해야 하나요?",
      layout: "callout",
      directAnswer:
        "온라인 정보는 참고 자료로 활용하고, 개인의 상태에 대한 최종 판단은 의료기관 상담을 통해 확인하는 것이 안전합니다.",
      paragraphs: [],
      callout: "온라인 정보만으로 진료·시술 여부를 스스로 판단하지 말고 상담을 통해 확인하세요.",
    },
  ],
};
