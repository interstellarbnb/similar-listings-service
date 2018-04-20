import React from 'react';
import { shallow, mount } from 'enzyme';
import style from '../client/entrystyle.css';

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
  let wrapper;
  let mockOpenModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ListingEntry
      listing={listing}
      key="1"
      class="1"
      openModal={mockOpenModal}
    />);
    return wrapper;
  });

  test('Should render component', (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  test('Bed should be singular when bedCount equals 1', (done) => {
    expect(wrapper.find(`.${style.type}`).text()).toContain('Bed');
    done();
    listing.bedCount = 2;
    const bedCountWrapper = shallow(<ListingEntry
      listing={listing}
      key="1"
      class="1"
      openModal={jest.fn()}
      />);
      expect(bedCountWrapper.find(`.${style.type}`).text()).toContain('Beds');
  });

  test('Should call openModal when heart is clicked', (done) => {
    wrapper.find('svg').simulate('click');
    expect(mockOpenModal.mock.calls.length).toBe(1);
    done();
  });
});
