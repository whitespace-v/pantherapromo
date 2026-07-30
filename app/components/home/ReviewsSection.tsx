import { SITE } from "../../lib/site";

const REVIEWS = [
  {
    avatar: "/images/avatars/1.jpg",
    photo: "/images/reviews/5.png",
    name: "Тимофей Горбунов",
    count: "9 отзывов",
    date: "14 апреля 2026",
    stars: 5,
    text: "Обратился к ребятам с нестандартной проблемой, приняли в этот же день, делали больше 6 часов, но свою работу выполнили очень аккуратно и довели всё до результата.",
    visits: "2 посещения",
  },
  {
    avatar: "/images/avatars/2.jpg",
    photo: "/images/reviews/8.png",
    name: "Елена Кротова",
    count: "4 отзыва",
    date: "12 апреля 2026",
    stars: 5,
    text: "Очень понравилось отношение к клиенту. Всё объяснили спокойно, без навязывания лишних услуг, сделали быстро и дали рекомендации на будущее.",
    visits: "1 посещение",
  },
  {
    avatar: "/images/avatars/3.jpg",
    photo: "/images/reviews/4.png",
    name: "Delger Nohorov",
    count: "12 отзывов",
    date: "12 апреля 2026",
    stars: 4,
    text: "Работу выполнили качественно. В целом впечатление осталось хорошее.",
    visits: "3 посещения",
  },
  {
    avatar: "/images/avatars/4.jpg",
    photo: "/images/reviews/6.png",
    name: "Мария Орлова",
    count: "7 отзывов",
    date: "11 апреля 2026",
    stars: 5,
    text: "Приняли вовремя, мастер всё показал и рассказал. Отдельно понравилось любезное человеческое общение.",
    visits: "2 посещения",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="review-stars" aria-label={`Оценка ${n} из 5`}>
      {"★".repeat(n)}
      {"☆".repeat(5 - n)}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <h2>Отзывы наших клиентов</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40px auto auto auto",
            columnGap: 12,
            rowGap: 10,
            alignItems: "center",
            justifyItems: "start",
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          {/* 2gis */}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <img src="/images/logos/2gis.svg" alt="" width={25} height={25} />
          </div>
          <h3 style={{ margin: 0 }}>{SITE.rating.count} оценок</h3>
          <div
            className="review-stars"
            style={{ display: "flex", alignItems: "center" }}
            aria-label="Средняя оценка 5 из 5"
          >
            ★★★★★
          </div>
          <b>{SITE.rating.value}</b>
          {/* END 2gis  */}

          {/* yamaps */}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <img src="/images/logos/ya.webp" alt="" width={20} height={20} />
          </div>
          <h3 style={{ margin: 0 }}>14 оценок</h3>
          <div
            className="review-stars"
            style={{ display: "flex", alignItems: "center" }}
            aria-label="Средняя оценка 5 из 5"
          >
            ★★★★★
          </div>
          <b>{SITE.rating.value}</b>
          {/* END yamaps  */}

          {/* gmaps */}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <img src="images/logos/google.webp" alt="" width={20} height={20} />
          </div>
          <h3 style={{ margin: 0 }}>7 оценок</h3>
          <div
            className="review-stars"
            style={{ display: "flex", alignItems: "center" }}
            aria-label="Средняя оценка 5 из 5"
          >
            ★★★★★
          </div>
          <b>{SITE.rating.value}</b>
          {/* END gmaps  */}

          {/* vl.ru */}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <img src="/images/logos/vl.webp" alt="" width={40} height={20} />
          </div>
          <h3 style={{ margin: 0 }}>4 оценки</h3>
          <div
            className="review-stars"
            style={{ display: "flex", alignItems: "center" }}
            aria-label="Средняя оценка 5 из 5"
          >
            ★★★★★
          </div>
          <b>{SITE.rating.value}</b>
          {/* END vl.ru  */}
        </div>
        <div className="reviews-grid" style={{ marginTop: 18 }}>
          {REVIEWS.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="review-head">
                <img
                  className="review-avatar"
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                />
                <div className="review-meta">
                  <div className="review-name-row">
                    <span className="review-name">{r.name}</span>
                    <span className="review-count">• {r.count}</span>
                  </div>
                  <div className="review-date">{r.date}</div>
                </div>
              </div>
              <div
                className="review-photo"
                style={{ backgroundImage: `url('${r.photo}')` }}
              />
              <Stars n={r.stars} />
              <p className="review-text">{r.text}</p>
              <a
                href={SITE.socials.dgis}
                className="review-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Читать целиком
              </a>
              <div className="review-bottom">
                <div className="review-verified-icon">⚑</div>
                <div>
                  <div className="review-visits">{r.visits}</div>
                  <div className="review-verified-text">Отзыв подтверждён</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
