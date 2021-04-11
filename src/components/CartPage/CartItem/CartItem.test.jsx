import render from '@testing-library/react'
import React from 'react'
import {CartItemComponent} from './CartItem'
import { productMock } from '../../../mocks/products';

describe('CartItemComponent', () => {
  test('render', () => {
    const {asFragment} = render(<CartItemComponent
      product={productMock}
      cartQuantity={1}
      increaseQuantity={() => {}}
      decreaseQuantity={() => {}}
      removeFromCart={() => {}}
    />)

    expect(asFragment()).toMatchSnapshot()
  })
  // test('handle remove item', () => {
    
  // })
})