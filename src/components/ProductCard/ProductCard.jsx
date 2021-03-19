import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Compomemts
import { InStock } from './InStock/InStock';
import { CheckAvailability } from './CheckAvailability/CheckAvailability';
import { StarRating } from '../StarRating/StarRating'

// Styles
import {
  StyledCardItem,
  StyledCardReviews,
  StyledCardTitle
} from './StyledProductCard/Common';
import { StyledCardIconAddToCart, StyledCardIconAddToCartWrapper } from './StyledProductCard/Icons';
import { StyledCardImg, StyledCardImgWrapper } from './StyledProductCard/Img';
import {
  StyledCardPriceWrapper,
  StyledCardAreRunningOut,
  StyledCardLastPrice,
  StyledCardNowPrice
} from './StyledProductCard/Prices';

// Functions
import cutString from '../../utils/cutString';
import rateCalculator from '../../utils/rateCalculator';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';

export const ProductCard = ({ productInfo }) => {
  const {
    name,
    imageUrls,
    reviews,
    previousPrice,
    currentPrice,
    quantity,
    itemNo
  } = productInfo
  
  // string length limitation and translation of the first letter into capital
  const verifiedTitle = upperCaseFirstLetter(cutString(name, 45))

  // getting an average rating and the number of reviews left
  const { reviewsQuantity, rating } = rateCalculator(reviews)

  return (
    <StyledCardItem>
      {quantity > 0 ? <InStock /> : <CheckAvailability />}

      <StyledCardIconAddToCartWrapper>
        <StyledCardIconAddToCart />
      </StyledCardIconAddToCartWrapper>

      <Link to={`products/${itemNo}`}>
        <StyledCardImgWrapper>
          <StyledCardImg src={imageUrls[0]} />
        </StyledCardImgWrapper>
      </Link>
      
      <div>
        <StarRating rating={rating} />
        <StyledCardReviews>
          Reviews (
          {reviewsQuantity}
          )
        </StyledCardReviews>
      </div>

      <Link to={`products/${itemNo}`}>
        <StyledCardTitle>{verifiedTitle}</StyledCardTitle>
      </Link>

      <StyledCardPriceWrapper>
        <StyledCardLastPrice>{previousPrice}</StyledCardLastPrice>
        <StyledCardNowPrice>
          {`${currentPrice} ₴`}
        </StyledCardNowPrice>
        {
          quantity < 10
            ? <StyledCardAreRunningOut>Product is running out!</StyledCardAreRunningOut>
            : null
        }
      </StyledCardPriceWrapper>
    </StyledCardItem>
  )
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
    previousPrice: PropTypes.number,
    currentPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired
  }).isRequired
}

export default ProductCard;
