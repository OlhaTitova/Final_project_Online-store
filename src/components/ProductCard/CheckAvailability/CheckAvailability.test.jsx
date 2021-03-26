import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CheckAvailability } from './CheckAvailability';
import { store } from '../../../store/index'

test('CheckAvailability render test', () => {
  render(
    <Provider store={store}>
      <CheckAvailability />
    </Provider>
  )
})