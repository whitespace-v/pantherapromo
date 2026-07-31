// Единый источник правды по компании.
// Меняете данные здесь — они обновляются на всём сайте и во всей SEO-разметке.

export const SITE = {
  url: "https://pantheracenter.ru",
  name: "Автотехцентр Пантера",
  shortName: "Пантера",
  tagline: "Автосервис во Владивостоке",
  description:
    "Автотехцентр «Пантера» во Владивостоке: честная диагностика, ремонт с гарантией, антикор, автоэлектрика, выхлопные системы, чип-тюнинг и обслуживание автопарков.",

  phoneDisplay: "+7 (953) 208-40-08",
  phoneHref: "+79532084008",
  whatsapp: "https://wa.me/89532084008",
  email: "panthera.motors@mail.ru",

  address: {
    street: "ул. Выселковая, 87",
    locality: "Владивосток",
    region: "Приморский край",
    country: "RU",
    full: "г. Владивосток, ул. Выселковая, 87",
  },

  geo: { lat: 43.153590736627265, lng: 131.9522595405579 },

  hours: "ежедневно, 11:00–21:00",
  hoursShort: "11:00–21:00",

  // Реквизиты
  director: "Борисенко Никита Андреевич",
  inn: "254007082871",
  ogrnip: "325253600087055",

  // Рейтинг (по карточке 2ГИС) — для микроразметки отзывов
  rating: { value: "5.0", count: 58 },

  socials: {
    instagram: "https://www.instagram.com/panthera_center/",
    vk: "https://vk.com/panthera_center",
    dgis: "https://2gis.ru/vladivostok/firm/70000001104631252",
    dgisFirmId: "70000001104631252",
    google: "https://share.google/YzUZRevjDcduyJivW",
    vlru: "https://www.vl.ru/avtotehcentr-pantera",
    yandexMaps: "https://yandex.ru/maps/-/CPrXeMnj",
    telegram: "https://t.me/panthera_motors",
    mail: "mailto:panthera.motors@mail.ru",
  },
} as const;

// Список ссылок «Мы в сети» для карточки в hero
export const NETWORK_LINKS: { label: string; value: string; href: string; note?: boolean }[] = [
  { label: "2ГИС", value: "Построить маршрут", href: SITE.socials.dgis },
  { label: "Яндекс Карты", value: "Открыть карточку", href: SITE.socials.yandexMaps },
  { label: "Instagram*", value: "@panthera_center", href: SITE.socials.instagram, note: true },
  { label: "VL.RU", value: "Открыть карточку", href: SITE.socials.vlru },
  { label: "VK", value: "@panthera_center", href: SITE.socials.vk },
  { label: "Google", value: "Открыть карточку", href: SITE.socials.google },
  { label: "WhatsApp", value: "Написать в чат", href: SITE.whatsapp },
  { label: "Telegram", value: "@panthera_motors", href: SITE.socials.telegram },
  { label: "Корп. почта", value: "panthera.motors@mail.ru", href: SITE.socials.mail },
];
