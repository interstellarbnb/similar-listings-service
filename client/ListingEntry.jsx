import React, { Component } from 'react';
import _ from 'underscore';
import style from './entrystyle.css';

class ListingEntry extends Component {
  constructor(props) {
    super(props)
    this.rating = Math.round(this.props.listing.reviews.reduce((accumulator, current) => {
      accumulator += current;
      return accumulator;
    }) / this.props.listing.reviews.length);
  }

  componentDidMount() {
    $(`#${this.props.class}`).rateYo({
      rating: this.rating,
      readOnly: true,
      starWidth: '10px',
      normalFill: '#A0A0A0',
      ratedFill: '#008489',
    });
  }

  render() {
    return (
      <div className={style.item}>
        <img src={this.props.listing.imageUrl} alt="" />
        <p className={style.type}>Entire {this.props.listing.type}, {this.props.listing.bedCount} Beds</p>
        <p className={style.title}>{this.props.listing.title}</p>
        <p className={style.small}>${this.props.listing.price} per night</p>
        <p>
          <span id={this.props.class}></span>
          <span className={style.review}>{this.props.listing.reviews.length}</span>
        </p>
      </div>
    );
  }
}

export default ListingEntry;
