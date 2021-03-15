import React from 'react';
import { useHistory } from 'react-router-dom';
import { RowColumn, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import OrderInfo from './OrderInfo/OrderInfo';

const OrderPage = () => {
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
      </RowColumn>
      <OrderInfo />
    </ContainerCart>
  )
}

export default OrderPage