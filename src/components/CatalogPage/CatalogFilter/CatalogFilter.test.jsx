import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import CatalogFilter from './CatalogFilter';
import { store } from '../../../store/index'

describe('All test for catalog filter', () => {
  test('Catalog filter render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <CatalogFilter showFilter setShowFilter={() => {}} />
        </Router>
      </Provider>
    )
  })
  test('check button render', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <CatalogFilter
            showFilter
            setShowFilter={() => {}}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Apply Filter')).toBeDefined()
  })
})