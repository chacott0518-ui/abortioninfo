import { CONTACT } from "@/config/contact";

/**
 * 연세365산부인과의원 위치 지도 + 연락 정보.
 * 지도 카드에는 전화상담 버튼을 두지 않는다(모바일 하단바에서 제공).
 */
export function ClinicMap() {
  return (
    <section
      id="clinic-map"
      className="cg-clinic-map"
      aria-labelledby="clinic-map-title"
    >
      <div className="cg-clinic-map__frame">
        <iframe
          title={`${CONTACT.clinicName} 위치 지도`}
          src={CONTACT.googleMapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="cg-clinic-map__info">
        <h2 id="clinic-map-title" className="cg-clinic-map__name">
          {CONTACT.clinicName}
        </h2>
        <p className="cg-clinic-map__address">{CONTACT.address}</p>
        <p className="cg-clinic-map__note">{CONTACT.locationNote}</p>
        <p className="cg-clinic-map__phone cg-clinic-map__phone--desktop">
          {CONTACT.phoneLabel}
        </p>
        <div className="cg-clinic-map__actions">
          {CONTACT.phoneEnabled ? (
            <a
              className="cg-clinic-map__phone-link cg-clinic-map__phone--mobile"
              href={CONTACT.phoneNumber}
            >
              {CONTACT.phoneLabel}
            </a>
          ) : null}
          <a
            className="cg-clinic-map__btn cg-clinic-map__btn--map"
            href={CONTACT.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 지도에서 보기
          </a>
        </div>
      </div>
    </section>
  );
}
