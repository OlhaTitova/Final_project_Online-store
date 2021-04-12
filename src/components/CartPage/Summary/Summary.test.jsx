import React from 'react';
import { render } from '@testing-library/react';
import { SummaryComponent } from './Summary';

describe('SummaryComponents', () => {
  test('render', () => {
    const {asFragment} = render(<SummaryComponent
      summary={156985}
    />)
    expect(asFragment()).toMatchSnapshot()
  })
})