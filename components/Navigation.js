import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navigation({ links }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleMobileNavigation = () => {
    setIsNavOpen(!isNavOpen)
  }

  const renderNavigationItems = () => {
    if (links.length > 0) {
      return links.map((link) => (
        <li key={link} className="navigation__item">
          <a href="#" className="navigation__link">
            {link}
          </a>
        </li>
      ))
    }
  }
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <img className="navigation__logo" src="/logo.svg" alt="" />
        {isNavOpen ? (
          <button
            type="button"
            className={
              isNavOpen
                ? 'navigation__button navigation__button--animated'
                : 'navigation__button'
            }
            onClick={toggleMobileNavigation}
          >
            <img src="/icons/icon-close.svg" alt="" />
          </button>
        ) : (
          <button
            type="button"
            className={isNavOpen ? 'navigation__button' : 'navigation__button'}
            onClick={toggleMobileNavigation}
          >
            <img src="/icons/icon-hamburger.svg" alt="" />
          </button>
        )}
      </div>
      <ul
        className={isNavOpen ? 'navigation__list--active' : 'navigation__list'}
      >
        {renderNavigationItems()}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
}
