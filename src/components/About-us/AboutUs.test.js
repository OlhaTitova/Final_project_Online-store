/* eslint-disable react/jsx-filename-extension */
import render from 'enzyme/build/render'
import React from 'react'
import AboutUsPage from './AboutUs'

describe('AboutUs component', () => {
  test('renders without crashing', () => {
    window.scrollTo = jest.fn()
  })
  
  test('should render TheadCart component', () => {
    render(<AboutUsPage />)
  })
})