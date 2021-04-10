import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from 'react-dom/cjs/react-dom.development';
import { OrderPageComponent } from './OrderPage';

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

test('render OrderPageComponent', () => {
  render(<OrderPageComponent />, container)
})