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
      <h2>
        {newOrder.firstName}
        , your order has been completed.
      </h2>
      <h2>Thank you for your purchase.</h2>
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
      {/* <p>
        Shipping city:
        <span>
          {newOrder.cityName}
        </span>
      </p> */}
      <p>
        Shipping branch:
        <span>
          {newOrder.deliveryAddress.branch}
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
      <h2>
        An email has been sent to your email with a link
        to the page where you can see detailed information about the order
      </h2>
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