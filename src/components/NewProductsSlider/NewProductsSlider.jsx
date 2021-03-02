/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { SliderArrowLeft } from '../common/SliderArrowLeft'
import { SliderArrowRight } from '../common/SliderArrowRight'
import { forTablet } from '../../styles/mediaBreakPoints'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import { getNewProductsCreator } from '../../store/products/actionCreator'
import { getFilteredProducts } from '../../store/products/middleware'
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter'
import rateCalculator from '../../utils/rateCalculator'

const mapStateToProps = (state) => ({ newProducts: state.products.newProducts })

export const NewProductsSlider = connect(
  mapStateToProps,
  { getNewProductsCreator, getFilteredProducts }
)(({
  getNewProductsCreator,
  getFilteredProducts,
  newProducts
}) => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({ next: () => null, prev: () => null })

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({ next: ref.current.next, prev: ref.current.prev }))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
    // next и prev это методы слайдера для стрелок
  }, [])

  useEffect(() => {
    const paramObj = { newProduct: 'yes' }
    getFilteredProducts(paramObj, getNewProductsCreator)
  }, [getFilteredProducts, getNewProductsCreator])

  const carouselStentings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: forTablet.maxWidth,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  }
  return (
    <Container>
      <Wrapper>
        <Carousel ref={ref} {...carouselStentings}>
          {newProducts.map((el) => (
            <ProductCard
              key={el.itemNo}
              title={upperCaseFirstLetter(el.name)}
              img={el.imageUrls[0]}
              previousPrice={el.previousPrice}
              currentPrice={el.currentPrice}
              isGoodsInStock={el.quantity > 0}
              {...rateCalculator(el.reviews)}
            />
          ))}
        </Carousel>
        {newProducts.length > 1 && <SliderArrowRight onClick={handlers.next} /> }
        {newProducts.length > 1 && <SliderArrowLeft onClick={handlers.prev} /> }
      </Wrapper>
    </Container>
  )
})
export default NewProductsSlider
