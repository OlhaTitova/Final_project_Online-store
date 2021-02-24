import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { InStock } from './InStock';

test('ProductCard render test', () => {
  render(
    <InStock />
  )
})