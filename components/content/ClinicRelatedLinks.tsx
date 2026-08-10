import type { ExternalRelatedLink } from "@/types/content";

type ClinicRelatedLinksProps = {
  links: ExternalRelatedLink[];
  title?: string;
};

/** 연세365 공식 사이트 관련 문서 — 본문 하단 ‘관련 정보’ */
export function ClinicRelatedLinks({
  links,
  title = "관련 정보",
}: ClinicRelatedLinksProps) {
  if (links.length === 0) return null;

  const headingId = "clinic-related-title";

  return (
    <nav className="cg-clinic-related" aria-labelledby={headingId}>
      <h2 id={headingId} className="cg-clinic-related__title">
        {title}
      </h2>
      <ul className="cg-clinic-related__list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className="cg-clinic-related__row"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cg-clinic-related__label">{link.label}</span>
              <span className="cg-clinic-related__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
