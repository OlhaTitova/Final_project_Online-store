import React from 'react';
import { render } from '@testing-library/react';
import { CartListComponent } from './CartList';
import { productsMock } from '../../../mocks/products';

describe('CartListComponent', () => {
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