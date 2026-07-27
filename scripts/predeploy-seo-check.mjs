#!/usr/bin/env node
/**
 * 배포 전 SEO 기술 검사.
 *
 * 사용:
 *   ALLOW_LOCALHOST=1 SITE_URL=http://localhost:3000 node scripts/predeploy-seo-check.mjs
 *   node scripts/predeploy-seo-check.mjs https://abortioninfo.co.kr
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SITE_URL = (
  process.env.SITE_URL ||
  process.argv[2] ||
  ""
).replace(/\/$/, "");
const ALLOW_LOCALHOST = process.env.ALLOW_LOCALHOST === "1";

const EXPECTED_TITLES = {
  "/": "임신중절수술",
  "/임신중절수술-비용": "임신중절수술 비용",
  "/임신중절수술-회복기간": "임신중절수술 회복기간",
  "/임신중절수술-주의사항": "임신중절수술 주의사항",
  "/임신중절수술-병원-선택": "임신중절수술 병원 선택",
  "/임신중절수술-후기": "임신중절수술 후기 확인 방법",
  "/임신중절수술-자주-묻는-질문": "임신중절수술 자주 묻는 질문",
};

const EXPECTED_DESCRIPTIONS = {
  "/":
    "연세365산부인과의원이 안내하는 임신중절수술 정보입니다. 가능 시기, 비용, 회복기간, 주의사항, 병원 선택 기준과 자주 묻는 질문을 확인할 수 있습니다.",
  "/임신중절수술-비용":
    "임신중절수술 비용이 달라지는 기준과 검사, 마취, 수술 및 사후관리 포함 항목을 확인할 수 있도록 정리했습니다.",
  "/임신중절수술-회복기간":
    "임신중절수술 후 회복 과정과 출혈·통증 관찰, 생활 관리 및 진료 확인이 필요한 사항을 단계별로 안내합니다.",
  "/임신중절수술-주의사항":
    "임신중절수술 전 준비부터 수술 후 일상생활과 진료 확인까지 놓치기 쉬운 주의사항을 항목별로 정리했습니다.",
  "/임신중절수술-병원-선택":
    "상담 체계, 검사, 비용 설명, 개인정보 보호와 사후관리 등 임신중절수술 병원 선택 시 확인할 기준을 안내합니다.",
  "/임신중절수술-후기":
    "임신중절수술 후기를 참고할 때 광고성 표현, 개인차, 개인정보와 상담 내용을 구분해 확인하는 방법을 안내합니다.",
  "/임신중절수술-자주-묻는-질문":
    "임신중절수술의 시기, 비용, 회복, 합법 여부, 보호자, 미성년자, 당일 진행과 상담 절차에 관한 자주 묻는 질문을 정리했습니다.",
};

const PUBLIC_PATHS = Object.keys(EXPECTED_TITLES);

const FINAL_FAQ_PATH = "/임신중절수술-자주-묻는-질문";
const CANONICAL_ORIGIN = "https://abortioninfo.co.kr";
const DEFAULT_OG_PATH = "/images/og/%EC%9E%84%EC%8B%A0%EC%A4%91%EC%A0%88%EC%88%98%EC%88%A0-kakao.png";
const DEFAULT_OG_PATH_DECODED = "/images/og/임신중절수술-kakao.png";
const LEGACY_OG_JPG_PATH = "/images/og/임신중절수술-kakao.jpg";

const LEGACY_REDIRECTS = {
  "/비용": "/임신중절수술-비용",
  "/회복기간": "/임신중절수술-회복기간",
  "/주의사항": "/임신중절수술-주의사항",
  "/병원선택": "/임신중절수술-병원-선택",
  "/임신중절수술-병원선택": "/임신중절수술-병원-선택",
  "/후기": "/임신중절수술-후기",
  "/faq": "/임신중절수술-자주-묻는-질문",
  "/임신중절수술-자주묻는질문": "/임신중절수술-자주-묻는-질문",
};

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function titleOf(html) {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match ? decodeHtml(match[1].trim()) : "";
}

function metaContent(html, name) {
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${name}["']`,
      "i",
    ),
  ];
  for (const re of patterns) {
    const match = html.match(re);
    if (match) return decodeHtml(match[1]);
  }
  return "";
}

function canonicalOf(html) {
  const match = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']|<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i,
  );
  return match ? decodeHtml((match[1] || match[2] || "").trim()) : "";
}

function countH1(html) {
  return (html.match(/<h1\b/gi) || []).length;
}

function parseJsonLd(html) {
  const blocks = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  const items = [];
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block[1]);
      if (Array.isArray(parsed)) items.push(...parsed);
      else if (parsed && typeof parsed === "object") items.push(parsed);
    } catch {
      fail("JSON-LD 파싱 실패");
    }
  }
  return items;
}

function pathOfUrl(value) {
  if (!value) return "";
  const raw = value.split("?")[0].split("#")[0];
  try {
    const url = raw.startsWith("http")
      ? new URL(raw)
      : new URL(raw, "https://abortioninfo.co.kr");
    const p = decodeURIComponent(url.pathname).normalize("NFC");
    return p === "" ? "/" : p;
  } catch {
    try {
      const p = decodeURIComponent(raw).normalize("NFC");
      return p === "" ? "/" : p;
    } catch {
      return raw;
    }
  }
}

function assertNoLocalhost(label, value) {
  if (!value) return;
  if (/localhost|127\.0\.0\.1|0\.0\.0\.0/i.test(value)) {
    if (ALLOW_LOCALHOST) {
      warn(`${label}에 localhost 포함(허용 모드): ${value}`);
    } else {
      fail(`${label}에 localhost가 포함됨: ${value}`);
    }
  }
}

function assertNoForbiddenHost(label, value) {
  if (!value) return;
  if (/www\.abortioninfo\.co\.kr|\.vercel\.app/i.test(value)) {
    fail(`${label}에 www 또는 vercel.app 포함: ${value}`);
  }
}

function scanSourceForLegacyOgJpg() {
  const targets = ["app", "components", "config", "content", "lib"];
  let count = 0;
  for (const dir of targets) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) continue;
    walk(full, (file) => {
      if (/node_modules|\.next/.test(file)) return;
      if (!/\.(ts|tsx|js|mjs|json|css|md)$/.test(file)) return;
      const text = fs.readFileSync(file, "utf8");
      if (text.includes(LEGACY_OG_JPG_PATH)) {
        count += 1;
        fail(`소스에 이전 OG JPG 경로 잔존: ${path.relative(ROOT, file)}`);
      }
    });
  }
  const legacyFile = path.join(ROOT, "public/images/og/임신중절수술-kakao.jpg");
  if (fs.existsSync(legacyFile)) {
    fail(`이전 OG JPG 파일이 아직 존재: ${LEGACY_OG_JPG}`);
  }
  const pngFile = path.join(ROOT, "public/images/og/임신중절수술-kakao.png");
  if (!fs.existsSync(pngFile)) {
    fail("OG PNG 파일 없음: public/images/og/임신중절수술-kakao.png");
  }
  return count;
}

function walk(dir, fn) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, fn);
    else fn(full);
  }
}

async function fetchText(pathname, options = {}) {
  const url = `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  const response = await fetch(url, {
    redirect: options.redirect || "follow",
    headers: { Accept: "text/html,*/*" },
  });
  const text = options.skipBody ? "" : await response.text();
  return { response, text, url };
}

async function checkPage(path) {
  const { response, text } = await fetchText(path);
  if (response.status !== 200) {
    fail(`${path}: HTTP ${response.status}`);
    return;
  }

  const title = titleOf(text);
  const description = metaContent(text, "description");
  const canonical = canonicalOf(text);
  const robots = metaContent(text, "robots");
  const ogTitle = metaContent(text, "og:title");
  const ogDescription = metaContent(text, "og:description");
  const ogUrl = metaContent(text, "og:url");
  const ogImage = metaContent(text, "og:image");
  const twitterImage = metaContent(text, "twitter:image");
  const twitterDescription = metaContent(text, "twitter:description");
  const h1Count = countH1(text);
  const titleCount = (text.match(/<title\b/gi) || []).length;
  const canonicalCount = (text.match(/rel=["']canonical["']/gi) || []).length;
  const jsonLd = parseJsonLd(text);
  const expectedTitle = EXPECTED_TITLES[path];
  const expectedDescription = EXPECTED_DESCRIPTIONS[path];

  if (!title) fail(`${path}: title 없음`);
  else if (title !== expectedTitle) {
    fail(`${path}: title 불일치 ("${title}" ≠ "${expectedTitle}")`);
  }
  if (titleCount !== 1) fail(`${path}: title 개수 ${titleCount}`);
  if (!description) fail(`${path}: description 없음`);
  else if (description !== expectedDescription) {
    fail(`${path}: description 불일치`);
  }
  if (!canonical) fail(`${path}: canonical 없음`);
  if (canonicalCount !== 1) fail(`${path}: canonical 개수 ${canonicalCount}`);
  if (h1Count !== 1) fail(`${path}: H1 개수 ${h1Count}`);
  if (!ogTitle) fail(`${path}: og:title 없음`);
  if (!ogDescription) fail(`${path}: og:description 없음`);
  if (ogDescription !== description) {
    fail(`${path}: og:description과 meta description 불일치`);
  }
  if (!twitterDescription) fail(`${path}: twitter:description 없음`);
  if (twitterDescription !== description) {
    fail(`${path}: twitter:description과 meta description 불일치`);
  }
  if (!ogUrl) fail(`${path}: og:url 없음`);
  if (!ogImage) fail(`${path}: og:image 없음`);
  if (!twitterImage) fail(`${path}: twitter:image 없음`);
  if (robots && /noindex/i.test(robots)) fail(`${path}: noindex`);
  if (text.includes(LEGACY_OG_JPG_PATH) || (ogImage && ogImage.includes("kakao.jpg"))) {
    fail(`${path}: 이전 OG JPG 경로 HTML 잔존`);
  }

  if (canonical) {
    const canonicalPath = pathOfUrl(canonical);
    const expected = path === "/" ? "/" : path;
    if (canonicalPath !== expected) {
      fail(`${path}: canonical 경로 불일치 (${canonicalPath})`);
    }
    assertNoLocalhost(`${path} canonical`, canonical);
    assertNoForbiddenHost(`${path} canonical`, canonical);
    if (!ALLOW_LOCALHOST && !canonical.startsWith(CANONICAL_ORIGIN)) {
      fail(`${path}: canonical이 ${CANONICAL_ORIGIN} 기준이 아님 (${canonical})`);
    }
  }

  assertNoLocalhost(`${path} og:url`, ogUrl);
  assertNoLocalhost(`${path} og:image`, ogImage);
  assertNoForbiddenHost(`${path} og:url`, ogUrl);
  assertNoForbiddenHost(`${path} og:image`, ogImage);
  if (ogImage && !/^https?:\/\//i.test(ogImage)) {
    fail(`${path}: og:image가 절대 URL이 아님`);
  }
  if (
    ogImage &&
    !ogImage.includes("kakao.png") &&
    !decodeURIComponent(ogImage).includes(DEFAULT_OG_PATH_DECODED)
  ) {
    fail(`${path}: og:image PNG 경로 아님 (${ogImage})`);
  }

  if (path === "/" && !/naver-site-verification/i.test(text)) {
    fail(`${path}: 네이버 소유확인 메타 없음`);
  }

  if (/노안백내장|cataractguide|백내장 수술|렌즈삽입|노안교정|제휴문의|연세356산부인과의원|연세354산부인과의원/.test(text)) {
    fail(`${path}: 잔존 금지 문자열`);
  }

  const types = jsonLd.map((item) => item["@type"]).filter(Boolean);
  if (path === "/") {
    if (!types.includes("WebSite")) fail(`${path}: WebSite schema 없음`);
    if (!types.includes("MedicalClinic") && !types.includes("Organization")) {
      fail(`${path}: MedicalClinic/Organization schema 없음`);
    }
    if (!types.includes("FAQPage")) fail(`${path}: 홈 FAQPage schema 없음`);
  } else if (path === FINAL_FAQ_PATH) {
    if (!types.includes("MedicalWebPage") && !types.includes("WebPage")) {
      fail(`${path}: MedicalWebPage/WebPage schema 없음`);
    }
    if (!types.includes("BreadcrumbList")) fail(`${path}: BreadcrumbList 없음`);
    if (!types.includes("FAQPage")) fail(`${path}: FAQPage schema 없음`);
    const faqCount = types.filter((t) => t === "FAQPage").length;
    if (faqCount > 1) fail(`${path}: FAQPage 중복 (${faqCount})`);
  } else {
    if (
      !types.includes("MedicalWebPage") &&
      !types.includes("WebPage") &&
      !types.includes("Article")
    ) {
      fail(`${path}: MedicalWebPage/WebPage/Article schema 없음`);
    }
    if (!types.includes("BreadcrumbList")) {
      fail(`${path}: BreadcrumbList 없음`);
    }
    if (
      types.includes("FAQPage") &&
      !/cg-faq-section|자주 묻는 질문/i.test(text)
    ) {
      fail(`${path}: 화면에 FAQ 없이 FAQPage schema만 존재`);
    }
  }

  for (const item of jsonLd) {
    const serialized = JSON.stringify(item);
    assertNoLocalhost(`${path} JSON-LD`, serialized);
    assertNoForbiddenHost(`${path} JSON-LD`, serialized);
  }

  if (/javascript:void/i.test(text)) {
    fail(`${path}: javascript:void 링크 존재`);
  }
}

async function checkSitemap() {
  const { response, text } = await fetchText("/sitemap.xml");
  if (response.status !== 200) {
    fail(`/sitemap.xml: HTTP ${response.status}`);
    return;
  }
  assertNoLocalhost("sitemap", text);
  assertNoForbiddenHost("sitemap", text);

  const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length !== PUBLIC_PATHS.length) {
    fail(`sitemap URL 개수 ${locs.length} (기대 ${PUBLIC_PATHS.length})`);
  }

  for (const p of PUBLIC_PATHS) {
    const ok = locs.some((loc) => pathOfUrl(loc) === p);
    if (!ok) fail(`sitemap에 ${p} 없음`);
  }

  for (const legacy of Object.keys(LEGACY_REDIRECTS)) {
    if (text.includes(legacy)) fail(`sitemap에 redirect URL 포함: ${legacy}`);
  }

  if (/\/\d{4}\/\d{2}\/\d{2}\//.test(text)) {
    fail("sitemap에 날짜형 URL 포함");
  }
}

async function checkRobots() {
  const { response, text } = await fetchText("/robots.txt");
  if (response.status !== 200) {
    fail(`/robots.txt: HTTP ${response.status}`);
    return;
  }
  if (!/Allow:\s*\//i.test(text)) fail("robots Allow: / 없음");
  if (!/sitemap:/i.test(text)) fail("robots에 Sitemap 없음");
  assertNoLocalhost("robots", text);
  assertNoForbiddenHost("robots", text);
  if (/disallow:\s*\/images/i.test(text)) fail("robots가 images를 차단");
}

async function checkRss() {
  const { response, text } = await fetchText("/rss.xml");
  if (response.status !== 200) {
    fail(`/rss.xml: HTTP ${response.status}`);
    return;
  }
  const contentType = response.headers.get("content-type") || "";
  if (!/application\/rss\+xml|text\/xml|application\/xml/i.test(contentType)) {
    fail(`/rss.xml: Content-Type 이상 (${contentType})`);
  }
  if (!/<rss\b/i.test(text) || !/<channel>/i.test(text)) {
    fail("/rss.xml: RSS 2.0 구조 아님");
  }
  assertNoLocalhost("rss", text);
  assertNoForbiddenHost("rss", text);
  const items = [...text.matchAll(/<item>/gi)];
  if (items.length !== PUBLIC_PATHS.length) {
    fail(`/rss.xml: item 개수 ${items.length} (기대 ${PUBLIC_PATHS.length})`);
  }
  for (const p of PUBLIC_PATHS) {
    const pathOk = [...text.matchAll(/<(?:link|guid)[^>]*>([^<]+)<\//gi)].some(
      (m) => pathOfUrl(m[1]) === p,
    );
    if (!pathOk) fail(`/rss.xml에 ${p} 없음`);
  }
  for (const legacy of Object.keys(LEGACY_REDIRECTS)) {
    if (text.includes(`>${legacy}<`) || text.includes(`>${encodeURI(legacy)}<`)) {
      fail(`/rss.xml에 redirect URL 포함: ${legacy}`);
    }
  }
}

async function checkRedirects() {
  for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
    const { response } = await fetchText(from, { redirect: "manual", skipBody: true });
    if (![301, 302, 307, 308].includes(response.status)) {
      fail(`redirect ${from}: HTTP ${response.status}`);
      continue;
    }
    const location = response.headers.get("location") || "";
    if (pathOfUrl(location) !== to) {
      fail(`redirect ${from}: Location 불일치 (${location})`);
    }
  }
}

function checkTitleDescriptionUniqueness() {
  const titles = Object.values(EXPECTED_TITLES);
  const descriptions = Object.values(EXPECTED_DESCRIPTIONS);
  if (new Set(titles).size !== titles.length) fail("title 중복");
  if (new Set(descriptions).size !== descriptions.length) {
    fail("description 중복");
  }
}

async function main() {
  checkTitleDescriptionUniqueness();
  const jpgCount = scanSourceForLegacyOgJpg();
  if (jpgCount === 0 && !errors.some((e) => e.includes("JPG"))) {
    console.log("OG JPG 소스 잔존: 0건");
  }

  if (!SITE_URL) {
    console.error("SITE_URL 또는 URL 인자가 필요합니다.");
    process.exit(1);
  }

  console.log(`SEO check: ${SITE_URL}`);

  for (const p of PUBLIC_PATHS) {
    await checkPage(p);
  }
  await checkSitemap();
  await checkRobots();
  await checkRss();
  await checkRedirects();

  for (const warning of warnings) console.warn(`WARN  ${warning}`);
  for (const error of errors) console.error(`FAIL  ${error}`);

  if (errors.length) {
    console.error(`\nFAILED ${errors.length}`);
    process.exit(1);
  }
  console.log(`\nPASS (${PUBLIC_PATHS.length} pages)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
