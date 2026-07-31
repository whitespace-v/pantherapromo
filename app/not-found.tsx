import Link from "next/link";

export const metadata = { title: "Страница не найдена", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", padding: "60px 0" }}>
        <p className="eyebrow">Ошибка 404</p>
        <h1 style={{ maxWidth: "100%" }}>Такой страницы нет</h1>
        <p style={{ maxWidth: "48ch", margin: "0 auto 28px" }}>
          Возможно, ссылка устарела или услуга была переименована. Вернитесь на главную или посмотрите список услуг.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link className="btn btn-primary interactive" href="/">
            На главную
          </Link>
          <Link className="btn btn-ghost interactive" href="/#services">
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}
