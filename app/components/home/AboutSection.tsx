import Reveal from "../Reveal";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about-grid" style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Reveal>
          <p className="eyebrow">О сервисе</p>
          <h2>Опыт, ответственность и внимание к деталям</h2>
          <p>
            «Пантера» — это автосервис для тех, кто ценит надёжность, честность и предсказуемый результат. Мы подходим к
            каждому автомобилю индивидуально, не экономим на качестве и опираемся на проверенные решения, которые реально
            работают.
          </p>
          <p>При каждом заезде мы проводим полную диагностику авто и выявляем скрытые неисправности.</p>
        </Reveal>
      </div>
    </section>
  );
}
