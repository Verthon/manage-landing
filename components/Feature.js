import React from 'react'
import PropTypes from 'prop-types'

export default function Feature ({ index, title, description }) {
  return (
    <article className="feature">
      <header className="feature__header">
        <span className="feature__number">{index}</span>
        <h3 className="feature__title">{title}</h3>
      </header>
      <p className="feature__description">{description}</p>
    </article>
  );
}

Feature.propTypes = {
  index: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}
