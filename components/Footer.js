export default function Footer({ primary_links, secondary_links }) {
  const renderLinks = (links) => {
    if (links.length > 0) {
      return links.map((item) => (
        <li className="links-col__item">
          <a href="#" className="links-col__link">
            {item}
          </a>
        </li>
      ));
    }
  };
  return (
    <footer className="footer">
      <form className="footer__input-wrapper">
        <input
          className="footer__input"
          type="email"
          placeholder="Updates in your inbox..."
        />
        <button className="btn">Go</button>
      </form>
      <div className="links">
        <div className="links-col">
          <ul className="links-col__list">{renderLinks(primary_links)}</ul>
        </div>
        <div className="links-col">
          <ul className="links-col__list">{renderLinks(secondary_links)}</ul>
        </div>
      </div>

      <svg src="/logo.svg" />

      <div className="attribution">
        Challenge by{" "}
        <a className="attribution__author" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a className="attribution__author" href="https://sordyl.me" target="_blank" rel="noopener noreferrer">Krzysztof Sordyl</a>.
      </div>
    </footer>
  );
}
