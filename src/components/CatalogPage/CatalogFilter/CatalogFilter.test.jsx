import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CatalogFilter from './CatalogFilter';

describe('All test for catalog filter', () => {
  test('Catalog filter render test', () => {
    render(<CatalogFilter showFilter setShowFilter={() => {}} setFilter={() => {}} />)
  })
  test('check button render', () => {
    const {getByText} = render(<CatalogFilter
      showFilter
      setShowFilter={() => {}}
      setFilter={() => {}}
    />)
    expect(getByText('Apply Filtres')).toBeDefined()
  })
  test('check checkbox render', () => {
    const {queryByTestId} = render(<CatalogFilter
      showFilter
      setShowFilter={() => {}}
      setFilter={() => {}}
    />)
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