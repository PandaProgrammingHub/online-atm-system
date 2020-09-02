import React from 'react';
import Login from '../components/Login';
import { mount } from 'enzyme';

describe('<Login />', () => {
  const login = mount(<Login />);
  test('Rendering Login Component', () => {
    expect(login.length).toEqual(1);
  });
});
