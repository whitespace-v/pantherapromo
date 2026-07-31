import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { SITE } from "./lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — честный автосервис во Владивостоке | Ремонт с гарантией`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "автосервис Владивосток",
    "честный автосервис",
    "ремонт авто с гарантией",
    "антикор Владивосток",
    "автоэлектрика Владивосток",
    "компьютерная диагностика Владивосток",
    "ремонт выхлопной системы Владивосток",
    "обслуживание автопарков Владивосток",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ремонт без лишних работ и с гарантией`,
    description:
      "Честно диагностируем, заранее согласовываем работы и даём гарантию. Автосервис во Владивостоке для частных клиентов и компаний.",
    images: [{ url: "/images/4.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — автосервис во Владивостоке`,
    description: SITE.description,
    images: ["/images/4.jpg"],
  },
};

// Организация — общая разметка на всех страницах.
const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  telephone: `+${SITE.phoneHref.replace("+", "")}`,
  email: SITE.email,
  image: `${SITE.url}/images/4.jpg`,
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  areaServed: ["Владивосток", "Приморский край"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    SITE.socials.vk,
    SITE.socials.dgis,
    SITE.socials.yandexMaps,
    SITE.socials.telegram,
    SITE.whatsapp,
    SITE.socials.instagram,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <JsonLd data={organizationLd} />
        <a className="skip-link" href="#main">
          Перейти к содержимому
        </a>
        <div className="app-shell">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
