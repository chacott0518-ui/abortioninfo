/**
 * 2026-10-12 색인복구: MERGE_CANDIDATE 17 → OWNER 308 매핑.
 * phase1/phase2 DEFS는 소스에 남기되 export에서 제외하고, LEGACY_REDIRECTS로 연결한다.
 * (routes.ts 순환 import 방지를 위해 OWNER 경로를 문자열로 둔다.)
 */
export const MERGED_GUIDE_IDS = [
  "cardPaymentCheck",
  "costIncludedItems",
  "receiptPaymentRecord",
  "pregnancyTestAfter",
  "reUltrasoundAfter",
  "examFeeSeparate",
  "aftercareFeeIncluded",
  "receiptReissue",
  "costConsultQuestions",
  "costGuideChecklist",
  "guardianRecordAccess",
  "recordCopyIssue",
  "emrRecordWhat",
  "showerAfterWhen",
  "exerciseAfterWhen",
  "sexAfterWhen",
  "bleedingAmountJudge",
] as const;

export type MergedGuideId = (typeof MERGED_GUIDE_IDS)[number];

export const MERGED_GUIDE_ID_SET = new Set<string>(MERGED_GUIDE_IDS);

const COST = "/임신중절수술-비용";
const RECOVERY = "/임신중절수술-회복기간";
const AFTER_DAILY = "/임신중절수술-후-일상활동";
const AFTER_SYMPTOMS = "/임신중절수술-후-이상증상";
const RECORD_CONTENTS = "/임신중절수술-진료기록-내용";
const THIRD_PARTY = "/임신중절수술-진료기록-제3자-열람";

/** old path → final OWNER path (single-hop 308) */
export const MERGE_REDIRECTS: Record<string, string> = {
  "/임신중절수술-카드결제-전-확인사항": COST,
  "/임신중절수술-비용-포함항목": COST,
  "/임신중절수술-영수증-수납기록": COST,
  "/임신중절수술-검사비-별도-여부": COST,
  "/임신중절수술-사후진료비-포함-여부": COST,
  "/임신중절수술-영수증-재발급": COST,
  "/임신중절수술-비용-상담-전-질문": COST,
  "/임신중절수술-비용-안내-확인사항": COST,
  "/임신중절수술-후-임신테스트기": RECOVERY,
  "/임신중절수술-후-재초음파": RECOVERY,
  "/임신중절수술-후-샤워": AFTER_DAILY,
  "/임신중절수술-후-운동": AFTER_DAILY,
  "/임신중절수술-후-성관계": AFTER_DAILY,
  "/임신중절수술-후-출혈량-판단": AFTER_SYMPTOMS,
  "/임신중절수술-보호자-기록-열람": THIRD_PARTY,
  "/임신중절수술-진료기록-사본-발급": RECORD_CONTENTS,
  "/임신중절수술-EMR-기록": RECORD_CONTENTS,
};

export const MERGE_REDIRECT_COUNT = Object.keys(MERGE_REDIRECTS).length;
