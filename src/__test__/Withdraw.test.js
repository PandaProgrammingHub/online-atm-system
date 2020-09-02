import React from 'react';
import Withdraw from '../components/Withdraw';
import { mount } from 'enzyme';

describe('<Withdraw />', () => {
  const withdraw = mount(<Withdraw />);
  test('Rendering Withdraw Component', () => {
    expect(withdraw.length).toEqual(1);
  });
});
