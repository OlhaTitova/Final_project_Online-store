import React from 'react'
import { connect } from 'react-redux'
import Carousel from '../Carousel/Carousel'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container } from '../common/Container'
import SliderTitle from './SliderTitle/SliderTitle'
import { ItemWrapper } from './StylesNewProductSlider'
import carouselSettings from './carouselSettings'

const mapStateToProps = (state) => ({ newProducts: state.products.newProducts })

const NewProductsSlider = connect(mapStateToProps, null)(({ newProducts }) => (
  <Container>
    <SliderTitle />
    <Carousel carouselSettings={carouselSettings} moveBottomDots="0px">
      {newProducts.map((el) => (
        <ItemWrapper key={el.itemNo}>
          <ProductCard
            key={el.itemNo}
            productInfo={el}
          />
        </ItemWrapper>
      ))}
    </Carousel>
  </Container>
))
export default NewProductsSlider
