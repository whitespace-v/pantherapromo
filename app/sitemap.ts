import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";
import { SERVICES } from "./lib/services";

// Автоматически включает главную и все страницы услуг.
// Новую услугу добавляете в каталог — она сама попадает в sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home = {
    url: `${SITE.url}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  };
  const services = SERVICES.map((s) => ({
    url: `${SITE.url}/uslugi/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [home, ...services];
}
