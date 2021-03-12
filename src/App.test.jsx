import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from './App'

test('App render test', () => {
  // Поскольку JSDOM не поддерживает, window.matchMedia
  // В документации Jest теперь есть "официальный" обходной путь
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
})