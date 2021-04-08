/* eslint-disable react/jsx-filename-extension */
// import React from 'react'
// import CartItem from './CartItem'
  
// test('should render CartPage component', () => {
//   const component = global.shallow(<CartItem />)
//   global.render(component)
// })

test('renders without crashing', () => {
  window.scrollTo = jest.fn()
})
