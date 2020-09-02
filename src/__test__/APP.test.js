/**
 * @jest-environment jsdom
 */
import React from 'react';
import APP from '../App';
import { shallow } from 'enzyme';

describe('<APP />', () => {
  const app = shallow(<APP />);
  test('Rendering APP Component', () => {
    expect(app.length).toEqual(1);
  });
});
