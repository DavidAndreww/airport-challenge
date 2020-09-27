import React from 'react'
import NavigationView from '../NavigationView'
import NavigationModel from '../NavigationModel'
import { render } from '@testing-library/react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('test for NavigationView component', () => {
  test('render component to DOM', () => {
    const wrapper = shallow(<NavigationModel />)
    console.log(wrapper.debug())
    expect(wrapper.find(<NavigationView />))// not finished
  })
})
