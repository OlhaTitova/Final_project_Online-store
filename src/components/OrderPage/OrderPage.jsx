import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RowColumn, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import OrderInfo from './OrderInfo/OrderInfo';

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin
})

const OrderPage = connect(mapStateToProps, null)(({isLogin}) => {
  const history = useHistory()

  const onClickHome = () => {
    history.push('/')
  }
  const onClickDashboard = () => {
    history.push('/')
  }
  return (
    <ContainerCart>
      <RowColumn>
        <Heading>Order</Heading>
        <WrapperButton>
          <StyledButton
            onClick={onClickHome}
            size="lg"
            shape="round"
            color="borderBlue"
          >
            Back to Homepage
          </StyledButton>
        </WrapperButton>
        
        {isLogin
          ? (
            <WrapperButton>
              <StyledButton
                onClick={onClickDashboard}
                size="lg"
                shape="round"
                color="borderGrey"
              >
                Go to Dashboard
              </StyledButton>
            </WrapperButton>
          )
          : null}
      </RowColumn>
      <OrderInfo />
    </ContainerCart>
  )
})

export default OrderPage