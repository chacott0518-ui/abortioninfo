# abortioninfo.co.kr — 색인복구 MERGE→OWNER 매핑 (2026-10-12)

- **근거**: `docs/2026-10-12_abortioninfo_phase2_증설URL_원인확정감사.md`의 MERGE_CANDIDATE 17 / KEEP 21
- **방식**: OWNER에 고유 정보·FAQ 선별 통합 → MERGE URL은 `LEGACY_REDIRECTS` **308 single-hop** → sitemap/feed/허브/CONTENT_PAGES export에서 제외
- **LOCK**: HOME title/H1/canonical/6카드/ItemList 불변. KEEP 21 URL 유지. legal KEEP 4개 병합 금지.
- **구현**: `config/merged-guides.ts` + `config/routes.ts` LEGACY_REDIRECTS + phase1/phase2 `ACTIVE_DEFS` 필터

## MERGE 17 → OWNER

| # | old URL | target OWNER | 흡수한 고유정보 | redirect | sitemap 제거 | feed 제거 | internal link 교체 | 최종 상태 |
|---:|---|---|---|---|---|---|---|---|
| 1 | `/임신중절수술-카드결제-전-확인사항` | `/임신중절수술-비용` | 결제 전 포함·제외·수단 확인 체크 / FAQ cost-08 | 308 | yes | yes | N/A(단독 DEFS) | MERGE→OWNER |
| 2 | `/임신중절수술-비용-포함항목` | `/임신중절수술-비용` | 포함항목 구분 관점 → cost §06·기존 §03과 통합 | 308 | yes | yes | N/A | MERGE→OWNER |
| 3 | `/임신중절수술-영수증-수납기록` | `/임신중절수술-비용` | 영수증·수납확인·재발급 → cost §06 / FAQ cost-09 | 308 | yes | yes | N/A | MERGE→OWNER |
| 4 | `/임신중절수술-검사비-별도-여부` | `/임신중절수술-비용` | 검사비 별도 구분 → cost §06 / FAQ cost-07 | 308 | yes | yes | N/A | MERGE→OWNER |
| 5 | `/임신중절수술-사후진료비-포함-여부` | `/임신중절수술-비용` | 사후진료비 포함 범위 → cost §06 / FAQ cost-07 | 308 | yes | yes | N/A | MERGE→OWNER |
| 6 | `/임신중절수술-영수증-재발급` | `/임신중절수술-비용` | 재발급·일자 메모 → FAQ cost-09 | 308 | yes | yes | N/A | MERGE→OWNER |
| 7 | `/임신중절수술-비용-상담-전-질문` | `/임신중절수술-비용` | 상담 질문 체크 → cost §04·§06 통합 | 308 | yes | yes | N/A | MERGE→OWNER |
| 8 | `/임신중절수술-비용-안내-확인사항` | `/임신중절수술-비용` | 안내 확인 포인트 → cost §06 통합 | 308 | yes | yes | N/A | MERGE→OWNER |
| 9 | `/임신중절수술-후-임신테스트기` | `/임신중절수술-회복기간` | 테스트기 확인 시점·혼선 주의 → recovery §06 / FAQ recovery-06 | 308 | yes | yes | N/A | MERGE→OWNER |
| 10 | `/임신중절수술-후-재초음파` | `/임신중절수술-회복기간` | 재초음파 목적·일정 → recovery §06 / FAQ recovery-07 | 308 | yes | yes | N/A | MERGE→OWNER |
| 11 | `/임신중절수술-후-샤워` | `/임신중절수술-후-일상활동` | 샤워 위생 디테일 → afterDailyLife §03 보강 | 308 | yes | yes | N/A | MERGE→OWNER |
| 12 | `/임신중절수술-후-운동` | `/임신중절수술-후-일상활동` | 걷기 vs 격한 운동 구분 → §04 보강 | 308 | yes | yes | N/A | MERGE→OWNER |
| 13 | `/임신중절수술-후-성관계` | `/임신중절수술-후-일상활동` | 재개 전 출혈·통증 확인 → §04 보강 (기존 FAQ 유지) | 308 | yes | yes | N/A | MERGE→OWNER |
| 14 | `/임신중절수술-후-출혈량-판단` | `/임신중절수술-후-이상증상` | 패드/양 기록 팁 → §02 보강 / FAQ after-symptoms-06 | 308 | yes | yes | N/A | MERGE→OWNER |
| 15 | `/임신중절수술-보호자-기록-열람` | `/임신중절수술-진료기록-제3자-열람` | 보호자 열람 절차 → KEEP guide §·FAQ 추가 | 308 | yes | yes | N/A | MERGE→OWNER |
| 16 | `/임신중절수술-진료기록-사본-발급` | `/임신중절수술-진료기록-내용` | 사본 발급·본인확인 → KEEP guide EMR/사본 §·FAQ | 308 | yes | yes | N/A | MERGE→OWNER |
| 17 | `/임신중절수술-EMR-기록` | `/임신중절수술-진료기록-내용` | EMR≠영수증 구분 → KEEP guide EMR/사본 §·FAQ | 308 | yes | yes | N/A | MERGE→OWNER |

## KEEP 21 (URL 유지 — 병합 대상 아님)

| URL |
|---|
| `/임신중절수술-카드결제-내역-진료기록` |
| `/임신중절수술-합법-여부-확인포인트` |
| `/임신중절수술-진료기록-내용` |
| `/임신중절수술-진료기록-제3자-열람` |
| `/임신중절수술-전-금식` |
| `/임신중절수술-혼자-방문` |
| `/임신중절수술-상담만-먼저` |
| `/임신중절수술-체류시간` |
| `/약물중절과-수술적-방법-차이` |
| `/임신중절수술-현금결제-확인사항` |
| `/임신중절수술-법적-기준-확인처` |
| `/낙태-합법화-표현-이해` |
| `/임신중절수술-위법-광고-구분` |
| `/임신중절수술-본인확인-절차` |
| `/임신중절수술-알레르기-기저질환-알리기` |
| `/임신중절수술-상담-전-준비물` |
| `/임신중절수술-상담기록-관리` |
| `/임신중절수술-건강보험-병원기록-차이` |
| `/임신중절수술-당일-진행-가능-여부` |
| `/임신중절수술-생리주기-메모` |
| `/임신중절수술-동행자-역할` |

## OWNER updatedAt (datePublished 유지)

| OWNER | publishedAt | updatedAt |
|---|---|---|
| `/임신중절수술-비용` | 2026-07-01 | **2026-10-12** |
| `/임신중절수술-회복기간` | 2026-07-01 | **2026-10-12** |
| `/임신중절수술-후-일상활동` | (batch2) | **2026-10-12** |
| `/임신중절수술-후-이상증상` | (batch2) | **2026-10-12** |
| `/임신중절수술-진료기록-내용` | 2026-09-21 | **2026-10-12** |
| `/임신중절수술-진료기록-제3자-열람` | 2026-09-21 | **2026-10-12** |

## 검증된 indexable URL (로컬 `next start`)

| | 수 |
|---|---:|
| 작업 전 (sitemap) | 74 |
| MERGE 제거 | −17 |
| 작업 후 sitemap | **57** |
| MERGE 17 → 308→200 OWNER | **17/17 PASS** |
| KEEP 21 → 200 + sitemap 포함 | **21/21 PASS** |
| sitemap/feed 내 MERGE URL | **0** |
| 랜덤 404 | **404 PASS** |
| HOME title | `임신중절수술` (유지) |

### 빌드/타입체크

- `npx tsc --noEmit` — PASS
- `npm run build` — PASS (Proxy/Middleware 활성, `/[slug]` 정적 경로에서 MERGE 제외)
- `npm run lint` — 기존 untracked `scripts/*phase2*.cjs` require 스타일 오류(사전 존재). 이번 복구 diff와 무관 → WARN |
