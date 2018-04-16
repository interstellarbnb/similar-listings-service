import React, { Component } from 'react';
import axios from 'axios';
import style from './listingstyle.css';
import ListingEntry from './ListingEntry';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      listingId: Math.floor(Math.random() * 101),
    };
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


  render() {
    return (
      <div className={style.container}>
        {this.state.listings.map(listing => (
          <ListingEntry listing={listing} key={listing.id} class={listing.id} />
        ))
      }
      </div>
    );
  }
}

export default Listings;
