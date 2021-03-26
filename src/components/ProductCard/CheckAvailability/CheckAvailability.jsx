import React from 'react';
import { connect } from 'react-redux';
import { StyledCheckAvailabilityWrapper, StyledCheckAvailabilityIcon, StyledCheckAvailabilityBtn } from './StyledCheckAvailability';
import { showModal } from '../../../store/subscriceOnProductModal/middleware'

export const CheckAvailability = connect(null, { showModal })(({ showModal }) => (
  <StyledCheckAvailabilityWrapper onClick={showModal}>
    <StyledCheckAvailabilityIcon />
    <StyledCheckAvailabilityBtn>check availability</StyledCheckAvailabilityBtn>
  </StyledCheckAvailabilityWrapper>
))

export default CheckAvailability;
