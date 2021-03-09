/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Container } from '../common/Container'
import { StarRating } from '../StarRating/StarRating'
import CartGroup from './CartGroup/CartGroup'
import {
  PageContainer,
  ProductImagesCarouselBox,
  InformationBox,
  StyledImg,
  Description,
  ProductHeading,
  ReviewsBox,
  ReviewsCount,
  AboutProduct,
  PriceBox,
  ImageBox,
} from './StylesProductPage'
import Carousel from '../Carousel/Carousel'
import rateCalculator from '../../utils/rateCalculator'
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter'
import SpinAnimation from '../SpinAnimation/SpinAnimation'

const ProductPage = () => {
  const [product, setProduct] = useState(null)

  const { productID } = useParams()
  const history = useHistory()

  useEffect(() => {
    axios.get(`/products/${productID}`)
      .then((res) => (res.status === 200 ? setProduct(() => res.data) : null))
      .catch((err) => {
        message.error('Something went wrong')
        history.push('/')
        return err.response
      })
  }, [history, productID])

  if (!product) return <SpinAnimation width="100vw" height="80vh" />
  const { reviews, rating } = rateCalculator(product.reviews)
  return (
    <Container>
      <PageContainer>
        <ProductImagesCarouselBox>
          <Carousel carouselSettings={{ dots: false }}>
            {product.imageUrls.map((url) => (
              <ImageBox key={url}>
                <StyledImg src={url} key={url} alt="Product image" />
              </ImageBox>
            ))}
          </Carousel>
        </ProductImagesCarouselBox>
        <InformationBox>
          <Description>About product</Description>
          <ProductHeading>{upperCaseFirstLetter(product.name)}</ProductHeading>
          <div>
            Код товара:
            {' '}
            {product.itemNo}
          </div>
          <ReviewsBox>
            <ReviewsCount>
              Reviews (
              {reviews}
              )
            </ReviewsCount>
            <StarRating rating={rating} />
          </ReviewsBox>
          <AboutProduct>
            <li>
              Brand:
              {' '}
              <b>{product.brand}</b>
            </li>
            <li>
              Color:
              {' '}
              <b>{product.color}</b>
            </li>
            {Object.entries(product.params).map(([key, value]) => (
              <li key={key}>
                {key}
                :
                {' '}
                <b>
                  {value}
                </b>
              </li>
            ))}
            <li>
              Особенности:
              {' '}
              <b>{product.description}</b>
            </li>
          </AboutProduct>
          <CartGroup productID={product._id} avilableQuantity={product.quantity} />
          <PriceBox>
            On Sale from
            <b>
              {' '}
              ₴
              {' '}
              {product.currentPrice}
            </b>
          </PriceBox>
        </InformationBox>
        <div style={{ height: '50vh'}} />
      </PageContainer>
    </Container>
  )
}

export default ProductPage