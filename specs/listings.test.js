import React from 'react';
import { shallow, mount, render } from 'enzyme';
import axiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import style from './listingstyle.css';
import Listings from '../client/Listings/Listings';

describe('<Listings />', () => {
  let wrapper;
  const axiosMock = new axiosMockAdapter(axios);

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

  axiosMock.onGet('/listings/1').reply(404);
  axiosMock.onGet('/listings/2').reply(200, listing);

  beforeEach(() => {
    wrapper = shallow(<Listings />);
  });

  test('should render component', (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  test('should change isModalOpen to false when closeModal is called', (done) => {
    wrapper.instance().closeModal();
    expect(wrapper.instance().state.isModalOpen).toBe(false);
    done();
  });

  test('should render modal when a listing is passed in', (done) => {

    wrapper.instance().openModal(listing);
    expect(wrapper.instance().state.isModalOpen).toBeTruthy();
    expect(wrapper.find('#modal').length).toBe(1);
    done();
  });

  test('should not render carousel if listings array is empty', (done) => {
    wrapper.instance().state.listings = [];
    expect(wrapper.find(`.${style.container}`).text()).toBe('Loading...');
    done();
  });

  test('should call renderCarousel method', (done) => {
    wrapper.instance().renderCarousel = jest.fn();
    wrapper.instance().setState({ listings: [listing, listing, listing] });
    expect(wrapper.instance().renderCarousel).toHaveBeenCalled();
    done();
  });

  test('should update listings upon GET request', (done) => {
    wrapper.instance().setState({ listingId: 2 });
    wrapper.instance().getSimilarListings().then(() => expect(wrapper.instance().state.listings).toEqual(listing));
    done();
  });

  test('should handle error if GET request fails', (done) => {
    wrapper.instance().setState({ listingId: 1 });
    wrapper.instance().getSimilarListings().then(response => expect(response).toThrow());
    done();
  });
});
