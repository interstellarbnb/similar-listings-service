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
    axios.get(`/listings/${this.state.listingId}`).then((response) => {
      this.setState({ listings: response.data });
    }).catch((err) => {
      if (err) {
        throw err;
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
    if (this.state.listings.length > 0) {
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
    return (
      <div>
        Loading...
      </div>
    );
  }

  renderModal() {
    if (this.state.listings.length > 0 && this.state.isModalOpen) {
      return (
        <ListingDetails
          listing={this.state.modalListing}
          renderModal={this.renderModal}
          closeModal={this.closeModal}
          isModalOpen
        />
      );
    }
  }

  render() {
    return (
      <div>
        <div className={style.container}>
          {this.renderCarousel()}
        </div>
        <div id="modal">
          {this.renderModal()}
        </div>
      </div>
    );
  }
}


export default Listings;
