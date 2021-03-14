import React from 'react';
import { NavLink } from 'react-router-dom/';
import { RowColumn, WrapperButton } from '../../CartWrapper/Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import { ContainerCart } from '../../common/Container';
import Heading from '../../common/Heading/Heading';
import OrderSuccess from './OrderSuccess';

const Payment = () => (
  <ContainerCart>
    <RowColumn>
      <Heading>Checkout</Heading>
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
    <OrderSuccess />
  </ContainerCart>
)

export default Payment