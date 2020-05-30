import React from 'react'
import PropTypes from 'prop-types'

export default function Footer ({ primaryLinks, secondaryLinks }) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const renderLinks = (links) => {
    if (links.length > 0) {
      return links.map((item, index) => (
        <li key={index} className="links-col__item">
          <a key={index} href="#" className="links-col__link">
            {item}
          </a>
        </li>
      ))
    }
  }
  return (
    <footer className="footer">
      <form className="footer__input-wrapper" onClick={(e) => handleSubmit(e)}>
        <input
          className="footer__input"
          type="email"
          placeholder="Updates in your inbox..."
        />
        <button className="btn">Go</button>
      </form>
      <div className="links">
        <div className="links-col">
          <ul className="links-col__list">{renderLinks(primaryLinks)}</ul>
        </div>
        <div className="links-col">
          <ul className="links-col__list">{renderLinks(secondaryLinks)}</ul>
        </div>
      </div>

      <div className="socials">
        <img
          src="/icons/icon-facebook.svg"
          alt="facebook icon"
          className="socials__item"
        />
        <img
          src="/icons/icon-youtube.svg"
          alt="youtube"
          className="socials__item"
        />
        <img
          src="/icons/icon-twitter.svg"
          alt="twitter"
          className="socials__item"
        />
        <img
          src="/icons/icon-pinterest.svg"
          alt="pinterest"
          className="socials__item"
        />
        <img
          src="/icons/icon-instagram.svg"
          alt="instagram"
          className="socials__item"
        />
      </div>

      <img className="footer__logo" src="/logo-white.svg" />

      <div className="attribution">
        Challenge by{' '}
        <a
          className="attribution__author"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          className="attribution__author"
          href="https://sordyl.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krzysztof Sordyl
        </a>
        .
      </div>
    </footer>
  )
}

Footer.propTypes = {
  primaryLinks: PropTypes.arrayOf(PropTypes.string),
  secondaryLinks: PropTypes.arrayOf(PropTypes.string)
}
