import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { selectIsLogin } from '../../store/auth/reducer';
import { RowColumn, RowRevers, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import FormCheckout from './FormCheckout/FormCheckout';
import OrderSummary from './OrderSummary/OrderSummary';
import { WrapperFormCheckout } from './StyledCheckout';

const mapStateToProps = (state) => ({
  isLogin: selectIsLogin(state)
})

const Checkout = connect(mapStateToProps, null)(({isLogin}) => {
  window.scrollTo(0, 0)

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
        {!isLogin
          ? (
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
          )
          : null}
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
          <FormCheckout />
        </WrapperFormCheckout>
      </RowRevers>
    </ContainerCart>
  )
})

export default Checkout