import React from 'react';
import PropTypes from 'prop-types';
import {
  WrapperCartItem,
} from '../StyledCartItem';

export const CartItem = ({
  img, description, price, quantity, subtotal
}) => (
  <div>
    <WrapperCartItem>
      <img src={img} alt="" />
      <p>{description}</p>
      <span>{price}</span>
      <select name="select">
        {[...Array(10)].map((x) => <option key={x} value={x}>{quantity}</option>)}
      </select>
      <span>{subtotal}</span>
      <div>
        <div className="removeButton" />
        <div className="editButton" />
      </div>
    </WrapperCartItem>

  </div>
)
export default CartItem;

CartItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
}