import React from 'react';
import { render } from '@testing-library/react'
import { CheckoutComponent } from './Checkout';

jest.mock('./OrderSummary/OrderSummary', () => 'order-summary')
jest.mock('./FormCheckout/FormCheckout', () => 'form-checkout')

describe('CheckoutComponent', () => {
  test('render', () => {
    const {asFragment} = render(<CheckoutComponent
      isLogin
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
