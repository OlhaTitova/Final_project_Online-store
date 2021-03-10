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
      <NavLink to="/cart">
        <WrapperSignIn>
          <StyledButton size="xl" shape="round" color="borderGrey">
            Return to cart
          </StyledButton>
        </WrapperSignIn>
      </NavLink>
    </RowColumn>
    <RowRevers>
      <OrderSummary />
      <WrapperFormCheckout>
        <StyledShippingTitle>
          Shipping Details:
        </StyledShippingTitle>
        <FormCheckout />
        <StyledShippingTitle>
          Payment Details:
        </StyledShippingTitle>
      </WrapperFormCheckout>
    </RowRevers>
  </ContainerCart>
)

export default Checkout