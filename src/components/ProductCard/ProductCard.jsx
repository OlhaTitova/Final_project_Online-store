import React from 'react'
import PropTypes from 'prop-types';
import { StarRating } from '../StarRating/StarRating'
import StyledCardItem, {
  StyledCardImg,
  StyledCardLastPrice,
  StyledCardNowPrice,
  StyledCardReviews,
  StyledCardTitle
} from './StyledProductCard';
import { InStocke } from './InStocke/InStocke';
import { CheckAvailability } from './CheckAvailability/CheckAvailability';

export const ProductCard = ({
  title,
  img,
  reviews,
  rating,
  lastPrice,
  nowPrice,
  isGoodsInStock
}) => {
  let verifiedTitle = title;

  if (verifiedTitle.length > 59) {
    const truncatedTitle = verifiedTitle.slice(0, 60);
    verifiedTitle = `${truncatedTitle}...`
  }

  return (
    <StyledCardItem>
      {isGoodsInStock ? <InStocke /> : <CheckAvailability />}
      <StyledCardImg url={img} />
      <div>
        <StarRating rating={rating} />
        <StyledCardReviews>
          Reviews (
          {reviews}
          )
        </StyledCardReviews>
      </div>

      <StyledCardTitle>{verifiedTitle}</StyledCardTitle>

      <div>
        <StyledCardLastPrice>{lastPrice}</StyledCardLastPrice>
        <StyledCardNowPrice>{nowPrice}</StyledCardNowPrice>
      </div>
    </StyledCardItem>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  lastPrice: PropTypes.string.isRequired,
  nowPrice: PropTypes.string.isRequired,
  isGoodsInStock: PropTypes.bool.isRequired,
}

export default ProductCard;
