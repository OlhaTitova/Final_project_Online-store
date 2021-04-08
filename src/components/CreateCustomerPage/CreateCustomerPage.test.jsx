import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import CreateCustomerPage from './CreateCustomerPage'

describe('All test for CreateCustomerPage', () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }; // обходной путь поскольку window не поддерживает matchMedia.
  };

  test('CreateCustomerPage render test', () => {
    render(
      <Router>
        <CreateCustomerPage />
      </Router>
    )
  })

  test('Check CustomerPage has a title', () => {
    const { getByText } = render(
      <Router>
        <CreateCustomerPage />
      </Router>
    )
    expect(getByText('Customer Registration')).toBeDefined()
  })
})