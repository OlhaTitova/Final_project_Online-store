import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StyledButton from '../../common/Buttons/StyledButton';
import { selectCartSummary } from '../../../store/cart/reducer';
import StyledSummary from './StyledSummary';
import { RowBetween } from '../Flex';

const mapStateToProps = (state) => ({
  summary: selectCartSummary(state),
})

const Summary = connect(mapStateToProps)(({summary}) => (
  <StyledSummary>
    <h4>Summary</h4>
    <RowBetween>
      <div>
        <p className="sumtotal">
          Items total:
        </p>
      </div>
      <div>
        <span className="sumtotal">
          {summary}
          ₴
        </span>
      </div>
    </RowBetween>
    <div>
      <NavLink to="/checkout">
        <StyledButton
          shape="round"
          color="yellow"
        >
          Proceed to Checkout
        </StyledButton>
      </NavLink>
    </div>
  </StyledSummary>
));

export default Summary;

Summary.defaultProps = {
  summary: 0,
}

Summary.propTypes = {
  summary: PropTypes.number,
}
