import React from 'react';
import { render } from '@testing-library/react';
import { OrderPageComponent } from './OrderPage';

describe('OrderPageComponent', () => {
  test('render', () => {
    const {asFragment} = render(<OrderPageComponent />)
    expect(asFragment()).toMatchSnapshot()
  })
})