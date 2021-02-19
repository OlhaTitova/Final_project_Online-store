import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BannerSlider } from './BannerSlider'

test('BannerSlider render test', () => {
  render(
    <BannerSlider />
  )
})