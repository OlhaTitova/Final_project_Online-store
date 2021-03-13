/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import InputGroup from './InputGroup'

describe('All test for input group', () => {
  const props = {
    inputHandler: () => 'do something',
    decreaseHandler: () => 'do something',
    increaseHandler: () => 'do something',
    quantity: 10
  }

  test('InputGroup render test', () => {
    render(<InputGroup {...props} />)
  })

  test('check the props value in the input', () => {
    const { getByDisplayValue } = render(<InputGroup {...props} />)
    expect(getByDisplayValue('10')).toBeDefined()
  })
})