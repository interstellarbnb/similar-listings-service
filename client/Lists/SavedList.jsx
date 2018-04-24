import React from 'react';
import { shape, string, bool, number, func } from 'prop-types';
import style from '../Listings/listingdetails.css';

const SavedList = ({ list: { listName, saved }, toggleHeart, index }) => {
  const blankHeart = (
    <svg
      viewBox="0 0 32 32"
      fill="transparent"
      fillOpacity="1"
      stroke="#767676"
      strokeWidth="1.5"
      aria-hidden="true"
      role="presentation"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        height: '24px',
        width: '24px',
        display: 'block',
      }}
    >
      <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
    </svg>);

  const redHeart = (
    <svg
      viewBox="0 0 32 32"
      fill="#FF5A5F"
      fillOpacity="1"
      aria-hidden="true"
      role="presentation"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        height: '24px',
        width: '24px',
        display: 'block',
      }}
    >
      <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
    </svg>
  );

  return (
    <div>
      <div className={style.line} />
      <div className={style.listitem}>
        <span className={style.listname}>{listName}</span>
        <span className={style.listheart} onClick={() => toggleHeart(index)}>
          {saved ? redHeart : blankHeart}
        </span>
      </div>
    </div>
  );
}

SavedList.propTypes = {
  list: shape({
    listName: string.isRequired,
    saved: bool.isRequired,
  }).isRequired,
  toggleHeart: func.isRequired,
  index: number.isRequired,
};

export default SavedList;
