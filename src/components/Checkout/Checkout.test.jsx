import render from 'enzyme/build/render';
import React from 'react';
import { CheckoutComponent } from './Checkout';

describe.skip('CheckoutComponent', () => {
  test('render', () => {
    render(<CheckoutComponent
      isLogin
    />)
  })
})
