import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import render from 'enzyme/build/render'
import { store } from './store/index'
import App from './App'
import render from 'enzyme/build/render'

test('App render test', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
})