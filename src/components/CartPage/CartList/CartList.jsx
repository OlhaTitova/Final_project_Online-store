/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Empty } from 'antd';
import { useHistory } from 'react-router-dom';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import { ColumnRowBetween} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';
import { clearCart } from '../../../store/cart/middleware';
import { selectProducts } from '../../../store/cart/reducer';

const mapStateToProps = (state) => ({
  products: selectProducts(state),
  isLogin: state.auth.isLogin,
})

const CartList = connect(
  mapStateToProps, {
    clearCart
  }
)(({
  products,
  isLogin,
  clearCart,
}) => {
  const history = useHistory()

  const onClickContinue = () => {
    history.push('/')
  }

  const showCartItem = (productsAll) => productsAll.map((item) => (
    <CartItem
      product={item.product}
      cartQuantity={item.cartQuantity}
      key={item.product._id}
    />
  ))

  return (
    <StyledCartList>
      <TheadCart />
      {products.length ? showCartItem(products) : (<Empty />)}

      <ColumnRowBetween>
        <div className="margin">
          <StyledButton onClick={onClickContinue} size="xl" shape="round" color="borderGrey">Continue Shopping</StyledButton>
        </div>
        <div className="margin">
          <StyledButton onClick={() => clearCart(isLogin)} size="xl" shape="round" color="black">Clear Shopping Cart</StyledButton>
        </div>
      </ColumnRowBetween>
    </StyledCartList>
  )
})

export default CartList;

CartList.propTypes = {
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    _id: PropTypes.string,
  }),
  getCart: PropTypes.func,
  clearCart: PropTypes.func,
}