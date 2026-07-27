"use client";

import type { MouseEvent } from "react";

import { CONTACT } from "@/config/contact";

function scrollToClinicMap(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById("clinic-map");
  if (!target) return;

  event.preventDefault();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
  history.replaceState(null, "", "#clinic-map");
}

/**
 * 모바일 하단 고정 상담바: 카톡문의 | 전화상담 | 오시는 길
 */
export function MobileContactBar() {
  if (!CONTACT.enabled) return null;

  return (
    <nav className="cg-mobile-bar" aria-label="빠른 상담">
      {CONTACT.kakaoEnabled ? (
        <a
          className="cg-mobile-bar__btn cg-mobile-bar__btn--kakao"
          href={CONTACT.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7-.1.5-.6 2.1-.7 2.4 0 0-.1.4.2.3.3-.1 3.2-2.1 3.7-2.5.7.1 1.4.2 2.2.2 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
          </svg>
          카톡문의
        </a>
      ) : null}

      {CONTACT.phoneEnabled ? (
        <a
          className="cg-mobile-bar__btn cg-mobile-bar__btn--phone"
          href={CONTACT.phoneNumber}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
          </svg>
          전화상담
        </a>
      ) : null}

      <a
        className="cg-mobile-bar__btn cg-mobile-bar__btn--map"
        href="#clinic-map"
        onClick={scrollToClinicMap}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        오시는 길
      </a>
    </nav>
  );
}

/** 하위 호환 */
export const MobilePhoneBar = MobileContactBar;
