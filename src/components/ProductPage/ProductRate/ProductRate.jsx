import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Rate } from 'antd'
import { connect } from 'react-redux'
import { RateBox, ReviewsCount } from './StylesProductRate'
import { getOneProduct, updateOneProduct } from '../../../store/products/middleware'
import rateCalculator from '../../../utils/rateCalculator'

const ProductRate = connect(null, { updateOneProduct })(({
  reviews,
  productID,
  itemNo,
  updateOneProduct
}) => {
  const { rating, reviewsQuantity } = rateCalculator(reviews)

  const [rate, setRate] = useState(rating)
  const [reviewsCount, setReviewsCount] = useState(reviewsQuantity)
  
  const handleChange = async (value) => {
    if (value === 0) return
    setRate(value)
    const response = await getOneProduct(itemNo)
    if (!response || response.status !== 200) return
    
    const product = response.data
    const reviewsArr = product.reviews
    
    const updatedProduct = {
      ...product,
      reviews: [...reviewsArr, value]
    }
    const result = await updateOneProduct(productID, updatedProduct)
    if (!result || result.status !== 200) return
    
    const newReviewsArr = result.data.reviews
    const { reviewsQuantity } = rateCalculator(newReviewsArr)
    setReviewsCount(reviewsQuantity)
  }
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

  return (
    <RateBox>
      <ReviewsCount>
        Reviews (
        {reviewsCount}
        )
      </ReviewsCount>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={rate} />
      </span>
    </RateBox>
  )
})

ProductRate.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
  productID: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  updateOneProduct: PropTypes.func
}

export default ProductRate