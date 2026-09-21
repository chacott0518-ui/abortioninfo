import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { HomeContentCards } from "@/components/content/ContentCardGrid";
import { ExamNoticeBox } from "@/components/content/ExamNoticeBox";
import { FaqAccordion } from "@/components/content/FaqList";
import { InfoGuideCards } from "@/components/content/InfoGuideCards";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { LongGuideImage } from "@/components/content/LongGuideImage";
import { PageTocCards } from "@/components/content/PageTocCards";
import { RelatedPages } from "@/components/content/RelatedPages";
import { ClinicMap } from "@/components/contact/ClinicMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { getFaqsByIds } from "@/content/faqs";
import { HOME_INFO_GUIDE_CARDS } from "@/content/info";
import {
  HOME_CONCLUSION,
  HOME_EXAM_NOTICE,
  HOME_FAQ_IDS,
  HOME_INTRO,
  HOME_SECTIONS,
  HOME_TOC,
  CARD_PUBLISHED_AT,
} from "@/content/pages/home";
import {
  faqPageJsonLd,
  itemListJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export default function HomePage() {
  const faqs = getFaqsByIds([...HOME_FAQ_IDS]);
  const featureImage = HOME_INTRO.featureImage;

  return (
    <>
      <div className="cg-home cg-page--enter">
        <div className="cg-container">
          {/* 1. 상단 검색의도 카드 6개 */}
          <HomeContentCards />

          {/* 2. H1 + subtitle + 리드 (지도/병원정보보다 먼저) */}
          <header className="cg-page__header cg-home__header">
            <h1 className="cg-home__title">{HOME_INTRO.h1}</h1>
            <p className="cg-home__subtitle">{HOME_INTRO.subtitle}</p>
          </header>

          <section className="cg-home-lead">
            {HOME_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </section>

          {/* 3. 의료정보 가이드 레이어 */}
          <InfoGuideCards
            cards={HOME_INFO_GUIDE_CARDS}
            moreHref={ROUTES.infoHub}
          />

          {/* 4. 메인 세로 이미지 */}
          {featureImage?.src ? (
            <LongGuideImage image={featureImage} priority />
          ) : null}

          {/* 5. 핵심요약 */}
          {HOME_INTRO.keySummary ? (
            <KeySummaryCards items={HOME_INTRO.keySummary} />
          ) : null}

          {/* 6. 번호형 목차 */}
          <PageTocCards items={HOME_TOC} />

          {/* 7. 본문 섹션 */}
          <ArticleBody sections={HOME_SECTIONS} />

          {/* 8. 결론 */}
          <ArticleConclusion
            heading="임신중절수술 상담 전 마지막으로 확인할 점"
            body={HOME_CONCLUSION}
          />

          {/* 9. FAQ */}
          <FaqAccordion
            items={faqs}
            title="임신중절수술 자주 묻는 질문"
            id="faq"
            className="cg-main-faq"
          />

          {/* 10. 관련 콘텐츠 */}
          <RelatedPages showAll />

          {/* 11. 지도·위치 (H1 이후 보조 정보) */}
          <ClinicMap />

          {/* 12. 상담 CTA */}
          <PartnershipCTA variant="bottom" />

          {/* 13. 의료정보 안내문 */}
          <ExamNoticeBox label="의료정보 안내" body={HOME_EXAM_NOTICE} />
        </div>
      </div>

      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            name: HOME_INTRO.h1,
            description: SITE.tagline,
            path: "/",
            image: featureImage?.src,
            type: "WebPage",
            datePublished: CARD_PUBLISHED_AT,
            dateModified: "2026-09-21",
          }),
          itemListJsonLd(),
          faqPageJsonLd(faqs, "/"),
        ]}
      />
    </>
  );
}
