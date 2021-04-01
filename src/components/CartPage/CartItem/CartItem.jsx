/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseOutlined, MinusOutlined, PlusOutlined,
} from '@ant-design/icons';
import {
  Button, Row, Col, message,
} from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonRemoveEdit, StyledCartItem, StyledInput} from './StyledCartItem';
import { AlignItemsCenter } from '../Flex';
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
}) => {
  console.log('item')
  const cartQuantityCheck = (cartQuantity, product) => {
    if (cartQuantity < 1) {
      removeFromCart(product._id)
    }
    return cartQuantity
  }

  const incVisibility = (cartQuantity, product) => {
    if (cartQuantity >= product.quantity) {
      message.warning(`In stock ${product.quantity} items`)
      return true
    }
    return false
  }

  return (
    <StyledCartItem>
      <Row align="middle">
        <Col xs={8} md={8} lg={5}>
          <Link to={`products/${product.itemNo}`}>
            <img src={product.imageUrls[0]} alt={product.name} />
          </Link>
        </Col>
        <Col xs={16} md={16} lg={7}>
          <Link to={`/products/${product.itemNo}`}>
            <p className="bold">{upperCaseFirstLetter(product.name)}</p>
          </Link>
        </Col>
        <Col xs={5} md={7} lg={3}>
          <span className="price">
            {product.currentPrice}
            ₴
          </span>
        </Col>
        <Col xs={7} md={8} lg={5}>
          <AlignItemsCenter>
            <Button onClick={() => decreaseQuantity(product._id)} shape="circle" icon={<MinusOutlined />} />
            <StyledInput value={cartQuantityCheck(cartQuantity, product)} />
            <Button disabled={incVisibility(cartQuantity, product)} onClick={() => increaseQuantity(product)} shape="circle" icon={<PlusOutlined />} />
          </AlignItemsCenter>
        </Col>
        <Col xs={9} md={6} lg={3} className="subtotal">
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
  )
})

export default CartItem;

CartItem.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    _id: PropTypes.string,
  }),
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
  removeFromCart: PropTypes.func,
}