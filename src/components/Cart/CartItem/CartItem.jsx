import React from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { StyledButton, StyledCartItem} from './StyledCartItem';
// import { Button } from 'antd';

export const CartItem = ({
  img, description, price, quantity, subtotal
}) => (
  <div>
    <StyledCartItem>
      <img src={img} alt="" />
      <p>{description}</p>
      <span>{price}</span>
      <select name="select">
        {[...Array(10)].map((x) => <option key={x} value={x}>{quantity}</option>)}
      </select>
      <span>{subtotal}</span>
      <div>
        <StyledButton shape="circle" icon={<CloseOutlined />} />
        <StyledButton shape="circle" icon={<EditOutlined />} />

        {/* <div className="removeButton" />
        <div className="editButton" /> */}
      </div>
    </StyledCartItem>

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