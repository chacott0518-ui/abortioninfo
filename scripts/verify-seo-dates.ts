/**
 * 홈·하위 6페이지 JSON-LD / openGraph 날짜·sameAs 검증
 * 실행: npx --yes tsx scripts/verify-seo-dates.ts
 */
import { CARD_PUBLISHED_AT, HOME_SEO } from "../content/pages/home";
import { CONTENT_PAGES } from "../content/pages";
import { SITE } from "../config/site";
import { toIso8601Kst } from "../lib/dates";
import { buildPageMetadata } from "../lib/metadata";
import {
  organizationJsonLd,
  webPageJsonLd,
} from "../lib/schema";

process.env.NEXT_PUBLIC_SITE_URL ??= "https://abortioninfo.co.kr";

const EXPECTED_SAME_AS = [
  "https://map.naver.com/v5/search/연세365산부인과",
  "https://place.map.kakao.com/연세365산부인과",
  "http://pf.kakao.com/_TpaBj",
  "https://www.instagram.com/yeonsei365",
  "https://blog.naver.com/yeonsei365",
];

type Report = {
  path: string;
  webPage: ReturnType<typeof webPageJsonLd>;
  metadata: ReturnType<typeof buildPageMetadata>;
};

const reports: Report[] = [];

const homeMeta = buildPageMetadata({
  seo: HOME_SEO,
  path: "/",
  type: "website",
  publishedTime: CARD_PUBLISHED_AT,
  modifiedTime: CARD_PUBLISHED_AT,
});

reports.push({
  path: "/",
  webPage: webPageJsonLd({
    name: "임신중절수술",
    description: SITE.tagline,
    path: "/",
    type: "WebPage",
    datePublished: CARD_PUBLISHED_AT,
    dateModified: CARD_PUBLISHED_AT,
  }),
  metadata: homeMeta,
});

for (const page of CONTENT_PAGES) {
  reports.push({
    path: page.href,
    webPage: webPageJsonLd({
      name: page.h1,
      description: page.seo.description,
      path: page.href,
      keywords: page.seo.keywords,
      type: "MedicalWebPage",
      datePublished: page.publishedAt,
      dateModified: page.updatedAt,
    }),
    metadata: buildPageMetadata({
      seo: page.seo,
      path: page.href,
      type: "article",
      publishedTime: page.publishedAt,
      modifiedTime: page.updatedAt,
    }),
  });
}

const clinic = organizationJsonLd();
const errors: string[] = [];

console.log("\n=== MedicalClinic ===");
console.log(
  JSON.stringify(
    {
      "@type": clinic["@type"],
      sameAs: clinic.sameAs,
      geo: clinic.geo,
      openingHours: clinic.openingHours,
      medicalSpecialty: clinic.medicalSpecialty,
    },
    null,
    2,
  ),
);

if (clinic["@type"] !== "MedicalClinic") {
  errors.push("MedicalClinic @type 누락");
}
for (const url of EXPECTED_SAME_AS) {
  if (!clinic.sameAs?.includes(url)) {
    errors.push(`sameAs 누락: ${url}`);
  }
}
if (clinic.sameAs?.length !== 5) {
  errors.push(`sameAs 개수 ${clinic.sameAs?.length} !== 5`);
}
if (clinic.geo?.latitude !== 37.4875 || clinic.geo?.longitude !== 126.9822) {
  errors.push("geo 좌표 불일치");
}
if (!clinic.openingHours?.includes("Mo-Fr 09:00-18:00")) {
  errors.push("openingHours 평일 누락");
}
if (clinic.medicalSpecialty !== "산부인과") {
  errors.push("medicalSpecialty 누락");
}

console.log("\n=== Pages (WebPage + openGraph) ===");
for (const report of reports) {
  const og = report.metadata.openGraph;
  const summary = {
    path: report.path,
    webPage: {
      "@type": report.webPage["@type"],
      datePublished: report.webPage.datePublished,
      dateModified: report.webPage.dateModified,
    },
    openGraph: {
      type: og && "type" in og ? og.type : undefined,
      publishedTime:
        og && "publishedTime" in og ? og.publishedTime : undefined,
      modifiedTime: og && "modifiedTime" in og ? og.modifiedTime : undefined,
    },
  };
  console.log(JSON.stringify(summary, null, 2));

  if (!report.webPage.datePublished || !report.webPage.dateModified) {
    errors.push(`${report.path}: WebPage 날짜 누락`);
  }
  if (!summary.openGraph.publishedTime || !summary.openGraph.modifiedTime) {
    errors.push(`${report.path}: openGraph 날짜 누락`);
  }
  if (report.path === "/") {
    if (summary.openGraph.type !== "website") {
      errors.push("홈 openGraph.type은 website여야 함");
    }
    const expected = toIso8601Kst(CARD_PUBLISHED_AT);
    if (report.webPage.datePublished !== expected) {
      errors.push(`홈 datePublished 불일치: ${report.webPage.datePublished}`);
    }
  } else if (summary.openGraph.type !== "article") {
    errors.push(`${report.path}: openGraph.type은 article이어야 함`);
  }
}

if (errors.length > 0) {
  console.error("\nFAIL:");
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}

console.log("\nOK: datePublished/dateModified/sameAs 모두 채워짐");
