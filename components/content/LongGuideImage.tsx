import Image from "next/image";

import type { ContentImage } from "@/types/content";

type LongGuideImageProps = {
  image: ContentImage;
  /** LCP 대상(메인 첫 이미지)만 true */
  priority?: boolean;
  className?: string;
};

/**
 * 메인·상세 공통 긴 세로 안내 이미지.
 * PC 최대 760px(원본 폭보다 확대하지 않음), 모바일 100%.
 *
 * 원본이 1080×10800 이상으로 Vercel Image Optimization
 * 소스 한도(8192px)를 초과하므로 public 경로로 직접 제공한다.
 * (/_next/image 402·변환 실패 시 거대 빈 공간 방지)
 */
export function LongGuideImage({
  image,
  priority = false,
  className,
}: LongGuideImageProps) {
  if (!image?.src) return null;

  const displayMax = Math.min(image.width || 760, 760);

  return (
    <figure
      className={["cg-long-guide", className].filter(Boolean).join(" ")}
      style={{ maxWidth: `${displayMax}px` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 768px) calc(100vw - 32px), 760px"
        quality={90}
        priority={priority}
        unoptimized
        className="cg-long-guide__img"
      />
    </figure>
  );
}
