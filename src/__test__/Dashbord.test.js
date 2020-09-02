import React from 'react';
import Dashbord from '../components/Dashbord';
import { mount } from 'enzyme';

describe('<Dashbord />', () => {
  const dashbord = mount(<Dashbord />);
  test('Rendering Dashbord Component', () => {
    expect(dashbord.length).toEqual(1);
  });
});
