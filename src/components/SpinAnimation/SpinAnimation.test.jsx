import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpinAnimation from './SpinAnimation'

describe('All tests for spin animation', () => {
  configure({ adapter: new Adapter() })

  test('Spin animation render test', () => {
    render(<SpinAnimation />)
  })
  
  test('Spin animation has a corrert style', () => {
    const spinBox = shallow(<SpinAnimation width="100%" height="100%" />)
    expect(spinBox.get(0).props.width).toBe('100%')
    expect(spinBox.get(0).props.height).toBe('100%')
  })
})