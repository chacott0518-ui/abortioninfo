import Image from "next/image";
import type { CSSProperties } from "react";

import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { ArticleIntro } from "@/components/content/ArticleIntro";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FaqAccordion } from "@/components/content/FaqList";
import { HealthInformationNotice } from "@/components/content/HealthInformationNotice";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { LongGuideImage } from "@/components/content/LongGuideImage";
import {
  PageTocCards,
  SectionTocCards,
} from "@/components/content/PageTocCards";
import { RelatedPages } from "@/components/content/RelatedPages";
import { ClinicMap } from "@/components/contact/ClinicMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/config/site";
import { getFaqsByIds, getPageFaqs } from "@/lib/content-registry";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/schema";
import type { ContentImage, ContentPage } from "@/types/content";

type ArticleTemplateProps = {
  page: ContentPage;
};

function PageSquareThumb({
  image,
  priority = false,
}: {
  image: ContentImage;
  priority?: boolean;
}) {
  return (
    <figure className="cg-page-thumb">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width || 1254}
        height={image.height || 1254}
        sizes="(max-width: 768px) calc(100vw - 32px), 560px"
        quality={90}
        priority={priority}
        className="cg-page-thumb__img"
        style={{ objectFit: "contain" }}
      />
    </figure>
  );
}

/**
 * breadcrumb → H1 → 정사각 썸네일 → 목차카드 → 정사각 썸네일
 * → 상담 CTA → 페이지 전용 긴 본문 이미지 → 지도 → 질문형 소제목
 * → 직접답변 → 핵심요약 → 번호 목차 → 본문 → 결론 → FAQ → 관련 → CTA → 안내
 */
export function ArticleTemplate({ page }: ArticleTemplateProps) {
  const pageFaqs = getPageFaqs(page);
  const sectionFaqIds = page.sections.flatMap(
    (section) => section.faqIds ?? [],
  );
  const schemaFaqs =
    pageFaqs.length > 0 ? pageFaqs : getFaqsByIds(sectionFaqIds);

  const showContentCards = page.showContentCards !== false;
  const displayH1 = page.h1 || page.navLabel || page.heading;
  const breadcrumbLabel = page.breadcrumbLabel || displayH1;
  const leadQuestion =
    page.heading && page.heading !== displayH1 ? page.heading : null;
  const squareThumb = page.thumbnail?.src ? page.thumbnail : null;
  const bodyImage = page.bodyImage?.src ? page.bodyImage : null;
  const isFaqCanonical = page.id === "faq";

  const tocItems = page.sections.map((section) => ({
    id: section.id,
    numberLabel: section.numberLabel,
    label: section.heading,
    description: page.tocDescriptions?.[section.id],
  }));

  const schemas = [
    webPageJsonLd({
      name: displayH1,
      description: page.seo.description,
      path: page.href,
      image: page.seo.socialImage || page.seo.ogImage,
      keywords: page.seo.keywords,
      type: "MedicalWebPage",
    }),
    breadcrumbJsonLd([
      { name: SITE.shortName, path: "/" },
      { name: breadcrumbLabel, path: page.href },
    ]),
    ...(isFaqCanonical ? [] : [articleJsonLd(page)]),
    ...(schemaFaqs.length > 0
      ? [faqPageJsonLd(schemaFaqs, page.href)]
      : []),
  ];

  const accentStyle = {
    "--page-accent": page.accentColor,
    "--page-accent-hover": page.accentHoverColor,
  } as CSSProperties;

  return (
    <>
      <article
        className="cg-page cg-page--enter cg-article-page"
        style={accentStyle}
      >
        <div className="cg-container">
          <Breadcrumb
            items={[
              { label: SITE.shortName, href: "/" },
              { label: breadcrumbLabel },
            ]}
          />

          <header className="cg-article-start">
            <h1>{displayH1}</h1>
          </header>

          {squareThumb ? (
            <PageSquareThumb image={squareThumb} priority />
          ) : null}

          {showContentCards ? (
            <PageTocCards activeHref={page.href} />
          ) : null}

          {squareThumb ? (
            <PageSquareThumb image={squareThumb} priority={false} />
          ) : null}

          <div className="cg-article-mid-cta">
            <PartnershipCTA variant="bottom" />
          </div>

          {bodyImage ? (
            <LongGuideImage image={bodyImage} priority={false} />
          ) : null}

          <ClinicMap />

          {leadQuestion ? (
            <h2 className="cg-article-lead-question">{leadQuestion}</h2>
          ) : null}

          <ArticleIntro paragraphs={page.intro} />

          {page.keySummary && page.keySummary.length > 0 ? (
            <KeySummaryCards
              title={`${displayH1} 핵심요약`}
              items={page.keySummary}
            />
          ) : null}

          {tocItems.length > 0 ? (
            <SectionTocCards items={tocItems} />
          ) : null}

          <div className="cg-article-mobile-enhanced" data-article-body="true">
            <ArticleBody sections={page.sections} />

            {page.conclusion ? (
              <ArticleConclusion
                body={page.conclusion}
                heading={`${displayH1}, 상담 전 마지막으로 확인할 점`}
              />
            ) : null}

            {pageFaqs.length > 0 ? (
              <FaqAccordion
                items={pageFaqs}
                title={page.faqTitle}
                id="faq"
                className="cg-page-faq"
              />
            ) : null}

            <RelatedPages currentId={page.id} />

            <PartnershipCTA variant="bottom" />

            <HealthInformationNotice />
          </div>
        </div>
      </article>
      <JsonLd data={schemas} />
    </>
  );
}

/** @deprecated 호환용 — ArticleTemplate 사용 */
export const ContentPageView = ArticleTemplate;
