import render from 'enzyme/build/render'
import shallow from 'enzyme/build/shallow'
import React from 'react'
import TheadCart from './TheadCart'

describe('TheadCart component', () => {
  test('should render TheadCart component', () => {
    render(<TheadCart />)
  })
  test('to have .subtotal', () => {
    const component = shallow(<TheadCart />)
    const wrapper = component.find('.subtotal')
    expect(wrapper.length).toBe(1)
  })
})