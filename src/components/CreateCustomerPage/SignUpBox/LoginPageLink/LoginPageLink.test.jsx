import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoginPageLink from './LoginPageLink'

describe('All test for LoginPageLink', () => {
  configure({ adapter: new Adapter() })

  test('LoginPageLink render test', () => {
    render(
      <Router>
        <LoginPageLink />
      </Router>
    )
  })

  test('Check is title has been renderend', () => {
    const { getByText } = render(
      <Router>
        <LoginPageLink />
      </Router>
    )
    expect(getByText('Already registered ?')).toBeDefined()
  })

  test('Check is Link has a correct href', () => {
    const result = shallow(
      <Router>
        <LoginPageLink />
      </Router>
    )
    expect(result.find('[href="#/signin"]')).toBeDefined()
  })

  test('Check is Link found by text', () => {
    const { getByText } = render(
      <Router>
        <LoginPageLink />
      </Router>
    )
    expect(getByText('Sign In')).toBeDefined()
  })
})