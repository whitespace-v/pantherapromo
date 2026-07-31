// ============================================================
// Каталог услуг. Каждая услуга описана данными — а рендерит их
// один шаблон (app/uslugi/[slug]/page.tsx). Меняете контент здесь.
// ============================================================

export type ServiceContent = {
  slug: string;
  category: string;
  title: string; // H1 и название в каталоге
  metaTitle: string; // <title>
  metaDescription: string;
  price: string; // "от 700 ₽" | "по запросу"
  priceValue?: string; // число для микроразметки Offer, напр. "700"
  short: string; // текст карточки в каталоге
  heroLead: string; // подзаголовок в hero
  heroPoints: string[]; // 3 буллета в hero
  intro: string[]; // абзацы «об услуге»
  whenNeeded: string[]; // «когда нужна услуга»
  whatWeDo: { title: string; text: string }[]; // карточки «что делаем/проверяем»
  process: { title: string; text: string }[]; // этапы
  priceFactors: string[]; // от чего зависит цена
  faq: { q: string; a: string }[];
  heroImage?: string; // фон hero, по умолчанию /images/4.jpg
};

export const CATEGORIES = [
  "Стекла и оптика",
  "Антикор",
  "Автоэлектрика",
  "Диагностика",
  "Двигатель",
  "Трансмиссия",
  "Ходовая часть",
  "Выхлопная система",
  "Чип-тюнинг",
  "Сварочные работы",
  "Самообслуживание",
] as const;

// Данные услуг живут в отдельном файле, чтобы этот оставался читаемым.
import { SERVICES_DATA } from "./services-data";

export const SERVICES: ServiceContent[] = SERVICES_DATA;

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): ServiceContent[] {
  return SERVICES.filter((s) => s.category === category);
}

export const ALL_SLUGS = SERVICES.map((s) => s.slug);
