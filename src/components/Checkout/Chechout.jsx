import React from 'react';
import { RowColumn, WrapperSignIn } from '../CartWrapper/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';

const Checkout = () => (
  <div>
    <ContainerCart>
      <RowColumn>
        <Heading>Checkout</Heading>
        <WrapperSignIn>
          <StyledButton size="md" shape="round" color="borderBlue">Sign In</StyledButton>
        </WrapperSignIn>
      </RowColumn>
    </ContainerCart>
  </div>
)

export default Checkout