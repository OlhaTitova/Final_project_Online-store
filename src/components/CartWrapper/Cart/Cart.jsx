import React from 'react';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../common/Heading/Heading';
import {ContainerCart} from '../../common/Container';
import CartList from '../CartList/CartList';
import Summary from '../Summary/Summary';
import { RowRevers } from '../Flex';
// import StyledRoutingCart from '../StyledRoutingCart';
import RoutingCart from '../RoutingCart';

export const Cart = () => (
  <div>
    <ContainerCart>
      <RoutingCart />
      <Heading>
        Shopping Cart
      </Heading>
      <RowRevers>
        <Summary />
        <CartList />
      </RowRevers>
    </ContainerCart>
  </div>
);

export default Cart;