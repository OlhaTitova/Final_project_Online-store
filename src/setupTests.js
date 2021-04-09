/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'

configure({ adapter: new Adapter() });

window.scrollTo = jest.fn()

React.useLayoutEffect = React.useEffect

console.error = (message) => {
  throw new Error(message);
}
