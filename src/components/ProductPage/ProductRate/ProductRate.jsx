import React, { useCallback, useState } from 'react'
import { message, Rate } from 'antd'
import { connect } from 'react-redux'
import { RateBox, ReviewsCount } from './StylesProductRate'
import { updateOneProduct } from '../../../store/products/middleware'
import rateCalculator from '../../../utils/rateCalculator'
import { selectIsLogin } from '../../../store/auth/reducer'
import { showAuthModal } from '../../../store/authModal/middleware'
import { checkIsCustomerRatedProduct } from './utils/checkIsCustomerRateProduct'
import { getUpdatedProductTeamplate } from './utils/getUpdatedProductTeamplate'

const mapStateToProps = (state) => ({isLogin: selectIsLogin(state)})

const ProductRate = connect(mapStateToProps, { updateOneProduct, showAuthModal })(({
  reviews,
  productID,
  itemNo,
  updateOneProduct,
  isLogin,
  showAuthModal
}) => {
  const { rating, reviewsQuantity } = rateCalculator(reviews)

  const [rate, setRate] = useState(rating)
  const [reviewsCount, setReviewsCount] = useState(reviewsQuantity)
  
  const handleChange = useCallback(async (currentRate) => {
    const value = currentRate !== 0 ? currentRate : rate

    if (!isLogin) {
      showAuthModal('Please, log in to rate this product.')
      return
    }
    const checkIsRated = await checkIsCustomerRatedProduct(itemNo)
    if (checkIsRated === null) {
      message.info('Some problem happened on server, please try again.')
      return
    }
    if (checkIsRated) {
      message.info('You have rated this item before.')
      return
    }
    
    setRate(value)
    const updatedProduct = await getUpdatedProductTeamplate(itemNo, value)
    const result = await updateOneProduct(productID, updatedProduct)
    if (!result || result.status !== 200) return
    
    const newReviewsArr = result.data.reviews
    const { reviewsQuantity } = rateCalculator(newReviewsArr)
    setReviewsCount(reviewsQuantity)
  }, [isLogin, itemNo, productID, rate, showAuthModal, updateOneProduct])
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

export default ProductRate