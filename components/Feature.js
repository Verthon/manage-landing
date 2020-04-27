export default function Feature({ number, title, description }) {
  return (
    <article className="feature">
      <header className="feature__header">
        <span className="feature__number">{number}</span>
        <h3 className="feature__title">{title}</h3>
      </header>
      <p className="feature__description">{description}</p>
    </article>
  );
}
