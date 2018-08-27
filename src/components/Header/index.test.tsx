import React from 'react';
import 'jest';
import { shallow } from 'enzyme';
import Header from './index'

describe('Header', () =>
  it('has title prop', () => {
    const wrapper = shallow(
      <Header
        title="test test"
      />
    )
    console.log(wrapper.props().children.props.children);
    expect(wrapper.props().children.props.children[0]).toEqual('test test');
  })
)