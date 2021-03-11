import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import SignUpBox from './SignUpBox'

describe('All tests for SignUpBox', () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }; // обходной путь поскольку window не поддерживает matchMedia.
  };

  test('SignUpBox render test', () => {
    render(
      <Router>
        <SignUpBox />
      </Router>
    )
  })

  test('Check is title found by a text', () => {
    const { getByText } = render(
      <Router>
        <SignUpBox />
      </Router>
    )
    expect(getByText('Create an account')).toBeDefined()
  })
})