import React, { Component } from 'react';
import { shape, string, bool, func } from 'prop-types';
import style from './listingdetails.css';

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListName: '',
    }

    this.getNewListName = this.getNewListName.bind(this);
  }

  getNewListName(event) {
    this.setState({ newListName: event.target.value });
  }

  render() {
    const { handleCreateListClick, createNewList } = this.props;
    return (
      <div>
        <input id="listname" type="text" onChange={event => this.getNewListName(event)} />
        <button onClick={handleCreateListClick}>Cancel</button>
        <button onClick={() => createNewList(this.state.newListName)}>Create</button>
      </div>
    );
  }
}

CreateList.propTypes = {
  handleCreateListClick: func.isRequired,
  createNewList: func.isRequired,
};

export default CreateList;
