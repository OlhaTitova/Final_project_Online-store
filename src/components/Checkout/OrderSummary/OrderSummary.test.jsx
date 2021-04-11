import React from 'react';
import { render } from '@testing-library/react';
import OrderSummary from './OrderSummary';

describe('OrderSummary', () => {
  test('render', () => {
    const {asFragment} = render(<OrderSummary
      summary={125478}
      shippingCost={124}
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
