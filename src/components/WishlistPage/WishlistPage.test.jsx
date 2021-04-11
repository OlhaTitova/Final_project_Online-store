/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/index'
import WishlistPage from './WishlistPage'

describe('Wishlist page render tests', () => {
  test('Wishlist page simple render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <WishlistPage />
        </Router>
      </Provider>
    )
  })
})