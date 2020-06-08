import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Footer({ primaryLinks, secondaryLinks }) {
  const errorMessages = {
    email: 'Please insert valid email',
  }
  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  const [error, setError] = useState({ isPresent: false, message: '' })
  const [email, setEmail] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateEmail(email)) {
      setError({ isPresent: true, message: errorMessages.email })
      return
    }
    setError({ ...error, isPresent: false })
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn">Go</button>
      </form>
      {error.isPresent ? (
        <div className="error-message animate__animated animate__pulse">{error.message}</div>
      ) : null}
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

      <p className="attribution">
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
      </p>
    </footer>
  )
}

Footer.propTypes = {
  primaryLinks: PropTypes.arrayOf(PropTypes.string),
  secondaryLinks: PropTypes.arrayOf(PropTypes.string),
}
