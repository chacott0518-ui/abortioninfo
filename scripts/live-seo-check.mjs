#!/usr/bin/env node
/**
 * 운영 도메인 배포 후 실서버 SEO 검수.
 *
 * 사용:
 *   node scripts/live-seo-check.mjs https://abortioninfo.co.kr
 */

const SITE_URL = (process.argv[2] || process.env.SITE_URL || "").replace(
  /\/$/,
  "",
);

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
    "임신중절수술의 가능 시기, 비용, 회복기간, 주의사항, 병원 선택과 자주 묻는 질문을 항목별로 정리한 정보 안내입니다.",
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
const CANONICAL_ORIGIN = "https://abortioninfo.co.kr";
const OG_PNG_PATH = "/images/og/임신중절수술-kakao.png";

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
    const m = html.match(re);
    if (m) return decodeHtml(m[1]);
  }
  return "";
}

function titleOf(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? decodeHtml(m[1].trim()) : "";
}

function canonicalOf(html) {
  const m = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']|<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i,
  );
  return m ? decodeHtml(m[1] || m[2]) : "";
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
    const path = decodeURIComponent(url.pathname).normalize("NFC");
    return path === "" ? "/" : path;
  } catch {
    try {
      const path = decodeURIComponent(raw).normalize("NFC");
      return path === "" ? "/" : path;
    } catch {
      return raw;
    }
  }
}

function assertProductionUrl(label, value) {
  if (!value) return;
  if (/localhost|127\.0\.0\.1|0\.0\.0\.0/i.test(value)) {
    fail(`${label}에 localhost 포함: ${value}`);
  }
  if (/www\.abortioninfo\.co\.kr|\.vercel\.app/i.test(value)) {
    fail(`${label}에 www 또는 vercel.app 포함: ${value}`);
  }
}

async function fetchWithRedirect(path, redirect = "follow") {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const response = await fetch(url, {
    redirect,
    headers: { Accept: "text/html,application/xml,text/plain,*/*" },
  });
  const text = await response.text();
  return { response, text, url };
}

async function checkPage(path) {
  const { response, text } = await fetchWithRedirect(path);
  if (response.status !== 200) {
    fail(`${path}: HTTP ${response.status}`);
    return;
  }
  if (!response.url.startsWith("https://")) {
    fail(`${path}: HTTPS 아님 (${response.url})`);
  }

  const title = titleOf(text);
  const description = metaContent(text, "description");
  const canonical = canonicalOf(text);
  const ogTitle = metaContent(text, "og:title");
  const ogDescription = metaContent(text, "og:description");
  const ogUrl = metaContent(text, "og:url");
  const ogImage = metaContent(text, "og:image");
  const twitterImage = metaContent(text, "twitter:image");
  const robots = metaContent(text, "robots");
  const titleCount = (text.match(/<title\b/gi) || []).length;
  const canonicalCount = (text.match(/rel=["']canonical["']/gi) || []).length;
  const h1Count = countH1(text);

  if (titleCount !== 1) fail(`${path}: title 개수 ${titleCount}`);
  if (title !== EXPECTED_TITLES[path]) {
    fail(`${path}: title 불일치 ("${title}")`);
  }
  if (description !== EXPECTED_DESCRIPTIONS[path]) {
    fail(`${path}: description 불일치`);
  }
  if (canonicalCount !== 1) fail(`${path}: canonical 개수 ${canonicalCount}`);
  if (h1Count !== 1) fail(`${path}: H1 개수 ${h1Count}`);
  if (robots && /noindex/i.test(robots)) fail(`${path}: noindex`);
  if (!ogImage || !decodeURIComponent(ogImage).includes("kakao.png")) {
    fail(`${path}: OG PNG 이미지 누락 또는 경로 오류`);
  }
  if (ogImage.includes("kakao.jpg")) fail(`${path}: OG JPG 경로 잔존`);
  if (!twitterImage) fail(`${path}: twitter:image 없음`);

  const expectedCanonical = `${CANONICAL_ORIGIN}${path === "/" ? "" : path}`;
  if (canonical !== expectedCanonical) {
    fail(`${path}: canonical 불일치 (${canonical})`);
  }
  if (ogUrl !== expectedCanonical) {
    fail(`${path}: og:url 불일치 (${ogUrl})`);
  }

  assertProductionUrl(`${path} canonical`, canonical);
  assertProductionUrl(`${path} og:url`, ogUrl);
  assertProductionUrl(`${path} og:image`, ogImage);

  const jsonLd = parseJsonLd(text);
  for (const item of jsonLd) {
    assertProductionUrl(`${path} JSON-LD`, JSON.stringify(item));
  }

  const breadcrumbs = jsonLd.find((item) => item["@type"] === "BreadcrumbList");
  if (breadcrumbs) {
    const last = breadcrumbs.itemListElement?.at(-1);
    if (last?.item && pathOfUrl(last.item) !== path) {
      fail(`${path}: Breadcrumb 마지막 URL 불일치`);
    }
  }
}

async function checkRedirects() {
  for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
    const { response } = await fetchWithRedirect(from, "manual");
    if (![301, 302, 307, 308].includes(response.status)) {
      fail(`redirect ${from}: HTTP ${response.status}`);
      continue;
    }
    const location = response.headers.get("location") || "";
    if (pathOfUrl(location) !== to) {
      fail(`redirect ${from}: Location 불일치 (${location})`);
    }
    assertProductionUrl(`redirect ${from}`, location);
  }
}

async function checkWwwRedirect() {
  try {
    const response = await fetch("https://www.abortioninfo.co.kr/", {
      redirect: "manual",
    });
    const location = response.headers.get("location") || "";
    if (response.status >= 300 && response.status < 400) {
      if (!location.includes("https://abortioninfo.co.kr")) {
        fail(`www redirect 목적지 오류: ${location}`);
      }
    } else if (response.status === 200) {
      warn("www가 non-www로 redirect되지 않음 (DNS/Vercel 설정 확인 필요)");
    }
  } catch {
    warn("www 도메인 연결 전 — DNS 설정 후 재검수");
  }
}

async function checkOgImage() {
  const { response } = await fetchWithRedirect(OG_PNG_PATH);
  if (response.status !== 200) {
    fail(`OG 이미지 HTTP ${response.status}`);
    return;
  }
  const type = response.headers.get("content-type") || "";
  if (!type.includes("image/png")) {
    fail(`OG 이미지 Content-Type이 PNG가 아님 (${type})`);
  }
}

async function checkSitemap() {
  const { response, text } = await fetchWithRedirect("/sitemap.xml");
  if (response.status !== 200) {
    fail(`/sitemap.xml: HTTP ${response.status}`);
    return;
  }
  assertProductionUrl("sitemap", text);
  const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length !== PUBLIC_PATHS.length) {
    fail(`sitemap URL 개수 ${locs.length}`);
  }
  for (const path of PUBLIC_PATHS) {
    const ok = locs.some((loc) => pathOfUrl(loc) === path);
    if (!ok) fail(`sitemap에 ${path} 없음`);
  }
  for (const legacy of Object.keys(LEGACY_REDIRECTS)) {
    if (text.includes(legacy)) fail(`sitemap에 redirect URL 포함: ${legacy}`);
  }
}

async function checkRobots() {
  const { response, text } = await fetchWithRedirect("/robots.txt");
  if (response.status !== 200) fail(`/robots.txt: HTTP ${response.status}`);
  if (!/Allow:\s*\//i.test(text)) fail("robots Allow: / 없음");
  if (!text.includes(`${CANONICAL_ORIGIN}/sitemap.xml`)) {
    fail("robots sitemap 절대 URL 오류");
  }
  assertProductionUrl("robots", text);
}

async function main() {
  if (!SITE_URL) {
    console.error("사용법: node scripts/live-seo-check.mjs https://abortioninfo.co.kr");
    process.exit(1);
  }

  if (/localhost|127\.0\.0\.1/i.test(SITE_URL)) {
    console.error(
      "live-seo-check는 운영 도메인용입니다. 배포 후 https://abortioninfo.co.kr 로 실행하세요.",
    );
    process.exit(1);
  }

  console.log(`Live SEO check: ${SITE_URL}`);

  try {
    const probe = await fetch(SITE_URL, { redirect: "follow" });
    if (!probe.ok && probe.status !== 200) {
      console.error(
        `\n배포 후 실행 필요: ${SITE_URL} 응답 HTTP ${probe.status}`,
      );
      process.exit(2);
    }
  } catch (error) {
    console.error(`\n배포 후 실행 필요: ${SITE_URL} 연결 실패 (${error.message})`);
    process.exit(2);
  }

  await checkOgImage();
  for (const path of PUBLIC_PATHS) {
    await checkPage(path);
  }
  await checkSitemap();
  await checkRobots();
  await checkRedirects();
  await checkWwwRedirect();

  for (const warning of warnings) console.warn(`WARN  ${warning}`);
  for (const error of errors) console.error(`FAIL  ${error}`);

  if (errors.length) {
    console.error(`\nFAILED ${errors.length}`);
    process.exit(1);
  }
  console.log(`\nPASS (${PUBLIC_PATHS.length} pages + redirects + OG image)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
