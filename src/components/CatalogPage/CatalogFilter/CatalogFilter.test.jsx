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
          <CatalogFilter showFilter setShowFilter={() => {}} setFilter={() => {}} />
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
            setFilter={() => {}}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Apply Filtres')).toBeDefined()
  })
  test('check checkbox render', () => {
    const {queryByTestId} = render(
      <Provider store={store}>
        <Router>
          <CatalogFilter
            showFilter
            setShowFilter={() => {}}
            setFilter={() => {}}
          />
        </Router>
      </Provider>
    )
    expect(queryByTestId('msi-check')).toBeDefined()
    expect(queryByTestId('lg-check')).toBeDefined()
    expect(queryByTestId('liyama-check')).toBeDefined()
    expect(queryByTestId('samsung-check')).toBeDefined()
    expect(queryByTestId('gamingMonitors-check')).toBeDefined()
    expect(queryByTestId('tablets-check')).toBeDefined()
    expect(queryByTestId('laptops-check')).toBeDefined()
    expect(queryByTestId('desctops-check')).toBeDefined()
  })
})