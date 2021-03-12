import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { CheckAvailability } from './CheckAvailability';

test('ProductCard render test', () => {
  render(
    <CheckAvailability />
  )
})