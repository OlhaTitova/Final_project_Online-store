import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { RowColumn, RowRevers, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import FormCheckout from './FormCheckout/FormCheckout';
import OrderSummary from './OrderSummary/OrderSummary';
import { StyledShippingTitle, WrapperFormCheckout } from './StyledCheckout';

const Checkout = () => {
  const history = useHistory()

  const onClickSignIn = () => {
    history.push('/signin')
  }
  const onClickCart = () => {
    history.push('/cart')
  }

  return (
    <ContainerCart>
      <RowColumn>
        <Heading>
          Checkout
        </Heading>
        <WrapperButton>
          <StyledButton
            onClick={onClickSignIn}
            size="xl"
            shape="round"
            color="borderBlue"
          >
            Sign In
          </StyledButton>
        </WrapperButton>
        <WrapperButton>
          <StyledButton
            onClick={onClickCart}
            size="xl"
            shape="round"
            color="borderGrey"
          >
            Back to cart
          </StyledButton>
        </WrapperButton>
      </RowColumn>
      <RowRevers>
        <OrderSummary />
        <WrapperFormCheckout>
          <StyledShippingTitle>
            Customer Details:
          </StyledShippingTitle>
          <FormCheckout />
        </WrapperFormCheckout>
      </RowRevers>
    </ContainerCart>
  )
}

export default Checkout