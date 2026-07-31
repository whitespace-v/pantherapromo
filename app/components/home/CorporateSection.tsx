import Reveal from "../Reveal";

export default function CorporateSection() {
  return (
    <section className="section" id="corporate">
      <div className="container corporate-grid">
        <Reveal>
          <p className="eyebrow">Для юридических лиц</p>
          <h2>Обслуживание компаний и автопарков</h2>
          <p>
            Работаем с корпоративными клиентами по договору, оформляем заказ-наряд и счёт, принимаем все виды оплаты. Для
            компаний важны скорость согласования, прозрачность работ и снижение простоя транспорта — под это и выстроен
            наш процесс.
          </p>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Reveal as="article" className="benefit-card interactive" delay={1}>
            <h3>Что получает компания</h3>
            <ul>
              <li>Снижение простоя транспорта за счёт быстрого приёма в работу.</li>
              <li>Один подрядчик для разных типов транспорта и видов работ.</li>
              <li>Персональный менеджер и мастер-приёмщик.</li>
              <li>Выезд по Владивостоку и радиусу до 20 км, при необходимости — эвакуатор.</li>
            </ul>
          </Reveal>
          <Reveal as="article" className="benefit-card interactive" delay={2}>
            <h3>Условия для автопарков</h3>
            <ul>
              <li>Бесплатная полная диагностика для 5 автомобилей.</li>
              <li>От 10 автомобилей — скидка 2% на все виды работ.</li>
              <li>От 20 автомобилей — скидка 5% на все виды работ.</li>
              <li>От 100 автомобилей — скидка 7% на все виды работ.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
