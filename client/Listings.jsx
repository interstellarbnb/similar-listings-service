import React, { Component } from 'react';
import ListingEntry from './ListingEntry.jsx'

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    }
  };

  render() {
    return (
      <div>
      <ListingEntry />
      </div>
    )
  }
}

export default Listings;
