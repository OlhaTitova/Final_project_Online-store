/* eslint-disable react/jsx-filename-extension */
import render from 'enzyme/build/render'
import React from 'react'
import AboutUsPage from './AboutUs'

describe('AboutUs component', () => {
  test('should render TheadCart component', () => {
    render(<AboutUsPage />)
  })
})