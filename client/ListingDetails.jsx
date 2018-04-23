import React, { Component } from 'react';
import { shape, number, string, array, bool, func } from 'prop-types';
import { Modal } from 'react-bootstrap';
import ReactStars from 'react-stars';
import SavedList from './SavedList';
import CreateList from './CreateList';
import style from './listingdetails.css';

class ListingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateList: false,
      lists: [
        { listName: 'Dream Homes', saved: false },
        { listName: 'Vacation Homes', saved: false },
      ],
    };

    this.handleCreateListClick = this.handleCreateListClick.bind(this);
    this.createNewList = this.createNewList.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
  }

  createNewList(listName) {
    const newList = {
      listName,
      saved: false,
    };
    const currentList = this.state.lists.slice(0);
    currentList.push(newList);
    this.setState({ lists: currentList });
  }

  handleCreateListClick() {
    this.setState({ showCreateList: !this.state.showCreateList });
  }

  toggleHeart(index) {
    const currentList = this.state.lists.slice(0);
    currentList[index].saved = !currentList[index].saved;
    this.setState({ lists: currentList });
  }

  renderCreateList() {
    return (
      <CreateList
        handleCreateListClick={this.handleCreateListClick}
        createNewList={this.createNewList}
      />
    );
  }

render() {
    const {
      isModalOpen,
      closeModal,
      listing: {
        imageUrl,
        title,
        city,
        state,
        country,
        reviews,
        avgRating,
      },
    } = this.props;

  return (
    <div>
      <Modal
        show={isModalOpen}
        onHide={closeModal}
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
            onClick={closeModal}
          >
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
          </svg>
        </div>
        <div className={style.header}>
          <h1>Save To List</h1>
        </div>
        <div className={style.list}>
          <div className={style.listitem}>
            <span>
              {this.state.showCreateList ? this.renderCreateList() : (<span onClick={this.handleCreateListClick}>Create New List</span>)}
            </span>
          </div>
          {this.state.lists.map((listing, index) => <SavedList list={listing} toggleHeart={this.toggleHeart} index={index} key={index} />)}
        </div>
        <div className={style.container}>
          <div className={style.item}>
            <img src={imageUrl} width="104" height="80" alt="" />
          </div>
          <div className={style.item}>
            <div className={style.title}>
              {title}
            </div>
            <div className={style.location}>
              {city}, {state}, {country}
            </div>
            <div className={style.review}>
              <ReactStars
                count={5}
                size={18}
                value={avgRating}
                color1="A0A0A0"
                color2="#008489"
                edit={false}
              />
              <span className={style.review}>
                {reviews.length} Reviews
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
  listing: shape({
    id: number.isRequired,
    title: string.isRequired,
    imageUrl: string.isRequired,
    reviews: array.isRequired,
    avgRating: number.isRequired,
    type: string.isRequired,
    city: string.isRequired,
    state: string.isRequired,
    country: string.isRequired,
  }).isRequired,
  isModalOpen: bool.isRequired,
  closeModal: func.isRequired,
};

export default ListingDetails;
