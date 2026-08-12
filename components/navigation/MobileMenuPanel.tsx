import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { contentUiConfig } from "@/config/content-ui";
import { ROUTES } from "@/config/routes";
import { topicConfig } from "@/config/topic";
import { CONTENT_CARDS } from "@/lib/content-registry";

type MobileMenuPanelProps = {
  onNavigate: () => void;
  activePath?: string;
};

export function MobileMenuPanel({
  onNavigate,
  activePath,
}: MobileMenuPanelProps) {
  const showNumber = contentUiConfig.mobileShowMenuNumber;

  return (
    <div
      className="cg-mobile-panel"
      role="navigation"
      aria-label="모바일 콘텐츠 메뉴"
    >
      <div className="cg-mobile-panel__inner">
        <div className="cg-mobile-panel__grid">
          {CONTENT_CARDS.map((card) => {
            const isActive = activePath === card.href;
            const menuItem = topicConfig.menuItems.find((m) => m.id === card.id);
            const title = menuItem?.title ?? card.shortTitle;
            const label = showNumber
              ? `${menuItem?.numberLabel ?? card.numberLabel} ${title}`
              : title;

            return (
              <Link
                key={card.id}
                href={card.href}
                scroll
                className={`cg-mobile-panel__card${isActive ? " is-active" : ""}`}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                aria-label={title}
              >
                <span
                  className={`cg-mobile-panel__label cg-mobile-panel__label--${card.accent}`}
                >
                  <span className="cg-mobile-panel__icon" aria-hidden="true">
                    <MenuIcon iconKey={card.iconKey} size={16} />
                  </span>
                  <strong>{label}</strong>
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
          📖 의료정보 전체보기
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </div>
  );
}
