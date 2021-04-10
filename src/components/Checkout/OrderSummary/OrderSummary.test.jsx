import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from 'react-dom/cjs/react-dom.development';
import OrderSummary from './OrderSummary';

describe.skip('OrderSummary', () => {
  let container = null
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  test('render', () => {
    render(<OrderSummary
      summary={125478}
      shippingCost={124}
    />, container)
  })
})
