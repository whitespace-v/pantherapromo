import Reveal from "./Reveal";
import MapWidget from "./MapWidget";
import { SITE } from "../lib/site";

// showDetails=true — полная версия для главной (с реквизитами и картой).
export default function Contacts({ withMap = true, withLegal = true }: { withMap?: boolean; withLegal?: boolean }) {
  return (
    <section className="section section-dark" id="contacts">
      <div className="container contacts-grid">
        <Reveal>
          <p className="eyebrow">Контакты</p>
          <h2>Как нас найти</h2>
          <div className="contacts-list">
            <p>
              <strong>Адрес:</strong> {SITE.address.full}
            </p>
            <p>
              <strong>Режим работы:</strong> {SITE.hours}
            </p>
            <p>
              <strong>Телефон:</strong>{" "}
              <a className="interactive" href={`tel:${SITE.phoneHref}`}>
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a className="interactive" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            {withLegal && (
              <>
                <p>
                  <strong>Директор:</strong> {SITE.director}
                </p>
                <p>
                  <strong>ИП:</strong> ИНН {SITE.inn}, ОГРНИП {SITE.ogrnip}
                </p>
              </>
            )}
          </div>
          <div className="contact-actions">
            <a
              className="btn btn-primary interactive"
              href={SITE.socials.yandexMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть в Яндекс Картах
            </a>
            <a className="btn btn-ghost interactive" href={SITE.socials.dgis} target="_blank" rel="noopener noreferrer">
              Открыть в 2ГИС
            </a>
            <a className="btn btn-ghost interactive" href={SITE.socials.vk} target="_blank" rel="noopener noreferrer">
              Открыть VK
            </a>
          </div>
        </Reveal>

        <MapWidget />
      </div>
    </section>
  );
}
