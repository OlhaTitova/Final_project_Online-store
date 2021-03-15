import React from 'react';
import { NavLink } from 'react-router-dom/';
import { RowColumn, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import OrderInfo from './OrderInfo/OrderInfo';

const OrderPage = () => (
  <ContainerCart>
    <RowColumn>
      <Heading>Order</Heading>
      <NavLink to="/">
        <WrapperButton>
          <StyledButton size="lg" shape="round" color="borderBlue">
            Back to Homepage
          </StyledButton>
        </WrapperButton>
      </NavLink>
      <WrapperButton>
        <NavLink to="/">
          <StyledButton size="lg" shape="round" color="borderGrey">
            Back to Dashboard
          </StyledButton>
        </NavLink>
      </WrapperButton>
    </RowColumn>
    <OrderInfo />
  </ContainerCart>
)

export default OrderPage