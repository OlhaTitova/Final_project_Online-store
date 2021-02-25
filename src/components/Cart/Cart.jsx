import React from 'react';
import Heading from '../common/Heading/Heading';
import {Container} from '../common/Container';
import CartList from './CartList/CartList';

export const Cart = () => (
  <div>
    <Container>
      <Heading>
        Shopping Cart
      </Heading>
      <CartList />
    </Container>
  </div>
);

export default Cart;