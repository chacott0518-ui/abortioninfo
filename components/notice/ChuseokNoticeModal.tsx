"use client";

import { useEffect, useId, useRef, useState } from "react";

import styles from "./ChuseokNoticeModal.module.css";

/** localStorage: 오늘(KST) 하루 숨김 — YYYY-MM-DD */
const STORAGE_KEY = "abortioninfo:chuseok-notice-hide-until";

const CONSULT_URL = "https://www.yeonsei365.com/?consult=1";

/**
 * PRODUCTION 노출 구간 (Asia/Seoul)
 * - 시작: 2026-09-17 09:00:00 KST = 2026-09-17 00:00:00 UTC
 * - 종료 포함: 2026-09-27 23:59:59 KST
 * - 미노출: 2026-09-28 00:00:00 KST = 2026-09-27 15:00:00 UTC 부터
 */
const WINDOW_START_UTC_MS = Date.UTC(2026, 8, 17, 0, 0, 0);
const WINDOW_END_EXCLUSIVE_UTC_MS = Date.UTC(2026, 8, 27, 15, 0, 0);

function isPreviewMode(): boolean {
  return process.env.NODE_ENV !== "production";
}

function isWithinProductionWindow(nowMs: number = Date.now()): boolean {
  return nowMs >= WINDOW_START_UTC_MS && nowMs < WINDOW_END_EXCLUSIVE_UTC_MS;
}

/** Asia/Seoul 기준 YYYY-MM-DD (브라우저 로컬 TZ 비의존) */
function getKstDateString(nowMs: number = Date.now()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(nowMs));
}

function isHiddenForTodayKst(): boolean {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    return stored === getKstDateString();
  } catch {
    return false;
  }
}

function persistHideForTodayKst(): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, getKstDateString());
  } catch {
    // private mode 등 — 무시
  }
}

export function ChuseokNoticeModal() {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const preview = isPreviewMode();
    if (!preview && !isWithinProductionWindow()) {
      setOpen(false);
      return;
    }
    if (isHiddenForTodayKst()) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  const closeOnly = () => setOpen(false);

  const hideForToday = () => {
    persistHideForTodayKst();
    setOpen(false);
  };

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={closeOnly}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.closeButton}
          aria-label="공지 닫기"
          onClick={closeOnly}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              d="M3.5 3.5l9 9M12.5 3.5l-9 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={styles.body}>
          <p className={styles.clinic}>연세365산부인과의원</p>
          <h2 id={titleId} className={styles.title}>
            추석 연휴 정상 진료 안내
          </h2>
          <p className={styles.highlight}>
            연세365산부인과의원은 365일 연중무휴로 진료합니다.
          </p>
          <p className={styles.message}>
            추석 연휴에도 정상 진료합니다. 진료 및 상담이 필요하신 경우 편하게
            이용해 주세요.
          </p>

          <div className={styles.cards} aria-label="진료 안내 요약">
            <div className={styles.card}>
              <span className={styles.cardLabel}>추석 연휴</span>
              <span className={styles.cardValue}>정상 진료</span>
            </div>
            <div className={styles.card}>
              <span className={styles.cardLabel}>365일</span>
              <span className={styles.cardValue}>연중무휴</span>
            </div>
          </div>

          <p className={styles.footerNote}>
            연휴 기간에도 평소와 같이 진료 및 상담을 이용하실 수 있습니다.
          </p>
        </div>

        <div className={styles.actions}>
          <a
            className={styles.consult}
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            진료·상담 안내
          </a>
          <button
            type="button"
            className={styles.hideToday}
            onClick={hideForToday}
          >
            오늘 하루 안 보기
          </button>
        </div>
      </div>
    </div>
  );
}
