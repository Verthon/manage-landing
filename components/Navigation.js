import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navigation ({ links }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleMobileNavigation = () => {

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
      <img className="navigation__logo" src="/logo.svg" alt="" />
      <button type="button" className="navigation__button">
        <img src="/icons/icon-hamburger.svg" alt="" />
      </button>
      <ul className="navigation__list">{renderNavigationItems()}</ul>
    </nav>
  )
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string)
}
