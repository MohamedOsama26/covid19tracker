import React from 'react';
import { shallow } from 'enzyme';
import ClassicCounter from './ClassicCounter';

describe('<ClassicCounter />', () => {
  test('renders', () => {
    const wrapper = shallow(<ClassicCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
