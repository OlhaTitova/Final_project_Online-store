import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import StyledOrderInfo from './StyledOrderInfo';
import { selectCities, selectOrder, selectIsLoading } from '../../../store/cart/reducer';

export const OrderInfoComponent = ({order, cities, isLoading}) => {
  const date = order.date ? new Date(order.date).toLocaleDateString() : null

  const cityName = (cityRefForShipping) => {
    const cityCustomer = cities.find((item) => item.Ref === cityRefForShipping)
    return cityCustomer.CityName
  }

  const showOrderInfo = (newOrder) => (
    <div>
      <h2>
        <span className="italic">
          {newOrder.firstName}
        </span>
        , your order has been accepted.
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
      <p>
        Delivery city:
        <span>
          {cityName(newOrder.deliveryAddress.city)}
        </span>
      </p>
      <p>
        Delivery branch:
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
        Our manager will contact you soon.
      </h2>
    </div>
  )

  return (
    <StyledOrderInfo>
      {isLoading
        ? (
          <Spin tip="Loading..." size="large">
            <Alert
              message="Please wait..."
              description="Order information will appear on screen soon"
              type="info"
            />
          </Spin>
        )
        : showOrderInfo(order) }
    </StyledOrderInfo>
  )
}

const mapStateToProps = (state) => ({
  order: selectOrder(state),
  cities: selectCities(state),
  isLoading: selectIsLoading(state),
})

const OrderInfo = connect(mapStateToProps, null)(OrderInfoComponent)

OrderInfoComponent.propTypes = {
  order: PropTypes.shape({
    orderNo: PropTypes.number.isRequired,
    totalSum: PropTypes.number.isRequired,
    paymentInfo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      CityName: PropTypes.string.isRequired,
      Ref: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default OrderInfo