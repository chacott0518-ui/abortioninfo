import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_BATCH2_PUBLISHED_AT,
  INFO_GUIDE_OFFICIAL_SOURCES,
  YEONSEI365_LINKS,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

export const AFTER_DAILY_LIFE_PAGE: ContentPage = {
  id: "afterDailyLife",
  order: 107,
  numberLabel: "07",
  slug: "임신중절수술-후-일상활동",
  href: ROUTES.afterDailyLife,
  navLabel: "임신중절수술 후 일상활동",
  categoryLabel: SITE.categoryLabel,
  h1: "임신중절수술 후 일상활동, 언제부터 가능한가요?",
  heading: "임신중절수술 후 일상활동, 언제부터 가능한가요?",
  breadcrumbLabel: "임신중절수술 후 일상활동",
  infoTopicLabel: "회복·관리",
  infoCategory: "recovery",
  infoCardDescription:
    "출근·샤워·운동·성관계·음주·장거리 이동 등 일상활동 재개 시점을 확인하는 관점을 안내합니다.",
  intro: [
    "임신중절수술 후 출근, 샤워, 운동, 성관계, 음주, 장거리 이동을 언제부터 다시 시작할 수 있는지는 회복 속도와 시술 방법, 개인 건강상태에 따라 달라질 수 있습니다. 특정 일수를 일괄 기준처럼 적용하기는 어렵습니다.",
    "이 글은 일상활동을 재개할 때 일반적으로 고려하는 관점을 정리한 의료정보이며, 개인의 정확한 재개 시점은 안내받은 회복 일정과 상담을 통해 확인해야 합니다.",
  ],
  hubContextLink: {
    before: "회복 단계 전체 설명은 ",
    anchor: "임신중절수술 회복기간 안내",
    after: "에서 확인할 수 있습니다.",
  },
  publishedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_BATCH2_PUBLISHED_AT,
  faqIds: [
    "after-daily-life-01",
    "after-daily-life-02",
    "after-daily-life-03",
    "after-daily-life-04",
    "after-daily-life-05",
  ],
  faqTitle: "임신중절수술 후 일상활동 자주 묻는 질문",
  conclusion: [
    "일상활동 재개 시점은 회복 속도와 시술 방법, 건강상태에 따라 개인차가 있습니다. 특정 날짜를 기준으로 스스로 판단하기보다 안내받은 회복 일정과 몸 상태 변화를 함께 고려하는 것이 필요합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진료를 대신하지 않습니다. 활동 재개 시점이 걱정된다면 의료진과 상담해 확인해야 합니다.",
  ],
  bodyImage: null,
  repeatImage: null,
  accentColor: "#5E8B7A",
  accentHoverColor: "#48705F",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  keySummary: [
    {
      numberLabel: "01",
      title: "개인차 고려",
      text: "회복 속도와 시술 방법에 따라 일상활동 재개 시점은 달라질 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "단계적 재개",
      text: "가벼운 활동부터 서서히 늘려가는 방식이 일반적으로 권장됩니다.",
    },
    {
      numberLabel: "03",
      title: "몸 상태 확인",
      text: "출혈·통증 등 몸 상태 변화를 확인하며 활동 범위를 조절하는 것이 중요합니다.",
    },
  ],
  seo: {
    title: "임신중절수술 후 일상활동, 언제부터 가능한가요?",
    description:
      "임신중절수술 후 출근, 샤워, 운동, 성관계, 음주, 장거리 이동 등 일상활동 재개 시점을 확인하는 방법을 의료정보로 안내합니다.",
    keywords: [
      "임신중절수술 후 일상활동",
      "임신중절수술 후 운동",
      "임신중절수술 후 성관계",
      "임신중절수술 후 샤워",
    ],
    ogImage: "/images/og/임신중절수술-kakao.png",
    socialImage: "/images/og/임신중절수술-kakao.png",
    category: SITE.categoryLabel,
  },
  clinicRelatedLinks: [
    {
      label: "연세365산부인과의원 회복·사후관리 안내",
      href: YEONSEI365_LINKS.recovery,
    },
    {
      label: "연세365산부인과의원 임신중절클리닉",
      href: YEONSEI365_LINKS.clinic,
    },
  ],
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "daily-basis",
      order: 1,
      numberLabel: "01",
      heading: "일상 복귀 시점은 어떻게 판단하나요?",
      layout: "prose",
      directAnswer:
        "특정 날짜를 기준으로 일괄 판단하기보다, 안내받은 회복 일정과 현재 몸 상태(출혈·통증·피로감)를 함께 고려하는 것이 일반적입니다.",
      paragraphs: [
        "회복은 단계적으로 진행되는 경우가 많아, 무리한 활동을 갑자기 시작하기보다 가벼운 활동부터 서서히 늘려가는 방식이 안전하다고 안내되는 경우가 많습니다.",
      ],
    },
    {
      id: "daily-work",
      order: 2,
      numberLabel: "02",
      heading: "출근·등교는 언제부터 가능한가요?",
      layout: "prose",
      directAnswer:
        "직무 강도와 회복 속도에 따라 다를 수 있어, 안내받은 휴식 기간과 본인의 컨디션을 함께 고려해 결정하는 것이 필요합니다.",
      paragraphs: [
        "앉아서 하는 업무와 신체 활동이 많은 업무는 고려해야 할 부분이 다를 수 있습니다. 무리가 느껴진다면 일정을 조정하는 것도 방법입니다.",
      ],
    },
    {
      id: "daily-hygiene",
      order: 3,
      numberLabel: "03",
      heading: "샤워·목욕·사우나는 언제부터 괜찮나요?",
      layout: "responsive-table",
      directAnswer:
        "샤워는 비교적 이른 시점부터 가능하다고 안내되는 경우가 많지만, 탕 목욕이나 사우나처럼 몸을 오래 담그는 활동은 더 신중한 판단이 필요할 수 있습니다.",
      paragraphs: [
        "감염 위험과 관련된 활동이므로 병원에서 안내한 시점을 우선 따르는 것이 중요합니다.",
      ],
      table: {
        columns: [
          { key: "activity", label: "활동" },
          { key: "note", label: "확인해야 할 이유" },
        ],
        rows: [
          { activity: "샤워", note: "비교적 이른 시점 가능 여부를 안내받는 경우가 많습니다." },
          { activity: "탕 목욕", note: "감염 위험과 관련해 신중한 판단이 필요할 수 있습니다." },
          { activity: "사우나·찜질방", note: "체온·감염 관련 안내를 우선 확인해야 합니다." },
        ],
        mobileMode: "cards",
      },
    },
    {
      id: "daily-activity",
      order: 4,
      numberLabel: "04",
      heading: "운동·성관계·음주는 언제부터 고려할 수 있나요?",
      layout: "checklist",
      directAnswer:
        "격한 운동, 성관계, 음주는 회복이 어느 정도 진행된 이후로 미루도록 안내되는 경우가 일반적이며, 정확한 시점은 개인 상태에 따라 다릅니다.",
      paragraphs: [
        "이 활동들은 출혈이나 감염 위험과 관련이 있을 수 있어 임의로 앞당기기보다 안내받은 기준을 따르는 것이 중요합니다.",
      ],
      bullets: [
        "격한 운동은 회복 정도를 확인한 뒤 시작하기",
        "성관계는 안내받은 회복 기간 이후로 미루기",
        "음주는 컨디션과 복용 약을 고려해 신중히 결정하기",
        "무리한 활동 후 출혈이 늘면 활동을 멈추고 경과 관찰하기",
      ],
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "회복 중 이상증상 확인하기",
    },
    {
      id: "daily-travel",
      order: 5,
      numberLabel: "05",
      heading: "장거리 이동 전 확인할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "장거리 이동은 몸 상태를 먼저 확인하고, 이동 중 증상이 악화될 경우를 대비해 여유 있는 일정으로 계획하는 것이 도움이 될 수 있습니다.",
      paragraphs: [
        "이동 중 통증이나 출혈이 늘어나는 경우를 대비해 가까운 의료기관 정보를 미리 확인해 두는 것도 방법입니다.",
      ],
    },
  ],
};
