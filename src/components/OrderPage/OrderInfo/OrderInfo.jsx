import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import StyledOrderInfo from './StyledOrderInfo';
import { selectOrder } from '../../../store/cart/reducer';

const mapStateToProps = (state) => ({
  order: selectOrder(state)
})

const OrderInfo = connect(mapStateToProps)(({order}) => {
  const date = order.date ? new Date(order.date).toLocaleDateString() : null

  const showOrderInfo = (newOrder) => (
    <div>
      <h2>Thank you for order! You are welcome!</h2>
      <p>
        Your orderNo is:
        <span>
          {newOrder.orderNo}
        </span>
      </p>
      <p>
        Order total:
        <span>
          {newOrder.totalSum}
          ₴
        </span>
      </p>
      <p>
        Payment method:
        <span>
          {newOrder.paymentInfo}
        </span>
      </p>
      <p>
        Date:
        <span>
          {date}
        </span>
      </p>
    </div>
  )

  return (
    <StyledOrderInfo>
      {Object.keys(order).length > 0
        ? showOrderInfo(order)
        : (
          <Spin tip="Loading..." size="large">
            <Alert
              message="Please wait..."
              description="Order information will appear on screen soon"
              type="info"
            />
          </Spin>
        )}
    </StyledOrderInfo>
  )
})
export default OrderInfo

OrderInfo.propTypes = {
  order: PropTypes.shape({
    orderNo: PropTypes.number,
    totalSum: PropTypes.number,
    paymentInfo: PropTypes.string,
    date: PropTypes.string,
  }),
}