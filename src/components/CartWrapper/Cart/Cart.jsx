import React from 'react';
import Heading from '../../common/Heading/Heading';
import {ContainerCart} from '../../common/Container';
import CartList from '../CartList/CartList';
import Summary from '../Summary/Summary';
import { RowRevers } from '../Flex';

export const Cart = () => (
  <div>
    <ContainerCart>
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