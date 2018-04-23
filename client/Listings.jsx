import React, { Component } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import style from './listingstyle.css';
import ListingEntry from './ListingEntry';
import ListingDetails from './ListingDetails';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      listingId: Math.floor(Math.random() * 101),
      modalListing: {},
      isModalOpen: false,
    };

    this.getSimilarListings = this.getSimilarListings.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getSimilarListings();
  }

  getSimilarListings() {
    return axios.get(`/listings/${this.state.listingId}`).then((response) => {
      this.setState({ listings: response.data });
    }).catch((error) => {
      if (error) {
        throw error.response;
      }
    });
  }

  openModal(listing) {
    this.setState({
      modalListing: listing,
      isModalOpen: true,
    });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  renderCarousel() {
    return (
      <AliceCarousel responsive={{ 0: { items: 3 } }} dotsDisabled>
        {this.state.listings.map(listing => (
          <ListingEntry
            listing={listing}
            key={listing.id}
            class={listing.id}
            openModal={this.openModal}
          />
      ))}
      </AliceCarousel>
    );
  }

  renderModal() {
    return (
      <ListingDetails
        listing={this.state.modalListing}
        closeModal={this.closeModal}
        isModalOpen
      />
    );
  }

  render() {
    return (
      <div>
        <div className={style.container}>
          {this.state.listings.length > 0 ? this.renderCarousel() : `Loading...`}
        </div>
        <div id="modal">
          {this.state.isModalOpen ? this.renderModal() : ''}
        </div>
      </div>
    );
  }
}


export default Listings;
