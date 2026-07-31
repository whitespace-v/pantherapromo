import Link from "next/link";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{SITE.name}</strong>
          <p>
            Техническое обслуживание и ремонт автотранспорта во Владивостоке. Индивидуальный подход, надёжные решения и
            работа с корпоративными клиентами.
          </p>
          <p style={{ fontSize: 13, marginBottom: 0 }}>
            ИП {SITE.director}. ИНН {SITE.inn}, ОГРНИП {SITE.ogrnip}.
          </p>
        </div>
        <nav className="footer-links" aria-label="Навигация по сайту">
          <Link className="interactive" href="/#services">
            Услуги
          </Link>
          <Link className="interactive" href="/#gallery">
            Галерея
          </Link>
          <Link className="interactive" href="/#corporate">
            Юр. лица
          </Link>
          <Link className="interactive" href="/#contacts">
            Контакты
          </Link>
        </nav>
      </div>
    </footer>
  );
}
