import Hero from "./components/home/Hero";
import ServicesSection from "./components/home/ServicesSection";
import GallerySection from "./components/home/GallerySection";
import AboutSection from "./components/home/AboutSection";
import ReviewsSection from "./components/home/ReviewsSection";
import CorporateSection from "./components/home/CorporateSection";
import Contacts from "./components/Contacts";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
import JsonLd from "./components/JsonLd";
import { SITE } from "./lib/site";
import { SERVICES } from "./lib/services";

// Каталог услуг в виде ItemList — помогает поисковикам увидеть все услуги.
const catalogLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Услуги автотехцентра Пантера",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `${SITE.url}/uslugi/${s.slug}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={catalogLd} />
      <Hero />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ReviewsSection />
      <CorporateSection />

      <section className="section section-accent" id="lead-form">
        <div className="container form-grid">
          <Reveal>
            <p className="eyebrow">Заявка</p>
            <h2>Запишитесь на диагностику или обсудите обслуживание автопарка</h2>
            <p>
              Форма сделана короткой, чтобы не терять заявки. Для корпоративных клиентов её же можно использовать как
              точку входа на первичный осмотр и согласование условий сотрудничества.
            </p>
            <p style={{ fontSize: 14 }}>
              Или свяжитесь напрямую:{" "}
              <a className="interactive" href={`tel:${SITE.phoneHref}`}>
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <Contacts withMap withLegal />
    </>
  );
}
