import React from 'react'
import PropTypes from 'prop-types'
import { AnimationWrapper, Spin } from './StylesSpinAnimation'

const SpinAnimation = ({ width, height }) => (
  <AnimationWrapper width={width} height={height}>
    <Spin />
  </AnimationWrapper>
)
SpinAnimation.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}
SpinAnimation.defaultProps = {
  width: '90vw',
  height: '90vh'
}

export default SpinAnimation