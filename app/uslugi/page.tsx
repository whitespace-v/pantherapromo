import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Contacts from "../components/Contacts";
import JsonLd from "../components/JsonLd";
import { SITE } from "../lib/site";
import { SERVICES } from "../lib/services";
import ReviewsSection from "../components/home/ReviewsSection";

const HERO_BG = (img: string) => `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${img}')`;

export const metadata: Metadata = {
  title: { absolute: `Услуги автосервиса во Владивостоке — ${SITE.name}` },
  description:
    "Полный список услуг автосервиса во Владивостоке: диагностика, ремонт, антикор, автоэлектрика и обслуживание. Честные цены, гарантия на работы.",
  alternates: { canonical: "/uslugi" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${SITE.url}/uslugi`,
    title: `Услуги автосервиса во Владивостоке — ${SITE.name}`,
    description:
      "Полный список услуг автосервиса во Владивостоке: диагностика, ремонт, антикор, автоэлектрика и обслуживание.",
    images: [{ url: "/images/4.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Услуги автосервиса во Владивостоке — ${SITE.name}`,
    description:
      "Полный список услуг автосервиса во Владивостоке: диагностика, ремонт, антикор, автоэлектрика и обслуживание.",
  },
};

export default function UslugiPage() {
  // Группируем услуги по категориям, сохраняя порядок их первого появления в каталоге.
  const categories: string[] = [];
  const byCategory = new Map<string, typeof SERVICES>();
  for (const s of SERVICES) {
    if (!byCategory.has(s.category)) {
      byCategory.set(s.category, []);
      categories.push(s.category);
    }
    byCategory.get(s.category)!.push(s);
  }

  // ── Структурированные данные ──────────────────────────────
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE.url}/uslugi` },
    ],
  };

  // Список всех услуг как ItemList — помогает поисковикам увидеть каталог.
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE.url}/uslugi/${s.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd, itemListLd]} />
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: HERO_BG("/images/4.jpg") }}>
        <div className="container hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>
              <span>/</span>
              <span>Услуги</span>
            </nav>

            <p className="eyebrow">Каталог услуг</p>
            <h1 className="hero-title">Услуги автосервиса во Владивостоке</h1>
            <p className="hero-text">
              Диагностика, ремонт, антикоррозийная обработка, автоэлектрика и обслуживание. Заранее согласовываем
              работы, называем цену до начала и даём гарантию.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary interactive" href="#lead-form">
                Оставить заявку
              </a>
              <a className="btn btn-ghost interactive" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection />
      {/* КАТАЛОГ ПО КАТЕГОРИЯМ */}
      {categories.map((category, ci) => (
        <section key={category} className={ci % 2 === 0 ? "section" : "section section-dark"} id={`category-${ci}`}>
          <div className="container">
            <div className="section-head reveal visible">
              <p className="eyebrow">Категория</p>
              <h2>{category}</h2>
            </div>
            <div className="grid-3">
              {byCategory.get(category)!.map((s, i) => (
                <Reveal as="article" key={s.slug} className="service-card interactive" delay={(i % 3) as 0 | 1 | 2}>
                  <h3>
                    <Link className="interactive" href={`/uslugi/${s.slug}`}>
                      {s.title}
                    </Link>
                  </h3>
                  <p>{s.heroLead}</p>
                  <p className="price-inline">
                    <b>{s.price}</b>
                  </p>
                  <Link className="btn btn-ghost interactive" href={`/uslugi/${s.slug}`}>
                    Подробнее
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
      <Contacts withMap={false} withLegal={false} />
    </>
  );
}
