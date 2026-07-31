import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import LeadForm from "../../components/LeadForm";
import Contacts from "../../components/Contacts";
import JsonLd from "../../components/JsonLd";
import { SITE } from "../../lib/site";
import { SERVICES, ALL_SLUGS, getServiceBySlug } from "../../lib/services";

// Все страницы услуг генерируются статически на этапе сборки.
export function generateStaticParams() {
  return ALL_SLUGS.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  const canonical = `/uslugi/${service.slug}`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: `${SITE.url}${canonical}`,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage ?? "/images/4.jpg", width: 1200, height: 630, alt: service.title }],
    },
    twitter: { card: "summary_large_image", title: service.metaTitle, description: service.metaDescription },
  };
}

const HERO_BG = (img: string) => `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${img}')`;

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const heroImage = service.heroImage ?? "/images/4.jpg";

  // Похожие услуги из той же категории (для перелинковки — плюс к SEO и навигации).
  const related = SERVICES.filter(s => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  // ── Структурированные данные ──────────────────────────────
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    areaServed: ["Владивосток", "Приморский край"],
    provider: { "@id": `${SITE.url}/#business` },
    ...(service.priceValue
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: service.priceValue,
            description: `${service.title} — ${service.price}`,
          },
        }
      : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE.url}/#services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE.url}/uslugi/${service.slug}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceLd, breadcrumbLd, faqLd]} />

      {/* HERO */}
      <section className="hero" style={{ backgroundImage: HERO_BG(heroImage) }}>
        <div className="container hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>
              <span>/</span>
              <Link href="/#services">Услуги</Link>
              <span>/</span>
              <span>{service.title}</span>
            </nav>

            <p className="eyebrow">{service.category}</p>
            <h1 className="hero-title">{service.title} во Владивостоке</h1>
            <p className="hero-text">{service.heroLead}</p>

            <div className="hero-actions">
              <a className="btn btn-primary interactive" href="#lead-form">
                Оставить заявку
              </a>
              <a className="btn btn-ghost interactive" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </div>

            <ul className="hero-points">
              {service.heroPoints.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <Reveal delay={1}>
            <div className="info-card interactive">
              <h2>Когда нужна услуга</h2>
              <ul className="feature-list">
                {service.whenNeeded.map(w => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ОБ УСЛУГЕ */}
      <section className="section" id="about-service">
        <div className="container content-grid">
          <Reveal>
            <p className="eyebrow">Об услуге</p>
            <h2>Подробнее о работе</h2>
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={1} as="div">
            <div className="info-card interactive">
              <h3>От чего зависит стоимость</h3>
              <ul className="feature-list">
                {service.priceFactors.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЧТО ДЕЛАЕМ */}
      <section className="section section-dark" id="what-we-do">
        <div className="container">
          <div className="section-head reveal visible">
            <p className="eyebrow">Что делаем</p>
            <h2>Как мы подходим к задаче</h2>
          </div>
          <div className="grid-3">
            {service.whatWeDo.map((c, i) => (
              <Reveal as="article" key={c.title} className="service-card interactive" delay={(i % 3) as 0 | 1 | 2}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-head reveal visible">
            <p className="eyebrow">Этапы</p>
            <h2>Как проходит услуга</h2>
          </div>
          <div className="grid-2">
            {service.process.map((step, i) => (
              <Reveal as="article" key={step.title} className="info-card interactive" delay={(i % 3) as 0 | 1 | 2}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section className="section section-dark" id="price">
        <div className="container content-grid">
          <Reveal>
            <div className="price-card interactive">
              <p className="eyebrow">Стоимость</p>
              <div className="price-main">{service.price}</div>
              <p>
                Точная цена зависит от автомобиля, объёма работ и характера задачи. Назовём стоимость после осмотра или
                короткого разговора — заранее и без сюрпризов.
              </p>
              <div className="hero-actions" style={{ margin: "20px 0 0" }}>
                <a className="btn btn-primary interactive" href="#lead-form">
                  Записаться
                </a>
                <a className="btn btn-ghost interactive" href={`tel:${SITE.phoneHref}`}>
                  Позвонить
                </a>
              </div>
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={1} as="div">
              <div className="info-card interactive">
                <h3>Смотрите также</h3>
                <ul className="feature-list">
                  {related.map(r => (
                    <li key={r.slug}>
                      <Link className="interactive" href={`/uslugi/${r.slug}`}>
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head reveal visible">
            <p className="eyebrow">Вопросы и ответы</p>
            <h2>Частые вопросы</h2>
          </div>
          <div className="faq-list">
            {service.faq.map(f => (
              <Reveal as="article" key={f.q} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="section section-accent" id="lead-form">
        <div className="container form-grid">
          <Reveal>
            <p className="eyebrow">Бесплатная консультация и осмотр</p>
            <h2>Запишитесь на услугу «{service.title}»</h2>
            <p>
              Оставьте заявку — уточним детали, назовём стоимость и подберём удобное время. Работаем ежедневно с 11:00
              до 21:00.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <LeadForm
              serviceName={service.title}
              heading={`Запишитесь на услугу «${service.title}»`}
              carLabel="Автомобиль"
              carPlaceholder="Марка, модель"
              messagePlaceholder="Опишите задачу или симптомы"
            />
          </Reveal>
        </div>
      </section>

      <Contacts withMap={false} withLegal={false} />
    </>
  );
}
