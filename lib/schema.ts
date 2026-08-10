import { CONTACT } from "@/config/contact";
import { SITE } from "@/config/site";
import { CONTENT_CARDS } from "@/lib/content-registry";
import { ROUTES } from "@/config/routes";
import { toIso8601Kst } from "@/lib/dates";
import { absoluteUrl } from "@/lib/site-url";
import type { ContentPage } from "@/types/content";
import type { FaqItem } from "@/types/faq";

const DEFAULT_OG_IMAGE = "/images/og/임신중절수술-kakao.png";

/** MedicalClinic sameAs — 네이버/카카오/인스타/블로그 프로필 */
const CLINIC_SAME_AS = [
  "https://map.naver.com/v5/search/연세365산부인과",
  "https://place.map.kakao.com/연세365산부인과",
  "http://pf.kakao.com/_TpaBj",
  "https://www.instagram.com/yeonsei365",
  "https://blog.naver.com/yeonsei365",
] as const;

/** 연세365산부인과의원 — Organization 대신 단일 MedicalClinic 엔티티 사용 */
export function organizationJsonLd() {
  const clinicId = absoluteUrl("/#clinic");
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": clinicId,
    name: CONTACT.clinicName,
    url: absoluteUrl("/"),
    description: SITE.tagline,
    logo: absoluteUrl("/icon.svg"),
    telephone: CONTACT.phoneLabel,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "관악구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4875,
      longitude: 126.9822,
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
    medicalSpecialty: "산부인과",
    sameAs: [...CLINIC_SAME_AS],
  };
}

export function websiteJsonLd() {
  const siteUrl = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: SITE.name,
    url: siteUrl,
    description: SITE.tagline,
    inLanguage: "ko-KR",
    publisher: {
      "@id": absoluteUrl("/#clinic"),
    },
  };
}

export function webPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "WebPage" | "MedicalWebPage";
  datePublished?: string;
  dateModified?: string;
}) {
  const url = absoluteUrl(options.path);
  const pageType = options.type ?? "WebPage";
  const datePublished = options.datePublished
    ? toIso8601Kst(options.datePublished)
    : undefined;
  const dateModified = options.dateModified
    ? toIso8601Kst(options.dateModified)
    : datePublished;

  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": url,
    name: options.name,
    description: options.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(options.image
      ? { image: absoluteUrl(options.image) }
      : { image: absoluteUrl(DEFAULT_OG_IMAGE) }),
    ...(options.keywords && options.keywords.length > 0
      ? { keywords: options.keywords.slice(0, 8).join(", ") }
      : {}),
  };
}

export function itemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} 주요 콘텐츠`,
    itemListElement: CONTENT_CARDS.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      url: absoluteUrl(card.href),
      image: absoluteUrl(card.image.src),
      description: card.description,
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * 게시·수정일이 콘텐츠 데이터에 있을 때만 Article을 사용한다.
 * 가짜 작성자·기관 정보는 넣지 않는다.
 */
export function articleJsonLd(page: ContentPage) {
  const pageUrl = absoluteUrl(page.href);
  const keywords = page.seo.keywords.slice(0, 8);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.heading,
    description: page.seo.description,
    image: absoluteUrl(page.seo.socialImage || DEFAULT_OG_IMAGE),
    datePublished: toIso8601Kst(page.publishedAt),
    dateModified: toIso8601Kst(page.updatedAt),
    inLanguage: "ko-KR",
    articleSection: page.categoryLabel,
    keywords: keywords.join(", "),
    mainEntityOfPage: {
      "@type": "MedicalWebPage",
      "@id": pageUrl,
    },
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
  };
}

export function faqPageJsonLd(items: FaqItem[], path: string = ROUTES.faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
