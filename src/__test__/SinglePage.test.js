/**
 * @jest-environment jsdom
 */
import React from 'react';
import SinglePage from '../components/SinglePage';
import { shallow } from 'enzyme';

describe('<SinglePage />', () => {
  const singlePage = shallow(<SinglePage />);
  test('Rendering Single Component', () => {
    expect(singlePage.length).toEqual(1);
  });
});
