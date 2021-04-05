import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { selectIsLogin } from '../../store/auth/reducer';
import { RowColumn, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import OrderInfo from './OrderInfo/OrderInfo';

const mapStateToProps = (state) => ({
  isLogin: selectIsLogin(state)
})

const OrderPage = connect(mapStateToProps, null)(({isLogin}) => {
  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onClickHome = () => {
    history.push('/')
  }
  const onClickDashboard = () => {
    history.push('/dashboard')
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
              <Link to="/dashboard">
                <StyledButton
                  onClick={onClickDashboard}
                  size="lg"
                  shape="round"
                  color="borderGrey"
                >
                  Go to Dashboard
                </StyledButton>
              </Link>
            </WrapperButton>
          )
          : null}
      </RowColumn>
      <OrderInfo />
    </ContainerCart>
  )
})

export default OrderPage