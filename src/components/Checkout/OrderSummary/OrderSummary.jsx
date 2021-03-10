import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCartSummary, selectShippingCost } from '../../../store/cart/reducer';
import { RowBetween } from '../../CartWrapper/Flex';
import StyledOrderSummary from './StyledOrderSummary';

const mapStateToProps = (state) => ({
  summary: selectCartSummary(state),
  shippingCost: selectShippingCost(state),
})

const OrderSummary = connect(mapStateToProps)(({summary, shippingCost}) => (
  <StyledOrderSummary>
    <h4>Order summary</h4>
    <RowBetween>
      <div>
        <p className="sumtotal">
          Items total:
        </p>
      </div>
      <div>
        <span className="sumtotal">
          ₴
          {summary}
        </span>
      </div>
    </RowBetween>
    <RowBetween>
      <div>
        <p className="sumtotal">
          Shipping:
        </p>
      </div>
      <div>
        <span className="sumtotal">
          ₴
          {shippingCost}
        </span>
      </div>
    </RowBetween>
    <div className="line">
      <RowBetween>
        <div>
          <p className="ordertotal">
            Order total:
          </p>
        </div>
        <div>
          <span className="ordertotal">
            ₴
            {summary + shippingCost}
          </span>
        </div>
      </RowBetween>
    </div>

  </StyledOrderSummary>
));

export default OrderSummary;

OrderSummary.defaultProps = {
  summary: 0,
  shippingCost: 0,
}
  
OrderSummary.propTypes = {
  summary: PropTypes.number,
  shippingCost: PropTypes.number,
}