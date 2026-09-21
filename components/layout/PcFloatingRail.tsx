"use client";

import Link from "next/link";
import { useCallback } from "react";

import { CONTACT } from "@/config/contact";
import { ROUTES } from "@/config/routes";
import { YEONSEI365_LINKS } from "@/content/info/shared";

import styles from "./PcFloatingRail.module.css";

/**
 * PC 전용 우측 Floating Rail (1280px+ CSS 노출).
 * render 단계에서 window/matchMedia 미사용. HEAD exact는 `/`만.
 */
export function PcFloatingRail() {
  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <nav className={styles.rail} aria-label="빠른 이동">
      <Link href={ROUTES.home} className={`${styles.item} ${styles.internal}`}>
        임신중절수술
      </Link>
      <Link href={ROUTES.infoHub} className={`${styles.item} ${styles.internal}`}>
        의료정보
      </Link>
      <a
        href={YEONSEI365_LINKS.clinic}
        className={`${styles.item} ${styles.clinic}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="연세365 공식상담"
      >
        연세365 공식상담
      </a>
      {CONTACT.kakaoEnabled ? (
        <a
          href={CONTACT.kakaoUrl}
          className={`${styles.item} ${styles.kakao}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카톡상담"
        >
          카톡상담
        </a>
      ) : null}
      {CONTACT.phoneEnabled ? (
        <a
          href={CONTACT.phoneNumber}
          className={`${styles.item} ${styles.phone}`}
          aria-label={`전화상담 ${CONTACT.phoneLabel}`}
        >
          전화상담
        </a>
      ) : null}
      <button
        type="button"
        className={`${styles.item} ${styles.top}`}
        onClick={scrollTop}
        aria-label="맨 위로"
      >
        TOP
      </button>
    </nav>
  );
}
