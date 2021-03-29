/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import Carousel from '../Carousel/Carousel'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container } from '../common/Container'
import { getNewProductsCreator } from '../../store/products/actionCreator'
import { getFilteredProducts } from '../../store/products/middleware'
import SliderTitle from './SliderTitle/SliderTitle'
import { ItemWrapper } from './StylesNewProductSlider'
import { forDesktop } from '../../styles/mediaBreakPoints'

const mapStateToProps = (state) => ({ newProducts: state.products.newProducts })

const NewProductsSlider = connect(
  mapStateToProps,
  { getNewProductsCreator, getFilteredProducts }
)(({
  getNewProductsCreator,
  getFilteredProducts,
  newProducts
}) => {
  useEffect(() => {
    const paramObj = { newProduct: 'yes' }
    getFilteredProducts(paramObj, getNewProductsCreator)
  }, [getFilteredProducts, getNewProductsCreator])

  const carouselSettings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: forDesktop.minWidth,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      }
    ]
  }
  return (
    <Container>
      <SliderTitle />
      <Carousel carouselSettings={carouselSettings} moveBottomDots="0px">
        {newProducts.map((el) => (
          <ItemWrapper key={el.itemNo}>
            <ProductCard
              key={el.itemNo}
              productInfo={el}
              hideBorder
            />
          </ItemWrapper>
        ))}
      </Carousel>
    </Container>
  )
})
export default NewProductsSlider
