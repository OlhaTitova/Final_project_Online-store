import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../store/index'
import '@testing-library/jest-dom/extend-expect'
import Footer from './Footer'

describe('Footer', () => {
  configure({ adapter: new Adapter() })
  test('Should render without crashing', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    )
    expect(result.find('div')).toBeDefined()
  })
})