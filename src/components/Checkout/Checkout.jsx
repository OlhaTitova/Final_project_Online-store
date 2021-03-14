import React from 'react';
import { NavLink } from 'react-router-dom/';
import { RowColumn, RowRevers, WrapperButton } from '../CartWrapper/Flex';
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
        <WrapperButton>
          <StyledButton size="xl" shape="round" color="borderBlue">
            Sign In
          </StyledButton>
        </WrapperButton>
      </NavLink>
      <WrapperButton>
        <NavLink to="/cart">
          <StyledButton size="xl" shape="round" color="borderGrey">
            Back to cart
          </StyledButton>
        </NavLink>
      </WrapperButton>
    </RowColumn>
    <RowRevers>
      <OrderSummary />
      <WrapperFormCheckout>
        <StyledShippingTitle>
          Order Details:
        </StyledShippingTitle>
        <FormCheckout />
      </WrapperFormCheckout>
    </RowRevers>
  </ContainerCart>
)

export default Checkout