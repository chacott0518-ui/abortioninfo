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
};

/**
 * 메인 6개 핵심 카드 밖의 ‘임신중절수술 관련 정보’ 레이어.
 * GNB/CONTENT_CARDS와 분리되어 데이터 추가만으로 카드가 늘어난다.
 */
export function InfoGuideCards({
  cards = INFO_GUIDE_CARDS,
}: InfoGuideCardsProps) {
  if (cards.length === 0) return null;

  return (
    <section
      className="cg-info-guides"
      aria-labelledby="info-guides-heading"
    >
      <header className="cg-info-guides__header">
        <h2 id="info-guides-heading" className="cg-info-guides__title">
          임신중절수술 관련 정보
        </h2>
        <p className="cg-info-guides__subtitle">
          상담 전 확인할 내용을 주제별로 정리한 의료정보 가이드입니다.
        </p>
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
    </section>
  );
}
