import render from 'enzyme/build/render'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/index'
import HomePage from './HomePage'

test('should render HomePage component', () => {
  render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>
  )
})