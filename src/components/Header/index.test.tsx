import React from 'react';
import 'jest';
import { shallow } from 'enzyme';
import Header from './index'

describe('Header', () => {
  const wrapper = shallow(
    <Header
      title="test test"
      value={42}
    />
  )
  
  it('exists', () => {
    console.log(wrapper);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('has title prop', () => {
    console.log(wrapper.props().children.props.children);
    expect(wrapper.props().children.props.children[0]).toEqual('test test');
  })
  
  it('has value prop', () => {
    console.log(wrapper.props().children.props.children);
    expect(wrapper.props().children.props.children[3]).toEqual(42);
  })
});