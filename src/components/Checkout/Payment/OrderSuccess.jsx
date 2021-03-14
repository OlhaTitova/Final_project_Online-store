import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectOrder } from '../../../store/cart/reducer';
import StyledOrderSuccess from './StyledOrderSuccess';

const mapStateToProps = (state) => ({
  order: selectOrder(state)
})

const OrderSuccess = connect(mapStateToProps)(({order}) => {
  const date = order && order.date ? new Date(order.date).toLocaleDateString() : null
  return (
    <StyledOrderSuccess>
      <h2>Thank you for order! You are welcome!</h2>
      <p>
        Your orderNo is:
        <span>
          {order.orderNo}
        </span>
      </p>
      <p>
        Order total:
        <span>
          {order.totalSum}
          ₴
        </span>
      </p>
      <p>
        Payment method:
        <span>
          {order.paymentInfo}
        </span>
      </p>
      <p>
        Date:
        <span>
          {date}
        </span>
      </p>
      {/* <p>To complete the payment, click the button below</p> */}
    </StyledOrderSuccess>
  )
})
export default OrderSuccess

OrderSuccess.propTypes = {
  order: PropTypes.shape({
    orderNo: PropTypes.number,
    totalSum: PropTypes.number,
    paymentInfo: PropTypes.string,
    date: PropTypes.string,
  }),
}