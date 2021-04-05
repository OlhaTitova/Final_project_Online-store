import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ProductSoldOut } from './ProductSoldOut';
import { store } from '../../../store/index'

test('ProductSoldOut render test', () => {
  render(
    <Provider store={store}>
      <ProductSoldOut />
    </Provider>
  )
})