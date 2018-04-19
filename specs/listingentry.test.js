import React from 'react';
import { shallow, mount, render } from 'enzyme';
import style from './entrystyle.css';

import ListingEntry from '../client/ListingEntry';

describe('<ListingEntry />', () => {
  const listing = {
    id: 9,
    title: 'Refined Black Hole',
    price: 662,
    imageUrl: 'https://source.unsplash.com/333x222/?crater',
    reviews: [3, 5, 1],
    avgRating: 3,
    type: 'Alpha Base',
    bedCount: 1,
    city: 'West Horace',
    state: 'UT',
    country: 'Lesotho',
  };

  test('Should render component', (done) => {
    const output = shallow(<ListingEntry
      listing={listing}
      key="1"
      class="1"
      openModal={jest.fn()}
    />);
    expect(output).toMatchSnapshot();
    done();
  });

  test('Should contain props passed down', (done) => {
    const output = mount(<ListingEntry
      listing={listing}
      key="1"
      class="1"
      openModal={jest.fn()}
    />);
    expect(Object.keys(output.props()).length).toBe(3);
    done();
  });

  test('Bed should be singular when bedCount equals 1', (done) => {
    const output = mount(<ListingEntry
      listing={listing}
      key="1"
      class="1"
      openModal={jest.fn()}
    />);
    expect(output.find(`.${style.type}`).text()).toContain('Bed');
    done();
  })
});
