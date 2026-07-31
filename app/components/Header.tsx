"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "../lib/site";

export type NavItem = { label: string; href: string };

// Навигация на главной ведёт к якорям секций,
// на внутренних страницах — обратно на главную к тем же секциям.
const DEFAULT_NAV: NavItem[] = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Галерея", href: "/#gallery" },
  { label: "О сервисе", href: "/#about" },
  { label: "Юр. лица", href: "/#corporate" },
  { label: "Контакты", href: "/#contacts" },
];

export default function Header({ nav = DEFAULT_NAV }: { nav?: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header" id="top">
      <div className="container nav">
        <Link className="brand interactive" href="/" aria-label={SITE.name}>
          <Logo fill="#ffffff" style={{ height: 46, width: "auto" }} aria-hidden="true" />
          <span>
            <strong>{SITE.name}</strong>
            <small>{SITE.tagline}</small>
          </span>
        </Link>

        <button
          className="burger interactive"
          type="button"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label="Меню"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-links" aria-label="Основная навигация">
          {nav.map(item => (
            <Link key={item.href} className="interactive" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost interactive" href={`tel:${SITE.phoneHref}`}>
            {SITE.phoneDisplay}
          </a>
          <a className="btn btn-primary interactive" href="/#lead-form">
            Записаться
          </a>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        {nav.map(item => (
          <Link key={item.href} className="interactive" href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a className="interactive" href={`tel:${SITE.phoneHref}`} onClick={() => setOpen(false)}>
          Позвонить: {SITE.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
