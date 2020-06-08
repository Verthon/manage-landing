import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Testimonial from './Testimonial'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

export default function Testimonials ({ testimonials }) {
  const MAX_MOBILE_WIDTH = 1024
  let slidesPerPage = 1
  const [dotValue, setDotValue] = useState(0)
  const [slides, setSlides] = useState([])
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= MAX_MOBILE_WIDTH) {
      slidesPerPage = 3
    }
  }
  useEffect(() => {
    const allTestimonials = testimonials.map((testimonial, index) => (
      <Testimonial
        key={index}
        name={testimonial.name}
        image={`/avatars/${testimonial.image}.png`}
        text={testimonial.description}
      />
    ))
    setSlides(allTestimonials)
  }, [])
  return (
    <div className="testimonials container">
      <h2 className="testimonials__title">What they&apos;ve said</h2>
      <Carousel
        slidesPerPage={slidesPerPage}
        centered
        value={dotValue}
        slides={slides}
        onChange={(value) => setDotValue(value)}
      />
      <Dots
        value={dotValue}
        onChange={(value) => setDotValue(value)}
        number={slides.length}
      />
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
      description: PropTypes.string
    })
  )
}
