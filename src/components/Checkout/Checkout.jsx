import React from 'react';
import { NavLink } from 'react-router-dom/';
import { RowColumn, RowRevers, WrapperSignIn } from '../CartWrapper/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import FormCheckout from './FormCheckout/FormCheckout';
import OrderSummary from './OrderSummary/OrderSummary';
import { StyledShippingTitle, WrapperFormCheckout } from './StyledCheckout';

const Checkout = () => (
  <ContainerCart>
    <RowColumn>
      <Heading>Checkout</Heading>
      <NavLink to="/signin">
        <WrapperSignIn>
          <StyledButton size="xl" shape="round" color="borderBlue">Sign In</StyledButton>
        </WrapperSignIn>
      </NavLink>
      <WrapperSignIn>
        <NavLink to="/cart">
          <StyledButton size="xl" shape="round" color="borderGrey">
            Return to cart
          </StyledButton>
        </NavLink>
      </WrapperSignIn>
    </RowColumn>
    <RowRevers>
      <OrderSummary />
      <WrapperFormCheckout>
        <StyledShippingTitle>
          Shipping Details:
        </StyledShippingTitle>
        <FormCheckout />
      </WrapperFormCheckout>
    </RowRevers>
  </ContainerCart>
)

export default Checkout