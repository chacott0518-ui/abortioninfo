export const ROUTES = {
  home: "/",
  cost: "/임신중절수술-비용",
  recovery: "/임신중절수술-회복기간",
  precautions: "/임신중절수술-주의사항",
  hospital: "/임신중절수술-병원-선택",
  reviews: "/임신중절수술-후기",
  faq: "/임신중절수술-자주-묻는-질문",
} as const;

/** 구 URL → 최종 한글 URL 308 permanent redirect */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/비용": ROUTES.cost,
  "/회복기간": ROUTES.recovery,
  "/주의사항": ROUTES.precautions,
  "/병원선택": ROUTES.hospital,
  "/후기": ROUTES.reviews,
  "/faq": ROUTES.faq,
  "/임신중절수술-병원선택": ROUTES.hospital,
  "/임신중절수술-자주묻는질문": ROUTES.faq,
};

export type RouteKey = keyof typeof ROUTES;
