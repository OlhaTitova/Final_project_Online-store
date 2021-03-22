/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Carousel as AntdCarousel } from 'antd'
import { Wrapper } from '../common/Wrapper'
import { SliderArrowLeft } from '../common/SliderArrowLeft'
import { SliderArrowRight } from '../common/SliderArrowRight'
import SpinAnimation from '../SpinAnimation/SpinAnimation'
import 'antd/dist/antd.css'

const Carousel = ({ carouselSettings, children }) => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({ next: () => null, prev: () => null })

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({ next: ref.current.next, prev: ref.current.prev }))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
  }, [])
  
  return (
    <Wrapper>
      {!children.length && <SpinAnimation width="100%" height="30vh" />}
      <AntdCarousel ref={ref} {...carouselSettings}>
        {children}
      </AntdCarousel>
      {children.length > 1 && <SliderArrowRight onClick={handlers.next} /> }
      {children.length > 1 && <SliderArrowLeft onClick={handlers.prev} /> }
    </Wrapper>
  )
}
  
Carousel.propTypes = {
  carouselSettings: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Array).isRequired
}

export default Carousel