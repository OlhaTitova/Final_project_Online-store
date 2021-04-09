import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/index';
import DashBoardModal from './DashBoardModal';

describe('Render the DashBoardModal component', () => {
  test('dashBoasdCompoent have been rendered properly', () => {
    render(
      <Provider store={store}>
        <Router>
          <DashBoardModal
            show
            setHideModal={() => { }}
            formId="randomtext"
            setInfo={() => { }}
          />
        </Router>
      </Provider>
    )
  })
})