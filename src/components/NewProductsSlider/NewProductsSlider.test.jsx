import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import NewProductsSlider from './NewProductsSlider'
import { store } from '../../store/index'

describe('All test for NewProductsSlider', () => {
  global.matchMedia = global.matchMedia || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

  test('NewProductsSlider render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <NewProductsSlider />
        </Router>
      </Provider>
    )
  })
})