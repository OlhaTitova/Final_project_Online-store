/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import {render} from '@testing-library/react'
import { machMedia } from '../../../mocks/matchMedia.mock';
import {CartItemComponent} from './CartItem'
import { productsMock } from '../../../mocks/products';

describe('CartItemComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const history = createMemoryHistory()
    const {asFragment} = render(
      <Router history={history}>
        <CartItemComponent
          product={productsMock[0].product}
          cartQuantity={1}
          increaseQuantity={() => {}}
          decreaseQuantity={() => {}}
          removeFromCart={() => {}}
        />
      </Router>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})