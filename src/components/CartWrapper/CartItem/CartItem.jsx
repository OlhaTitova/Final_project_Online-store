/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined,
} from '@ant-design/icons';
import { Button} from 'antd';
import { ButtonRemoveEdit, StyledCartItem, StyledInput} from './StyledCartItem';
import { Row } from '../Flex';
import { decreaseQuantity, addToCart } from '../../../store/cart/middleware';

export const CartItem = ({
  product,
  cartQuantity
}) => (
  <div>
    <StyledCartItem>
      <div className="margin">
        <Row>
          <img src={product.imageUrls[0]} alt="" />
          <p>{product.name}</p>
        </Row>
      </div>
      <div className="margin">
        <Row>
          <span className="price">
            {product.currentPrice}
            <span className="price">
              ₴
            </span>
          </span>

          <Button onClick={decreaseQuantity(product.itemNo)} shape="circle" icon={<MinusOutlined />} />
          <StyledInput value={cartQuantity} />
          <Button onClick={addToCart(product.itemNo)} shape="circle" icon={<PlusOutlined />} />
          
          <span className="subtotal">
            {product.currentPrice * cartQuantity}
            <span className="price">
              ₴
            </span>
          </span>

          <div className="column">
            <ButtonRemoveEdit shape="circle" icon={<CloseOutlined />} />
            <ButtonRemoveEdit shape="circle" icon={<EditOutlined />} />
          </div>
        </Row>
      </div>
    </StyledCartItem>

  </div>
)

export default CartItem;

CartItem.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    itemNo: PropTypes.string,
  }).isRequired,
}