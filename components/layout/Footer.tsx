import Link from "next/link";

import { CONTACT } from "@/config/contact";
import { LEGAL } from "@/config/legal";
import { topicConfig } from "@/config/topic";
import { YEONSEI365_LINKS } from "@/content/info/shared";

const legalLinks = [
  { key: "privacyPolicy", label: "개인정보 처리방침" },
  { key: "terms", label: "이용약관" },
  { key: "nonCoveredFees", label: "비급여 진료비 안내" },
  { key: "operatorDisclosure", label: "운영자 정보" },
  { key: "cookieNotice", label: "쿠키 안내" },
] as const;

export function Footer() {
  const enabledLinks = legalLinks.filter((item) => {
    const doc = LEGAL[item.key];
    return doc.enabled && doc.href;
  });

  return (
    <footer className="cg-footer">
      <div className="cg-container">
        <p className="cg-footer__copy">
          © 2026 {topicConfig.siteName} · {topicConfig.operatorName}
        </p>
        <p className="cg-footer__contact">
          <a
            className="cg-footer__contact-link"
            href={YEONSEI365_LINKS.clinic}
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 홈페이지 바로가기
            <span aria-hidden="true"> →</span>
          </a>
          <span className="cg-footer__contact-address">{CONTACT.address}</span>
        </p>
        <p className="cg-footer__blog">
          {topicConfig.siteName}은 {CONTACT.clinicName}이 제공하는
          임신중절수술 관련 일반 의료정보 사이트입니다.
        </p>
        {enabledLinks.length > 0 ? (
          <nav className="cg-footer__legal" aria-label="법률 문서">
            {enabledLinks.map((item) => (
              <Link key={item.key} href={LEGAL[item.key].href!}>
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </footer>
  );
}
