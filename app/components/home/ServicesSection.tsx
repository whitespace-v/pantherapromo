"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES, CATEGORIES } from "../../lib/services";

const SERVICES_BG = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/8.jpg')";

export default function ServicesSection() {
  const [filter, setFilter] = useState<string>("all");
  const chips = ["all", ...CATEGORIES];

  return (
    <section className="section" id="services" style={{ backgroundImage: SERVICES_BG }}>
      <div className="container">
        <div className="section-head reveal visible">
          <p className="eyebrow">Наши услуги</p>
          <h2>Популярные направления</h2>
        </div>

        <div className="filters" role="tablist" aria-label="Фильтр услуг">
          {chips.map(cat => (
            <button
              key={cat}
              type="button"
              className={`chip interactive${filter === cat ? " active" : ""}`}
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat === "all" ? "Все" : cat}
            </button>
          ))}
        </div>

        <div className="services-grid" id="servicesGrid">
          {SERVICES.map(service => {
            const hidden = filter !== "all" && filter !== service.category;
            return (
              <article
                key={service.slug}
                className={`service-card interactive${hidden ? " hidden" : ""}`}
                data-category={service.category}
              >
                <span className="service-tag">{service.category}</span>
                <h3>
                  <Link href={`/uslugi/${service.slug}`}>{service.title}</Link>
                </h3>
                <p>{service.short}</p>
                <div className="service-meta">
                  <strong>{service.price}</strong>
                  <Link href={`/uslugi/${service.slug}`}>Подробнее</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
