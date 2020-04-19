import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('<MainPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
