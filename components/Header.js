import React from 'react'
import PropTypes from 'prop-types'

export default function Header ({ children }) {
  return (
    <header className="hero">
      {children}
      <header className="hero__container container">
        <img
          className="hero__illustration"
          src="/illustration-intro.svg"
          alt=""
        />
        <article className="hero__content">
          <h1 className="hero__title">
            Bring everyone together to build better products.
          </h1>
          <p className="hero__description">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.{' '}
          </p>
          <button type="button" className="hero__button">
            Get Started
          </button>
        </article>
      </header>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}
