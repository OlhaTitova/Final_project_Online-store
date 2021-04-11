import React from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import { cityMock } from '../../../mocks/cities';
import { orderMock } from '../../../mocks/order';
import { OrderInfoComponent } from './OrderInfo';

describe('OrderInfoComponent', () => {
  test('render', () => {
    const {asFragment} = render(<OrderInfoComponent
      order={orderMock}
      cities={cityMock}
      isLoading={false}
    />)
    expect(asFragment()).toMatchSnapshot()
  })
})