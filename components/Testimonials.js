import React from 'react'
import PropTypes from 'prop-types'
import Testimonial from './Testimonial'

export default function Testimonials ({ testimonials }) {
  const renderTestimonials = (testimonials) =>
    testimonials.map((testimonial, index) => (
      <Testimonial
        key={index}
        name={testimonial.name}
        image={`/avatars/${testimonial.image}.png`}
        text={testimonial.text}
      />
    ))
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">What they&apos;ve said</h2>
      {renderTestimonials(testimonials)}
      <button type="button" className="btn btn--centered">
        Get started
      </button>
    </div>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      text: PropTypes.string
    })
  )
}
