import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoGuideCards } from "@/components/content/InfoGuideCards";
import { HealthInformationNotice } from "@/components/content/HealthInformationNotice";
import { RelatedPages } from "@/components/content/RelatedPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { INFO_CATEGORIES } from "@/content/info/shared";
import { INFO_GUIDE_CARDS } from "@/content/info";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site-url";
import type { InfoCategory } from "@/types/content";

export const INFO_HUB_PUBLISHED_AT = "2026-08-12";

export const INFO_HUB_SEO = {
  title: "임신중절수술 의료정보 전체보기",
  description:
    "임신중절수술과 관련해 검사·진단, 상담·준비, 수술·마취, 회복·관리 주제로 정리한 의료정보 가이드를 한눈에 확인할 수 있습니다.",
  keywords: [
    "임신중절수술 의료정보",
    "임신중절수술 가이드",
    "임신중절수술 정보 모음",
  ],
  ogImage: "/images/og/임신중절수술-kakao.png",
  socialImage: "/images/og/임신중절수술-kakao.png",
  category: SITE.categoryLabel,
};

const CATEGORY_ORDER: InfoCategory[] = [
  "exam",
  "consult",
  "surgery",
  "recovery",
  "understand",
  "hospital",
];

/** 정보허브 `/의료정보` — Korean 리터럴 폴더 대신 `[slug]` 동적 라우트에서 렌더 (한글 경로 인코딩 이슈 회피) */
export function InfoHubView() {
  const groups = CATEGORY_ORDER.map((key) => ({
    key,
    ...INFO_CATEGORIES[key],
    cards: INFO_GUIDE_CARDS.filter((card) => card.infoCategory === key),
  })).filter((group) => group.cards.length > 0);

  const schemas = [
    webPageJsonLd({
      name: INFO_HUB_SEO.title,
      description: INFO_HUB_SEO.description,
      path: ROUTES.infoHub,
      keywords: INFO_HUB_SEO.keywords,
      type: "WebPage",
      datePublished: INFO_HUB_PUBLISHED_AT,
      dateModified: INFO_HUB_PUBLISHED_AT,
    }),
    breadcrumbJsonLd([
      { name: SITE.shortName, path: "/" },
      { name: "의료정보 전체보기", path: ROUTES.infoHub },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "임신중절수술 의료정보 가이드",
      itemListElement: INFO_GUIDE_CARDS.map((card, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: card.title,
        url: absoluteUrl(card.href),
      })),
    },
  ];

  return (
    <>
      <div className="cg-page cg-page--enter cg-info-hub">
        <div className="cg-container">
          <Breadcrumb
            items={[
              { label: SITE.shortName, href: "/" },
              { label: "의료정보 전체보기" },
            ]}
          />

          <header className="cg-article-start">
            <h1>임신중절수술 의료정보 전체보기</h1>
          </header>

          <section className="cg-home-lead">
            <p>
              임신중절수술을 준비하며 확인하면 도움이 되는 정보를 검사·진단,
              상담·준비, 수술·마취, 회복·관리 주제로 정리했습니다. 개인의
              진단이나 진료를 대신하지 않으며, 정확한 판단은 의료진 상담을
              통해 확인해야 합니다.
            </p>
          </section>

          <div className="cg-info-hub__catnav-wrap">
            <nav className="cg-info-hub__catnav" aria-label="카테고리 바로가기">
              {groups.map((group) => (
                <a
                  key={group.key}
                  className="cg-info-hub__catnav-pill"
                  href={`#info-hub-${group.key}`}
                >
                  {group.icon} {group.label}
                </a>
              ))}
            </nav>
          </div>

          {groups.map((group) => (
            <InfoGuideCards
              key={group.key}
              cards={group.cards}
              headingLevel="h2"
              headingId={`info-hub-${group.key}`}
              title={`${group.icon} ${group.label}`}
              subtitle=""
            />
          ))}

          <RelatedPages showAll />

          <HealthInformationNotice />
        </div>
      </div>
      <JsonLd data={schemas} />
    </>
  );
}
