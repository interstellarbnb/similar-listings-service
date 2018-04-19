import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Listings from '../client/Listings';


describe('<Listings />', () => {
  test('should render component', (done) => {
    const output = shallow(
      <Listings />
    );
    expect(output).toMatchSnapshot();
    done();
  });
});
