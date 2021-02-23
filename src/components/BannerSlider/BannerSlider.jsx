import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components/Container'
import firstImg from '../../images/banner-slider/first.png'
import secondImg from '../../images/banner-slider/second.png'
import thirdImg from '../../images/banner-slider/third.png'
import fourthImg from '../../images/banner-slider/fourth.png'
import { forTablet, forDesktop } from '../../styles/mediaBrakepoints'
import { SliderArrowLeft } from '../../styles/styled-components/SliderArrowLeft'
import { SliderArrowRight } from '../../styles/styled-components/SliderArrowRight'

export const BannerSlider = () => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({next: () => null, prev: () => null})

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({next: ref.current.next, prev: ref.current.prev}))
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

const Wrapper = styled.div`
  position: relative;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const ImageBox = styled.div`
  height: 100px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 173px;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    height: 328px;
  }
`