import Image from "next/image";
import Reveal from "../Reveal";
import { NETWORK_LINKS } from "../../lib/site";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Фоновое изображение — LCP, грузим приоритетно */}
      <Image
        src="/images/out.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={70}
        className="hero-bg"
      />
      {/* Затемняющий градиент поверх картинки */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Техническое обслуживание и ремонт автотранспорта</p>
          <h1 className="hero-title">Чиним честно и с гарантией</h1>
          <p className="hero-text">
            Заранее согласовываем объём работ, подходим к каждой машине индивидуально и отвечаем за результат. Гарантия
            на наши услуги до 4 лет.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary interactive" href="#lead-form">
              Оставить заявку
            </a>
            <a className="btn btn-ghost interactive" href="#services">
              Смотреть услуги
            </a>
          </div>
          <ul className="hero-points">
            <li>Мы не навязываем лишние работы и не выдумываем неисправности.</li>
            <li>Устраняем причины, а не симптомы</li>
            <li>Выполняем только согласованные работы с прозрачными ценами.</li>
            <li>Диагностика бесплатно если не нашли причину.</li>
            <li>Гарантия на работы — исправим за свой счёт.</li>
            <li>Работа точно в сроки.</li>
            <li>Ежедневно 11:00–21:00, без выходных и перерывов.</li>
          </ul>
        </div>

        <Reveal className="hero-panel" delay={1}>
          <div className="hero-card glass interactive">
            <h2>Мы в сети!</h2>
            <div className="contact-stack">
              {NETWORK_LINKS.map(link => (
                
                  key={link.label}
                  href={link.href}
                  className="contact-row interactive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
            <p className="network-note">
              * Instagram принадлежит компании Meta, признанной экстремистской организацией в РФ.
            </p>
          </div>

          <div className="stats-grid">
            <article className="stat-card interactive">
              <strong>Гарантия до 2 лет</strong>
              <span>на большинство видов работ.</span>
            </article>
            <article className="stat-card interactive">
              <strong>Бесплатная диагностика</strong>
              <span>ходовой части.</span>
            </article>
            <article className="stat-card interactive">
              <strong>Бесплатный осмотр</strong>
              <span>и консультация по антикору и антигравию днища и рамы.</span>
            </article>
            <article className="stat-card interactive">
              <strong>Бесплатно считаем прошивку</strong>
              <span>при обращении на чип-тюнинг.</span>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}