/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import Carousel from '../Carousel/Carousel'
import { forTablet } from '../../styles/mediaBreakPoints'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container } from '../common/Container'
import { getNewProductsCreator } from '../../store/products/actionCreator'
import { getFilteredProducts } from '../../store/products/middleware'

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
      <Carousel carouselSettings={carouselSettings}>
        {newProducts.map((el) => (
          <ProductCard
            key={el.itemNo}
            productInfo={el}
          />
        ))}
      </Carousel>
    </Container>
  )
})
export default NewProductsSlider
