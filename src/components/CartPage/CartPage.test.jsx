import render from '@testing-library/react'
import React from 'react'
import CartPage from './CartPage'

test('render CartPage component', () => {
  const {asFragment} = render(<CartPage />)

  expect(asFragment()).toMatchSnapshot()
})