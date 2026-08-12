import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { ROUTES } from "@/config/routes";
import { topicConfig } from "@/config/topic";
import { CONTENT_CARDS } from "@/lib/content-registry";

type MegaMenuProps = {
  onNavigate: () => void;
  activePath?: string;
};

export function MegaMenu({ onNavigate, activePath }: MegaMenuProps) {
  return (
    <div
      className="cg-mega"
      role="region"
      aria-label={`${topicConfig.siteName} 콘텐츠 메뉴`}
    >
      <div className="cg-mega__inner">
        <div className="cg-mega__grid">
          {CONTENT_CARDS.map((card) => {
            const isActive = activePath === card.href;
            const menuItem = topicConfig.menuItems.find((m) => m.id === card.id);
            const title = menuItem
              ? `${menuItem.numberLabel} ${menuItem.title}`
              : card.shortTitle;
            const description = menuItem?.description ?? card.description;

            return (
              <Link
                key={card.id}
                href={card.href}
                scroll
                className={`cg-mega__card${isActive ? " is-active" : ""}`}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`cg-mega__label cg-mega__label--${card.accent}`}
                >
                  <span className="cg-mega__card-icon" aria-hidden="true">
                    <MenuIcon iconKey={card.iconKey} size={18} />
                  </span>
                  <strong>{title}</strong>
                </span>
                <small>{description}</small>
              </Link>
            );
          })}
        </div>

        <Link
          href={ROUTES.infoHub}
          scroll
          className="cg-mega__all-link"
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
