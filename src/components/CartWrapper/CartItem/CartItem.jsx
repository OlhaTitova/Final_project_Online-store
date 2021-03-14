/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseOutlined, MinusOutlined, PlusOutlined,
} from '@ant-design/icons';
import { Button, Row, Col} from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { ButtonRemoveEdit, StyledCartItem, StyledInput} from './StyledCartItem';
import { DisplayRow } from '../Flex';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../store/cart/middleware';
import upperCaseFirstLetter from '../../../utils/upperCaseFirstLetter';

export const CartItem = connect(null, {
  increaseQuantity, decreaseQuantity, removeFromCart
})(({
  product,
  cartQuantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) => (
  <div>
    <StyledCartItem>
      <Row align="middle">
        <Col xs={8} md={8} lg={5}>
          <NavLink to={`products/${product.itemNo}`}>
            <img src={product.imageUrls[0]} alt={product.name} />
          </NavLink>
        </Col>
        <Col xs={16} md={16} lg={7}>
          <NavLink to={`/product/${product.itemNo}`}>
            <p className="bold">{upperCaseFirstLetter(product.name)}</p>
            <p>{upperCaseFirstLetter(product.description)}</p>
          </NavLink>

        </Col>
        <Col xs={7} md={7} lg={3}>
          <span className="price">
            {product.currentPrice}
            ₴
          </span>
        </Col>
        <Col xs={7} md={7} lg={5}>
          <DisplayRow>
            <Button onClick={() => decreaseQuantity(product._id)} shape="circle" icon={<MinusOutlined />} />
            <StyledInput value={cartQuantity} />
            <Button onClick={() => increaseQuantity(product._id)} shape="circle" icon={<PlusOutlined />} />
          </DisplayRow>
        </Col>
        <Col xs={7} md={7} lg={3} className="subtotal">
          <span>
            {product.currentPrice * cartQuantity}
            ₴
          </span>
        </Col>
        <Col xs={2} md={3} lg={1}>
          <ButtonRemoveEdit onClick={() => removeFromCart(product._id)} shape="circle" icon={<CloseOutlined />} />
        </Col>
      </Row>
    </StyledCartItem>

  </div>
))

export default CartItem;

CartItem.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
}