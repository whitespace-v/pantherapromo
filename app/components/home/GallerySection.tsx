import Reveal from "../Reveal";

const GALLERY = [
  {
    img: "/images/8.JPG",
    alt: "Работа с автомобилем в сервисном боксе",
    title: "Диагностика и ремонт",
    text: "Честная оценка состояния автомобиля до начала работ",
  },
  {
    img: "/images/11.JPG",
    alt: "Автомобиль после обслуживания",
    title: "Результат без компромиссов",
    text: "Ставка на качество, а не на быстрые временные решения",
  },
  {
    img: "/images/3.JPG",
    alt: "Подкапотное пространство автомобиля",
    title: "Индивидуальный подход",
    text: "Подбираем решение под конкретную машину и задачу",
  },
  {
    img: "/images/13.JPG",
    alt: "Автомобиль в тёмной стилистике",
    title: "Сервис с характером",
    text: "Гарантия на услуги до 4 лет",
  },
  {
    img: "/images/5.JPG",
    alt: "Автомобиль на обслуживании",
    title: "Работы любой сложности",
    text: "Большой опыт позволяет качественно выполнять нестандартные задачи",
  },
  {
    img: "/images/16.JPG",
    alt: "Автомобиль для корпоративного обслуживания",
    title: "Партнёрам",
    text: "Компаниям с автопарками предлагаем особые условия сотрудничества",
  },
  {
    img: "/images/dniwe.JPG",
    alt: "Антикоррозийная обработка",
    title: "Антикоррозийная обработка",
    text: "Мы уверены в качестве нашей работы поэтому даём гарантию",
  },
  {
    img: "/images/ram.JPG",
    alt: "Восстановление днища и рамы",
    title: "Восстановление днища и рамы",
    text: "Предлагаем восстановительные работы днища и рамы",
  },
  {
    img: "/images/sky.JPG",
    alt: "Чип тюнинг и прошивки",
    title: "Чип тюнинг и прошивки",
    text: "Прошиваем автомобили совместо с Денисом Митюговым",
  },
];
const GALLERY_BG = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/6.jpg')";
export default function GallerySection() {
  return (
    <section className="section section-dark" id="gallery" style={{ backgroundImage: GALLERY_BG }}>
      <div className="container">
        <div className="section-head reveal visible">
          <p className="eyebrow">Галерея</p>
          <h2>Как выглядит подход «Пантеры»</h2>
          <p>
            Аккуратная работа, чистые процессы, внимание к деталям и реальный объём задач, за которые мы беремся каждый
            день.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <Reveal
              as="article"
              key={item.img}
              className="gallery-card interactive"
              delay={(i % 5) as 0 | 1 | 2 | 3 | 4}
            >
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className="gallery-caption">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
