import React from 'react';
import { shape, number, string, array, func } from 'prop-types';
import ReactStars from 'react-stars';
import style from './entrystyle.css';

const ListingEntry = ({ listing, openModal }) => (
  <div>
    <div className={style.heart}>
      <svg
        viewBox="0 0 32 32"
        fill="#484848"
        fillOpacity="0.5"
        stroke="#ffffff"
        strokeWidth="2.5"
        aria-label="Add listing to a list"
        role="img"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          height: '24px',
          width: '24px',
          display: 'block',
        }}
        onClick={() => openModal(listing)}
      >
        <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
      </svg>
    </div>
    <img src={listing.imageUrl} alt="" />
    <p className={style.type}>Entire {listing.type}, {listing.bedCount} {listing.bedCount === 1 ? 'Bed' : 'Beds'}</p>
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
  listing: shape({
    id: number.isRequired,
    title: string.isRequired,
    price: number.isRequired,
    imageUrl: string.isRequired,
    reviews: array.isRequired,
    avgRating: number.isRequired,
    type: string.isRequired,
    bedCount: number.isRequired,
  }).isRequired,
  openModal: func.isRequired,
};

export default ListingEntry;
