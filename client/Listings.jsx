import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import style from './listingstyle.css';
import ListingEntry from './ListingEntry';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      listingId: Math.floor(Math.random() * 101),
      index: 0,
      direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    return (
      <div className={style.container}>
        <Carousel
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}
        >
          {this.state.listings.map(listing => (
            <Carousel.Item key={listing.id}>
              <ListingEntry listing={listing} key={listing.id} class={listing.id} />
            </Carousel.Item>
        ))
      }
        </Carousel>
      </div>
    );
  }
}

export default Listings;
