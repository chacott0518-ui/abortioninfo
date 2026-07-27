import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobilePhoneBar";
import { ScrollToTopOnNavigate } from "@/components/layout/ScrollToTopOnNavigate";
import { HOME_SEO } from "@/content/pages/home";
import { SITE } from "@/config/site";
import {
  buildPageMetadata,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
} from "@/lib/metadata";

import "./globals.css";
import "@/styles/header.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-ko",
});

const baseMetadata = buildPageMetadata({
  seo: HOME_SEO,
  path: "/",
  type: "website",
});

export const metadata: Metadata = {
  ...baseMetadata,

  metadataBase: new URL("https://abortioninfo.co.kr"),

  applicationName: SITE.shortName,

  title: {
    absolute: HOME_SEO.title,
  },

  verification: {
    other: {
      "naver-site-verification":
        "a1dabda7342da9966de7827e0502703515ec941f",
    },
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://abortioninfo.co.kr",
    siteName: "임신중절수술",
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>

        <ScrollToTopOnNavigate />
        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
