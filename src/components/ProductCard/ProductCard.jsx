import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Compomemts
import { connect } from 'react-redux';
import { InStock } from './InStock/InStock';
import { ProductSoldOut } from './ProductSoldOut/ProductSoldOut';
import { StarRating } from '../StarRating/StarRating'
import StyledButton from '../common/Buttons/StyledButton'
import FavoriteIcon from '../FavotiteIcon/FavoriteIcon'

// Styles
import {
  CardItem,
  CardReviews,
  CardTitle,
  CardImage,
  ReviewsBox,
  ImageWrapper,
  PurchaseGroup,
  PriceBox,
  CardLastPrice,
  CardCurrentPrice,
  RatingBox,
} from './StyledProductCard'

// Functions
import cutString from '../../utils/cutString';
import rateCalculator from '../../utils/rateCalculator';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import { addToCart } from '../../store/cart/middleware'
import { showModal } from '../../store/subscriceOnProductModal/middleware'

export const ProductCard = connect(null, { addToCart, showModal })((
  {
    productInfo,
    addToCart,
    showModal,
  }
) => {
  const {
    name,
    imageUrls,
    reviews,
    previousPrice,
    currentPrice,
    quantity,
    itemNo,
  } = productInfo
  const isAvilable = quantity > 0

  const promotionalProduct = previousPrice !== 0
  // string length limitation and translation of the first letter into capital
  const verifiedTitle = upperCaseFirstLetter(cutString(name, 38))

  // getting an average rating and the number of reviews left
  const { reviewsQuantity, rating } = rateCalculator(reviews)
  return (
    <CardItem className="hidden">

      <Link to={`products/${itemNo}`} onClick={() => window.scrollTo(0, 0)}>
        <ImageWrapper>
          <CardImage src={imageUrls[0]} />
        </ImageWrapper>
      </Link>

      <ReviewsBox>
        <RatingBox>
          <StarRating rating={rating} />
          <CardReviews>
            Reviews (
            {reviewsQuantity}
            )
          </CardReviews>
        </RatingBox>
        <FavoriteIcon
          product={productInfo}
          small
          showTooltip
        />
      </ReviewsBox>
      {isAvilable ? <InStock /> : <ProductSoldOut /> }

      <Link to={`products/${itemNo}`} onClick={() => window.scrollTo(0, 0)}>
        <CardTitle>
          {verifiedTitle}
        </CardTitle>
      </Link>

      <PurchaseGroup>
        <PriceBox>
          {promotionalProduct && (
          <CardLastPrice>
            {`${previousPrice} ₴`}
          </CardLastPrice>
          )}
          <CardCurrentPrice promotionalProduct={promotionalProduct}>
            {`${currentPrice} ₴`}
          </CardCurrentPrice>
        </PriceBox>
        {isAvilable ? (
          <StyledButton
            size="xs"
            shape="round"
            onClick={() => addToCart(productInfo, 1)}
          >
            Add to cart
          </StyledButton>
        ) : (
          <StyledButton
            color="borderGrey"
            size="xs"
            shape="round"
            onClick={showModal}
          >
            Check avilabiliy
          </StyledButton>
        )}
        
      </PurchaseGroup>
    </CardItem>
  )
})

ProductCard.propTypes = {
  addToCart: PropTypes.func,
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
    previousPrice: PropTypes.number,
    currentPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
}

export default ProductCard;
