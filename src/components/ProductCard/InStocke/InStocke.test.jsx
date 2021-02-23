import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import InStocke from './InStocke';

test('ProductCard render test', () => {
  render(
    <InStocke />
  )
})