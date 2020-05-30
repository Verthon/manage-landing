import React from 'react'
import PropTypes from 'prop-types'

export default function Testimonial ({ image, name, text }) {
  return (
    <div className="testimonial">
      <img src={image} alt={`${name} photo`} />
      <h2 className="testimonial__title">{name}</h2>
      <p className="testimonial__text">{text}</p>
    </div>
  )
}

Testimonial.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}
