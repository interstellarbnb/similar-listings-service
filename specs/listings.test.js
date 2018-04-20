import React from 'react';
import { shallow, mount } from 'enzyme';

import Listings from '../client/Listings';

describe('<Listings />', () => {
  test('should render component', (done) => {
    const wrapper = shallow(<Listings />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
