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
import { InStock } from './InStock/InStock';
import { CheckAvailability } from './CheckAvailability/CheckAvailability';

export const ProductCard = ({
  title,
  img,
  reviews,
  rating,
  previousPrice,
  currentPrice,
  isGoodsInStock
}) => {
  let verifiedTitle = title;

  if (verifiedTitle.length > 59) {
    const truncatedTitle = verifiedTitle.slice(0, 60);
    verifiedTitle = `${truncatedTitle}...`
  }

  return (
    <StyledCardItem>
      {isGoodsInStock ? <InStock /> : <CheckAvailability />}
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
        <StyledCardLastPrice>
          {previousPrice}
          ₴
        </StyledCardLastPrice>
        <StyledCardNowPrice>
          {currentPrice}
          ₴
        </StyledCardNowPrice>
      </div>
    </StyledCardItem>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  previousPrice: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  isGoodsInStock: PropTypes.bool.isRequired,
}

export default ProductCard;
