import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { store } from '../../../store/index';
import DashBoardModal from './DashBoardModal';

describe('Render the DashBoardModal component', () => {
  configure({adapter: new Adapter()})

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