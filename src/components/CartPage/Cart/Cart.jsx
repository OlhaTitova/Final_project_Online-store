import React from 'react';
import Heading from '../../common/Heading/Heading';
import {Container} from '../../common/Container';
import CartList from '../CartList/CartList';
import Summary from '../Summary/Summary';
import {Row} from './Row';

export const Cart = () => (
  <div>
    <Container>
      <Heading>
        Shopping Cart
      </Heading>
      <Row>
        <CartList />
        <Summary />
      </Row>
    </Container>
  </div>
);

export default Cart;