import React, { useState, useEffect, useCallback } from "react"
import TestimonialSlide from "../TestimonialSlide/TestimonialSlide"
import { testimonialarray } from "../../utils/slider"
import { Container } from "../../styles/ContainerStyles.css"

const Testimonials = ({ course }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const timeoutRef = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const nextSlide = useCallback(() => {
    setActiveSlide(prevSlide =>
      prevSlide === testimonialarray.length - 1 ? 0 : prevSlide + 1
    )
  }, [setActiveSlide])

  const prevSlide = () => {
    setActiveSlide(prevSlide =>
      prevSlide === 0 ? testimonialarray.length - 1 : prevSlide - 1
    )
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => nextSlide(), 5000)

    return () => resetTimeout()
  }, [activeSlide, nextSlide])

  return course ? (
    <>
      {testimonialarray &&
        testimonialarray.map((item, index) => (
          <TestimonialSlide
            course
            key={index}
            active={index === activeSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            data={item}
            index={index}
          />
        ))}
    </>
  ) : (
    <Container>
      {testimonialarray &&
        testimonialarray.map((item, index) => (
          <TestimonialSlide
            key={index}
            active={index === activeSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            data={item}
            index={index}
          />
        ))}
    </Container>
  )
}

export default Testimonials
