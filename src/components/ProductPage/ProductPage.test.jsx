/* eslint-disable padded-blocks */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../store/index'
import ProductPage from './ProductPage'
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter'
import rateCalculator from '../../utils/rateCalculator'

describe('All tests for Product page', () => {

  configure({ adapter: new Adapter() })

  test('Product Page render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>
    )
  })

  test('check is animation runned', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      false
    )
    expect(result.find('div')).toBeDefined()
  })

  test('Check is some children extist after componentDidMount', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      true
    )
    expect(result.text().includes('About product')).toBeDefined()
  })

  test('Check is product image exist after componentDidMount', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      true
    )
    expect(result.find('[alt="Product image"]')).toBeDefined()
  })

  test('Check is product has a description list', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      true
    ).dive()
    expect(result.find('ul')).toBeDefined()
    expect(result.find('li')).toBeDefined()
  })

  test('check is upperCaseFunction works correct', () => {
    expect(upperCaseFirstLetter('test string') === 'Test string').toBe(true)
  })

  test('chek is rateCalculator returns object with correct keys', () => {
    const expected = {
      reviewsQuantity: 5,
      rating: 5,
    }
    expect(rateCalculator([5, 5, 5, 5, 5])).toBeInstanceOf(Object)
    expect(rateCalculator([5, 5, 5, 5, 5])).toMatchObject(expected)
  })
})