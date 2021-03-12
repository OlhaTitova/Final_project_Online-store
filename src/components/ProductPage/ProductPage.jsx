/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Container } from '../common/Container'
import CartGroup from './CartGroup/CartGroup'
import {
  PageContainer,
  ProductImagesCarouselBox,
  InformationBox,
  StyledImg,
  Description,
  ProductHeading,
  AboutProduct,
  PriceBox,
  ImageBox,
} from './StylesProductPage'
import Carousel from '../Carousel/Carousel'
import rateCalculator from '../../utils/rateCalculator'
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter'
import SpinAnimation from '../SpinAnimation/SpinAnimation'
import ProductRate from './ProductRate/ProductRate'
import { getOneProduct } from '../../store/products/middleware'

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const { itemNo } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getProduct = async () => {
      const response = await getOneProduct(itemNo)
      if (response.status === 200) setProduct(() => response.data)
      else {
        message.error('Something went wrong')
        history.push('/')
      }
    }
    getProduct()
  }, [history, itemNo])

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
          <ProductRate
            rating={rating}
            reviews={reviews}
            productID={product._id}
            itemNo={product.itemNo}
          />
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
      </PageContainer>
    </Container>
  )
}

export default ProductPage