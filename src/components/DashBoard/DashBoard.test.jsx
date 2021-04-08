import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import render from 'enzyme/build/render';
import shallow from 'enzyme/build/shallow';
import { store } from '../../store/index';
import DashBoard from './DashBoard';

describe('Render DashBoard component', () => {
  test('DashBoard', () => {
    render(
      <Provider store={store}>
        <Router>
          <DashBoard />
        </Router>
      </Provider>
    )
  })
  test('Check if animation renders', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <DashBoard />
        </Router>
      </Provider>,
      false
    )
    expect(results.find('div')).toBeDefined()
  })
  test('check if component about info mounted after animation', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <DashBoard />
        </Router>
      </Provider>, true
    )
    expect(results.text().includes('Account Information')).toBeDefined()
  })
  test('check if component dash mounted after animation', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <DashBoard />
        </Router>
      </Provider>, true
    )
    expect(results.text().includes('My Dashboard')).toBeDefined()
  })
})