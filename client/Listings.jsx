import React, { Component } from 'react';
import axios from 'axios';
import ListingEntry from './ListingEntry';
import style from './listingstyle.css';
import AliceCarousel from 'react-alice-carousel';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      listingId: Math.floor(Math.random() * 101),
    };

    this.getSimilarListings = this.getSimilarListings.bind(this)
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

  renderCarousel() {
    if (this.state.listings.length > 0) {
      return (
        <AliceCarousel responsive={{ 0: { items: 3 } }} dotsDisabled>
          {this.state.listings.map(listing => (
            <ListingEntry listing={listing} key={listing.id} class={listing.id} />
        ))}
        </AliceCarousel>
      );
    }
    return (
      <div>
        Loading...
      </div>
    )
  }

  render() {
    return (
      <div className={style.container}>
        {this.renderCarousel()}
      </div>
    );
  }
}

export default Listings;
