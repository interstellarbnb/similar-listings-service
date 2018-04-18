import React, { Component } from 'react';
import propTypes from 'prop-types';
import Modal from 'react-modal';
import ReactStars from 'react-stars';
import style from './listingdetails.css';

class ListingDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Modal.setAppElement('#modal');
  }

  render() {
    const {
      isModalOpen,
      closeModal,
      listing,
    } = this.props;

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '504px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    return (
      <div>
        <Modal
          isOpen={isModalOpen}
          style={customStyles}
        >
          <div>
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close"
              focusable="false"
              style={{
                height: '16px',
                width: '16px',
                display: 'block',
                fill: 'rgb(118, 118, 118)',
              }}
              onClick={() => closeModal()}
            >
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
            </svg>
          </div>
          <div className={style.header}>
            <h1>Save To List</h1>
          </div>
          <div className={style.list}>
            <div className={style.listitem}>
              Create New List
            </div>
            <div className={style.line} />
            <div className={style.listitem}>
              Dream Homes
            </div>
            <div className={style.line} />
            <div className={style.listitem}>
              Vacation Places
            </div>
          </div>
          <div className={style.container}>
            <div className={style.item}>
              <img src={listing.imageUrl} width="104" height="80" alt="" />
            </div>
            <div className={style.item}>
              <div className={style.title}>
                {listing.title}
              </div>
              <div className={style.location}>
                {listing.city}, {listing.state}, {listing.country}
              </div>
              <div className={style.review}>
                <ReactStars
                  count={5}
                  size={18}
                  value={listing.avgRating}
                  color1="A0A0A0"
                  color2="#008489"
                  edit={false}
                />
                <span className={style.review}>
                  {listing.reviews.length} Reviews
                </span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ListingDetails.propTypes = {
  listing: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    reviews: propTypes.array.isRequired,
    avgRating: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
  }).isRequired,
  isModalOpen: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
};

export default ListingDetails;
