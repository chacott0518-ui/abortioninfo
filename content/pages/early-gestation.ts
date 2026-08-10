import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_PUBLISHED_AT,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const EARLY_GESTATION_PAGE: ContentPage = {
  id: "earlyGestation",
  order: 102,
  numberLabel: "02",
  slug: "임신초기중절수술-주수-확인",
  href: ROUTES.earlyGestation,
  navLabel: "임신초기중절수술 주수 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "임신초기중절수술, 주수와 건강상태는 어떻게 확인하나요?",
  heading: "임신초기중절수술, 주수와 건강상태는 어떻게 확인하나요?",
  breadcrumbLabel: "임신초기중절수술 주수 확인",
  infoTopicLabel: "주수·건강상태",
  infoCardDescription:
    "임신 초기라는 표현만으로 방법을 단정하지 않고, 주수와 건강상태를 함께 확인하는 관점을 안내합니다.",
  intro: [
    "‘임신 초기’라는 표현만으로 개인에게 적용되는 진료 방법이나 가능 여부를 단정하기는 어렵습니다. 같은 표현이라도 자료마다 가리키는 범위가 다를 수 있고, 실제로는 임신 주수와 현재 건강상태를 함께 평가해야 하기 때문입니다.",
    "이 글은 예상 주수를 어떻게 가늠하는지, 상담에서 어떤 질문을 하면 좋은지, 인터넷 주수표를 볼 때 무엇을 주의하면 좋은지를 일반적인 의료정보로 정리합니다. 개인의 진단이나 진료 결정을 대신하지 않습니다.",
  ],
  hubContextLink: {
    before: "가능 시기와 검사·비용의 큰 흐름은 ",
    anchor: "임신중절수술 안내",
    after: "에서 함께 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_PUBLISHED_AT,
  faqIds: [
    "early-gestation-01",
    "early-gestation-02",
    "early-gestation-03",
    "early-gestation-04",
    "early-gestation-05",
  ],
  faqTitle: "임신초기중절수술 자주 묻는 질문",
  conclusion: [
    "임신 초기라는 표현은 참고 개념일 수 있으나, 개인에게 적용되는 주수와 건강상태는 상담과 필요한 평가를 통해 확인해야 합니다. 인터넷의 주수표나 일반 설명을 그대로 적용하지 않는 편이 좋습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단이나 진료를 대신하지 않습니다. 임신 주수, 증상, 병력 등에 따라 필요한 검사와 진료 방법이 달라질 수 있으므로 개인별 판단은 의료진과 상담해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#6B7DB3",
  accentHoverColor: "#536392",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "생리일 참고",
      text: "마지막 생리일은 예상 주수 확인에 참고할 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "개인별 확인",
      text: "주수와 임신 상태는 개인별로 확인이 필요합니다.",
    },
    {
      numberLabel: "03",
      title: "증상·병력",
      text: "증상, 병력, 복용 약을 함께 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "방법 평가",
      text: "적용 가능한 방법은 의료진 평가가 필요합니다.",
    },
    {
      numberLabel: "05",
      title: "주수표 주의",
      text: "인터넷상의 특정 주수표를 개인에게 그대로 적용하지 않습니다.",
    },
  ],
  seo: {
    title: "임신초기중절수술, 주수와 건강상태는 어떻게 확인하나요?",
    description:
      "임신초기중절수술에서 주수와 건강상태를 어떻게 확인하는지, 상담 질문과 인터넷 주수표를 볼 때 주의점을 일반적인 의료정보로 안내합니다.",
    keywords: [
      "임신초기중절수술",
      "임신 초기 중절수술",
      "초기 임신중절수술",
      "임신중절수술 주수",
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
    {
      label: "연세365산부인과의원 수술 절차 안내",
      href: YEONSEI365_LINKS.surgery,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "early-estimate",
      order: 1,
      numberLabel: "01",
      heading: "예상 임신 주수는 어떻게 계산하나요?",
      layout: "steps",
      directAnswer:
        "마지막 생리 시작일과 생리주기를 확인하면 예상 주수를 가늠할 수 있지만, 예상값과 실제 진료 결과에는 차이가 있을 수 있습니다.",
      paragraphs: [
        "자가 계산은 상담 준비에 도움이 될 수 있는 참고 과정입니다. 계산 결과만으로 진료 방법을 결정하지 않는 것이 중요합니다.",
      ],
      steps: [
        {
          label: "생리 시작일 확인",
          text: "마지막 생리 시작일을 기준으로 예상 경과를 가늠합니다.",
        },
        {
          label: "생리주기 참고",
          text: "평소 주기가 규칙적인지, 최근에 변화가 있었는지 함께 확인합니다.",
        },
        {
          label: "진료에서 재확인",
          text: "예상값과 실제 평가가 다를 수 있으므로 의료진과 확인합니다.",
        },
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "임신중절수술 전 검사 안내 보기",
    },
    {
      id: "early-health",
      order: 2,
      numberLabel: "02",
      heading: "왜 건강상태를 함께 확인하나요?",
      layout: "info-grid",
      directAnswer:
        "현재 증상, 복용 약, 알레르기, 기존 질환, 과거 산부인과·수술력은 상담과 평가에 필요한 기본 정보입니다.",
      paragraphs: [
        "주수만이 아니라 현재 몸 상태를 함께 알려야 필요한 검사와 주의점을 더 정확히 논의할 수 있습니다.",
      ],
      infoBlocks: [
        { label: "현재 증상", text: "복통, 출혈, 어지럼 등 변화를 구체적으로 알립니다." },
        { label: "복용 약", text: "처방약과 일상적으로 복용하는 약을 정리합니다." },
        { label: "알레르기", text: "약물·기타 알레르기 이력을 함께 확인합니다." },
        { label: "기존 질환", text: "만성 질환이나 치료 중인 상태를 알립니다." },
        {
          label: "과거 이력",
          text: "산부인과 진료·수술·시술 이력을 상담에 전달합니다.",
        },
      ],
    },
    {
      id: "early-counseling",
      order: 3,
      numberLabel: "03",
      heading: "주수에 따라 상담 내용이 달라질 수 있는 이유는?",
      layout: "prose",
      directAnswer:
        "주수와 개인 상태에 따라 확인해야 할 검사와 상담 범위가 달라질 수 있기 때문입니다.",
      paragraphs: [
        "특정 주수에 특정 수술법이 반드시 적용된다고 단정할 수는 없습니다. 적용 가능한 방법과 제한사항은 개인 상태와 의료적 평가에 따라 달라질 수 있습니다.",
        "수술 전후 생활 관리의 일반적인 확인 항목은 주의사항 안내에서도 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "수술 전후 주의사항 안내 보기",
    },
    {
      id: "early-questions",
      order: 4,
      numberLabel: "04",
      heading: "상담에서 물어볼 질문은?",
      layout: "checklist",
      directAnswer:
        "주수 확인 방법, 추가 검사, 적용 가능한 방법의 특성과 제한, 회복·사후 확인, 비용 포함 항목을 질문해 두면 도움이 됩니다.",
      paragraphs: [
        "짧은 답변만 듣기보다, 각 선택이 본인 상태에 어떤 의미가 있는지 확인하는 질문이 중요합니다.",
      ],
      bullets: [
        "현재 임신 주수는 어떻게 확인했나요?",
        "추가 검사가 필요한가요?",
        "적용 가능한 진료 방법은 무엇인가요?",
        "각 방법의 특성과 제한사항은 무엇인가요?",
        "예상되는 회복과 사후 확인은 어떻게 되나요?",
        "비용에 포함되는 항목은 무엇인가요?",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "검사·진료 비용 구성 안내 보기",
    },
    {
      id: "early-charts",
      order: 5,
      numberLabel: "05",
      heading: "인터넷의 주수표를 볼 때 주의할 점은?",
      layout: "callout",
      directAnswer:
        "특정 병원이나 게시물의 숫자를 전국 공통 기준처럼 받아들이지 말고, 개인별 평가와 현재 기준을 확인해야 합니다.",
      paragraphs: [
        "주수표는 이해를 돕는 참고 자료일 수 있지만, 작성 시점·표현 방식·전제 조건이 다를 수 있습니다. 본인에게 바로 적용되는 기준으로 오해하지 않도록 주의가 필요합니다.",
      ],
      callout:
        "인터넷에 게시된 주수·방법 설명을 개인 진료에 그대로 적용하지 말고, 상담에서 현재 상태를 확인하세요.",
    },
  ],
};
