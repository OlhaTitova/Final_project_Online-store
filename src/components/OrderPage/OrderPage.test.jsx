/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { OrderPageComponent } from './OrderPage';

jest.mock('./OrderInfo/OrderInfo', () => 'order-info')

describe('OrderPageComponent', () => {
  test('render', () => {
    const history = createMemoryHistory()
    const {asFragment} = render(
      <Router history={history}>
        <OrderPageComponent
          isLogin={false}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})