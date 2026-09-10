import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { ROUTES } from "@/config/routes";
import { topicConfig } from "@/config/topic";
import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ClayAccent, ContentClusterId } from "@/types/content";

type MegaMenuProps = {
  onNavigate: () => void;
  activePath?: string;
};

type MegaMenuItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  iconKey: ContentClusterId;
  accent: ClayAccent;
};

export function MegaMenu({ onNavigate, activePath }: MegaMenuProps) {
  const items: MegaMenuItem[] = [
    {
      id: "home",
      href: ROUTES.home,
      title: "임신중절수술",
      description: "가능 시기·비용·회복·주의사항 전체 안내",
      iconKey: "hospital",
      accent: "neutral",
    },
    ...CONTENT_CARDS.map((card) => {
      const menuItem = topicConfig.menuItems.find((m) => m.id === card.id);
      return {
        id: card.id,
        href: card.href,
        title: menuItem
          ? `${menuItem.numberLabel} ${menuItem.title}`
          : card.shortTitle,
        description: menuItem?.description ?? card.description,
        iconKey: card.iconKey,
        accent: card.accent,
      };
    }),
  ];

  return (
    <div
      className="cg-mega"
      role="region"
      aria-label={`${topicConfig.siteName} 콘텐츠 메뉴`}
    >
      <div className="cg-mega__inner">
        <div className="cg-mega__grid">
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
                className={`cg-mega__card${isActive ? " is-active" : ""}`}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`cg-mega__label cg-mega__label--${item.accent}`}
                >
                  <span className="cg-mega__card-icon" aria-hidden="true">
                    <MenuIcon iconKey={item.iconKey} size={18} />
                  </span>
                  <strong>{item.title}</strong>
                </span>
                <small>{item.description}</small>
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
