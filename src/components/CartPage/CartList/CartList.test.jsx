import React from 'react';
import { render } from '@testing-library/react';
import { CartListComponent } from './CartList';
import { productsMock } from '../../../mocks/products';
import { machMedia } from '../../../mocks/matchMedia.mock';

jest.mock('../CartItem/CartItem', () => 'cart-item')

describe('CartListComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(
      <CartListComponent
        products={productsMock}
        clearCart={() => {}}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})