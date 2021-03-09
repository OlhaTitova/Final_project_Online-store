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
  width: '100vw',
  height: '100vh'
}

export default SpinAnimation