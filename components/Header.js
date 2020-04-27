export default function Header({ children }) {
  return (
    <header className="hero">
      {children}
      <img
        className="hero__illustration"
        src="/illustration-intro.svg"
        alt=""
      />
      <article className="hero__content">
        <h1 className="hero__title">
          Bring everyone together to build better products
        </h1>
        <p className="hero__description">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.{" "}
        </p>
        <button type="button" className="hero__button">Get Started</button>
      </article>
      <div className="hero__functionality">
        <h2 className="hero__subtitle">What's different about Manage?</h2>
        <div className="hero__description hero__description--centered">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </div>
      </div>
    </header>
  );
}
