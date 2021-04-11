import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
<<<<<<< HEAD:src/components/DashBoard/PasswordInfoChange.test.jsx
import { store } from '../../store/index';
=======
import { store } from '../../../store/index';
>>>>>>> cfeb7b5af94e045c8584ec0a9cf6480329439976:src/components/DashBoard/PasswordInfoChange/PasswordInfoChange.test.jsx
import PasswordInfoChange from './PasswordInfoChange';

describe('Test for PasswordInfoChange component', () => {
  test('PasswordInfoChange component', () => {
    render(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>
    )
  })
  test('check if button Edit is exists', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>,
      true
    )
    expect(results.text().includes('Edit')).toBeDefined()
  })
  test('check if button change password is exists', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>,
      true
    )
    expect(results.text().includes('Change Password')).toBeDefined()
  })
})
