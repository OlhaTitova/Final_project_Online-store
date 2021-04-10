import render from 'enzyme/build/render'
import React from 'react'
import { Router} from 'react-router-dom/cjs/react-router-dom.min'
import { createBrowserHistory } from 'history';
import {CartItemComponent} from './CartItem'

describe('CartItemComponent', () => {
  test('render CartItem component', () => {
    const removeFromCart = jest.fn()
    const increaseQuantity = jest.fn()
    const decreaseQuantity = jest.fn()
    
    render(
      <Router history={createBrowserHistory()}>
        <CartItemComponent
          product={{
            imageUrls: [
              'https://i1.rozetka.ua/goods/13495213/aoc_cq32g1_images_13495213490.jpg',
              'https://i1.rozetka.ua/goods/13495213/aoc_cq32g1_images_13495213568.jpg',
              'https://i2.rozetka.ua/goods/13495213/aoc_cq32g1_images_13495213646.jpg',
              'https://i1.rozetka.ua/goods/13495213/aoc_cq32g1_images_13495213724.jpg',
            ],
            name: 'monitor 31.5" aoc cq32g1',
            currentPrice: 10500,
            _id: '604ffa554e7ef500153393f4'
          }}
          cartQuantity={1}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      </Router>
    )
  })
  test('check start function in CartItem component', () => {
    const removeFromCart = jest.fn()
    const increaseQuantity = jest.fn()
    const decreaseQuantity = jest.fn()
    removeFromCart()
    increaseQuantity()
    decreaseQuantity()
    expect(removeFromCart).toHaveBeenCalled(1);
    expect(increaseQuantity).toHaveBeenCalled(1);
    expect(decreaseQuantity).toHaveBeenCalled(1);
  })
})