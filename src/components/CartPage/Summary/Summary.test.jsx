import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from 'react-dom/cjs/react-dom.development';
import { SummaryComponent } from './Summary';

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

test('render SummaryComponents', () => {
  render(<SummaryComponent
    summary={156985}
  />, container)
})