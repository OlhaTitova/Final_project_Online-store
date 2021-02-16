import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from './App'

test('App render test', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})