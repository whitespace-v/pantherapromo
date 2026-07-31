# Автотехцентр «Пантера» 

 **Next.js 14 (App Router) + TypeScript**.

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:3000
```

Сборка и продакшн:

```bash
npm run build
npm start
```

```
app/
  layout.tsx                 # <html>, шрифт Inter (next/font), шапка/подвал, JSON-LD организации
  page.tsx                   # главная — собрана из секций
  globals.css                # вся ваша дизайн-система (перенесена из styles.css)
  sitemap.ts                 # автоматический sitemap: главная + все услуги
  robots.ts                  # robots.txt
  not-found.tsx              # страница 404
  favicon.ico
  lib/
    site.ts                  # ЕДИНЫЙ источник данных: телефон, адрес, гео, соцсети, реквизиты
    services.ts              # модель услуги + помощники
    services-data.ts         # КОНТЕНТ всех 29 услуг
  components/
    Header.tsx  Footer.tsx  Logo.tsx
    Reveal.tsx               # плавное появление при скролле (замена reveal-обсервера)
    LeadForm.tsx             # форма заявки (отправляет в WhatsApp сервиса)
    Contacts.tsx  MapWidget.tsx  JsonLd.tsx
    home/                    # секции главной: Hero, Services, Gallery, About, Reviews, Corporate
  uslugi/
    [slug]/page.tsx          # ШАБЛОН страницы услуги (SSG + метаданные + JSON-LD)
```
