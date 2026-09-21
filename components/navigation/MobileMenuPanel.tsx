import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { contentUiConfig } from "@/config/content-ui";
import { ROUTES } from "@/config/routes";
import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ClayAccent, ContentClusterId } from "@/types/content";

type MobileMenuPanelProps = {
  onNavigate: () => void;
  activePath?: string;
};

type MobileMenuItem = {
  id: string;
  href: string;
  title: string;
  label: string;
  iconKey: ContentClusterId;
  accent: ClayAccent;
};

const CORE_SHORT_LABEL: Record<string, string> = {
  cost: "수술비용",
  recovery: "회복기간",
  precautions: "주의사항",
  hospital: "병원선택",
  reviews: "후기",
  faq: "FAQ",
};

export function MobileMenuPanel({
  onNavigate,
  activePath,
}: MobileMenuPanelProps) {
  const showNumber = contentUiConfig.mobileShowMenuNumber;

  const items: MobileMenuItem[] = [
    {
      id: "home",
      href: ROUTES.home,
      title: "임신중절수술",
      label: "임신중절수술",
      iconKey: "hospital",
      accent: "neutral",
    },
    {
      id: "infoHub",
      href: ROUTES.infoHub,
      title: "임신중절수술 정보",
      label: "임신중절수술 정보",
      iconKey: "faq",
      accent: "cyan",
    },
    ...CONTENT_CARDS.map((card) => {
      const short = CORE_SHORT_LABEL[card.id] ?? card.cardMetaLabel;
      return {
        id: card.id,
        href: card.href,
        title: short,
        label: showNumber ? `${card.numberLabel} ${short}` : short,
        iconKey: card.iconKey,
        accent: card.accent,
      };
    }),
  ];

  return (
    <div
      className="cg-mobile-panel"
      role="navigation"
      aria-label="모바일 콘텐츠 메뉴"
    >
      <div className="cg-mobile-panel__inner">
        <div className="cg-mobile-panel__grid">
          {items.map((item) => {
            const isActive =
              item.href === ROUTES.home
                ? activePath === ROUTES.home || activePath === "/"
                : activePath === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                scroll
                className={`cg-mobile-panel__card${isActive ? " is-active" : ""}`}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.title}
              >
                <span
                  className={`cg-mobile-panel__label cg-mobile-panel__label--${item.accent}`}
                >
                  <span className="cg-mobile-panel__icon" aria-hidden="true">
                    <MenuIcon iconKey={item.iconKey} size={16} />
                  </span>
                  <strong>{item.label}</strong>
                </span>
              </Link>
            );
          })}
        </div>

        <Link
          href={ROUTES.infoHub}
          scroll
          className="cg-mobile-panel__all-link"
          onClick={onNavigate}
          aria-current={activePath === ROUTES.infoHub ? "page" : undefined}
        >
          의료정보 전체보기
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </div>
  );
}
