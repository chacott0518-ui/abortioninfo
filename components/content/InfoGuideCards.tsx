import Link from "next/link";

import { INFO_GUIDE_CARDS } from "@/content/info";
import type { InfoGuideCard } from "@/types/content";

function formatCardDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-");
  if (!y || !m || !d) return isoDate;
  return `${y}.${m}.${d}`;
}

type InfoGuideCardsProps = {
  cards?: InfoGuideCard[];
  title?: string;
  subtitle?: string;
  headingId?: string;
  headingLevel?: "h2" | "h3";
  moreHref?: string;
  moreLabel?: string;
};

/**
 * 메인 6개 핵심 카드 밖의 ‘임신중절수술 관련 정보’ 레이어.
 * GNB/CONTENT_CARDS와 분리되어 데이터 추가만으로 카드가 늘어난다.
 * 정보허브(`/의료정보`) 카테고리별 리스트에도 동일 컴포넌트를 재사용한다.
 */
export function InfoGuideCards({
  cards = INFO_GUIDE_CARDS,
  title = "임신중절수술 관련 정보",
  subtitle = "상담 전 확인할 내용을 주제별로 정리한 의료정보 가이드입니다.",
  headingId = "info-guides-heading",
  headingLevel = "h2",
  moreHref,
  moreLabel = "의료정보 전체보기",
}: InfoGuideCardsProps) {
  if (cards.length === 0) return null;

  const HeadingTag = headingLevel;

  return (
    <section
      className="cg-info-guides"
      aria-labelledby={headingId}
    >
      <header className="cg-info-guides__header">
        <HeadingTag id={headingId} className="cg-info-guides__title">
          {title}
        </HeadingTag>
        {subtitle ? <p className="cg-info-guides__subtitle">{subtitle}</p> : null}
      </header>

      <ul className="cg-info-guides__list">
        {cards.map((card) => (
          <li key={card.id}>
            <Link className="cg-info-guides__card" href={card.href} scroll>
              <span className="cg-info-guides__label">{card.topicLabel}</span>
              <span className="cg-info-guides__card-title">{card.title}</span>
              <span className="cg-info-guides__desc">{card.description}</span>
              <span className="cg-info-guides__meta">
                {formatCardDate(card.publishedAt)} · {card.topicName}
              </span>
              <span className="cg-info-guides__more">
                더 읽기
                <span aria-hidden="true"> →</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {moreHref ? (
        <Link className="cg-info-guides__all-link" href={moreHref} scroll>
          {moreLabel}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : null}
    </section>
  );
}
