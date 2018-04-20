import React from 'react';
import { shallow, mount } from 'enzyme';
import style from './entrystyle.css';

import ListingDetails from '../client/ListingDetails';

describe('<ListingDetails />', () => {
  const listing = {
    id: 1,
    title: 'Refined Black Hole',
    price: 300,
    imageUrl: 'https://source.unsplash.com/333x222/?crater',
    reviews: [3, 5, 1],
    avgRating: 3,
    type: 'Alpha Base',
    bedCount: 1,
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
  };

  test('Should call closeModal when X is clicked', (done) => {
    const mockCloseModal = jest.fn();
    const wrapper = mount(<ListingDetails
      listing={listing}
      closeModal={mockCloseModal}
      isModalOpen
    />);

    wrapper.find('svg').simulate('click');
    expect(mockCloseModal.mock.calls.length).toBe(1);
    done();
  });
});
