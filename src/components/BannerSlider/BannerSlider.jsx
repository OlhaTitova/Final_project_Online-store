import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import firstImg from '../../images/banner-slider/first.png'
import secondImg from '../../images/banner-slider/second.png'
import thirdImg from '../../images/banner-slider/third.png'
import fourthImg from '../../images/banner-slider/fourth.png'
import { SliderArrowRight } from '../common/SliderArrowRight'
import { Wrapper } from '../common/Wrapper'
import { ImageBox, Img } from './StylesBannerSlider'
import { Container } from '../common/Container'
import { SliderArrowLeft } from '../common/SliderArrowLeft'

export const BannerSlider = () => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({ next: () => null, prev: () => null })

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({ next: ref.current.next, prev: ref.current.prev }))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
  }, [])

  return (
    <Container>
      <Wrapper>
        <Carousel autoplay dots={false} ref={ref}>
          <ImageBox>
            <Img src={firstImg} alt="some img" />
          </ImageBox>
          <ImageBox>
            <Img src={secondImg} alt="some img" />
          </ImageBox>
          <ImageBox>
            <Img src={thirdImg} alt="some img" />
          </ImageBox>
          <ImageBox>
            <Img src={fourthImg} alt="some img" />
          </ImageBox>
        </Carousel>
        <SliderArrowLeft onClick={handlers.prev} />
        <SliderArrowRight onClick={handlers.next} />
      </Wrapper>
    </Container>
  )
}
export default BannerSlider