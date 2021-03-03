import React from 'react';
import { connect } from 'react-redux';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import { ColumnRowBetween, RowColumn} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';
import { addProductToCart, authLogInCart, getCart } from '../../../store/cart/middleware';

const MapStateToProps = (state) => ({cart: state.cart.cart})

const CartList = connect(MapStateToProps, {addProductToCart, authLogInCart, getCart})(({
  addProductToCart,
  // authLogInCart,
  // getCart,
  cart
}) => {
  // authLogInCart({loginOrEmail: 'admin', password: 'adminPassword'});
  const productID = '603ced9ae8326900152cfcee';

  // useEffect(() => {
  //   getCart()
  // }, [getCart]);

  console.log(cart);
  console.log(cart.products);

  return (
    <StyledCartList>
      <StyledButton size="xl" shape="round" onClick={() => addProductToCart(productID)}>Add to cart</StyledButton>
      <TheadCart />
      <CartItem />

      {cart.products.map((product) => (
        <CartItem
          imageUrls={product.imageUrls[0]}
          name={`${product.name} ${product.params}`}
          currentPrice={product.currentPrice}
          // cartQuantity={product.cartQuantity}
          subtotal={product.currentPrice * product.cartQuantity}
          key="1"
        />
      
      ))}
      <ColumnRowBetween>
        <RowColumn>
          <div className="margin">
            <StyledButton size="xl" shape="round" color="borderGrey">Continue Shopping</StyledButton>
          </div>
          <div className="margin">
            <StyledButton size="xl" shape="round" color="black">Clear Shopping Cart</StyledButton>
          </div>

        </RowColumn>
        <div className="margin">

          <StyledButton size="xl" shape="round" color="black">
            Update Shopping Cart
          </StyledButton>
        </div>

      </ColumnRowBetween>
    </StyledCartList>
  )
});

export default CartList;