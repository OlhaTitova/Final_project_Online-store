/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import AboutUsPage from './AboutUs'

describe('AboutUs component', () => {
  test('renders without crashing', () => {
    window.scrollTo = jest.fn()
  })
  
  test('should render TheadCart component', () => {
    global.render(<AboutUsPage />)
  })
})