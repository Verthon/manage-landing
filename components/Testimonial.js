import React from 'react'
import PropTypes from 'prop-types'

export default function Testimonial({ image, name, text }) {
  return (
    <div className="testimonial">
      <img className="testimonial__avatar" src={image} alt={`${name} photo`} />
      <div className="testimonial__container">
        <h2 className="testimonial__name">{name}</h2>
        <p className="testimonial__text">{text}</p>
      </div>
    </div>
  )
}

Testimonial.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}
