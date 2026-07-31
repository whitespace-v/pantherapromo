"use client";

import { useState } from "react";
import { SITE } from "../lib/site";

// Без бэкенда форма не может «отправить» заявку на сервер, поэтому по сабмиту
// мы собираем сообщение и открываем WhatsApp сервиса с уже готовым текстом.
// Когда появится серверная обработка (API route / внешний сервис форм) —
// достаточно заменить onSubmit.
export default function LeadForm({
  heading = "Запишитесь на диагностику или обсудите обслуживание автопарка",
  intro = "Форма короткая, чтобы вы не тратили время. Для корпоративных клиентов это же — точка входа на первичный осмотр и согласование условий.",
  carLabel = "Автомобиль / компания",
  carPlaceholder = "Марка, модель или название компании",
  messagePlaceholder = "Опишите неисправность, нужную услугу или задачу по автопарку",
  serviceName,
}: {
  heading?: string;
  intro?: string;
  carLabel?: string;
  carPlaceholder?: string;
  messagePlaceholder?: string;
  serviceName?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Здравствуйте! Заявка с сайта.",
      serviceName ? `Услуга: ${serviceName}` : null,
      name ? `Имя: ${name}` : null,
      phone ? `Телефон: ${phone}` : null,
      car ? `${carLabel}: ${car}` : null,
      message ? `Задача: ${message}` : null,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    const waNumber = SITE.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener");
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        <span>Ваше имя</span>
        <input
          className="interactive"
          type="text"
          name="name"
          placeholder="Как к вам обращаться"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Телефон</span>
        <input
          className="interactive"
          type="tel"
          name="phone"
          placeholder="+7 (...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        <span>{carLabel}</span>
        <input
          className="interactive"
          type="text"
          name="car"
          placeholder={carPlaceholder}
          value={car}
          onChange={(e) => setCar(e.target.value)}
        />
      </label>
      <label>
        <span>Задача</span>
        <textarea
          className="interactive"
          name="message"
          rows={5}
          placeholder={messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button className="btn btn-primary interactive" type="submit">
        Отправить заявку
      </button>
      <p className="form-note">Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных.</p>
    </form>
  );
}
