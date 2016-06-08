import React from 'react'
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme'
import UIDropdown from '../src/jsx/dropdown'

describe('Component UIDropdown', () => {
  describe('shallows UIDropdown', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<UIDropdown />)
    })

    it('renders as a div', () => {
      expect(wrapper.type()).to.eql('div')
    })

    it('contains a button', () => {
      expect(wrapper.find('DropdownButton')).to.have.length(1)
    })

    it('contains a ul', () => {
      expect(wrapper.find('UlList')).to.have.length(1)
    })

    it('toggles open state by update()', () => {
      wrapper.instance().update()
      expect(wrapper.state('open')).to.be.true
    })
  })

  describe('UlList component', () => {
    it('has class ui-dropdown-menu', () => {
      const ulWrapper = shallow(<UIDropdown />).find('UlList').shallow()
      const expectedName = 'ui-dropdown-menu'
      expect(ulWrapper.prop('className')).to.eql(expectedName)
    })
  })

  describeWithDOM('Lifecycle methods', () => {
    it('calls componentDidMount', () => {
      spyLifecycle(UIDropdown)
      const wrapper = mount(<UIDropdown />)
      expect(UIDropdown.prototype.componentDidMount.calledOnce).to.be.true
    })
  })
})
