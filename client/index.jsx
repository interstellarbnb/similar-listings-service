import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Listings extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      Similar listings
      </div>
    )
  }
}

ReactDOM.render(<Listings />, document.getElementById('similarlistings'))
