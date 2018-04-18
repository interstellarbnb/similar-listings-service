import React from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-stars';
import style from './entrystyle.css';

const ListingEntry = ({ listing, openModal }) => (
  <div>
    <img src={listing.imageUrl} alt="" onClick={() => openModal(listing)} />
    <p className={style.type}>Entire {listing.type}, {listing.bedCount} Beds</p>
    <p className={style.title}>{listing.title}</p>
    <p className={style.small}>${listing.price} per night</p>
    <div>
      <span>
        <ReactStars
          count={5}
          size={13}
          value={listing.avgRating}
          color1="A0A0A0"
          color2="#008489"
          edit={false}
        />
      </span>
      <span className={style.review}>
        {listing.reviews.length}
      </span>
    </div>
  </div>
);

ListingEntry.propTypes = {
  listing: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    imageUrl: propTypes.string.isRequired,
    reviews: propTypes.array.isRequired,
    avgRating: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    bedCount: propTypes.number.isRequired,
  }).isRequired,
  openModal: propTypes.func.isRequired,
};

export default ListingEntry;
