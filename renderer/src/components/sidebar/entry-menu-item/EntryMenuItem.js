import React, { Component } from 'react';
import './EntryMenuItem.css';

class EntryMenuItem extends Component {
  render() {
    return (
      <div className="EntryMenuItem">
        {this.props.date}
      </div>
    );
  }
}

export default EntryMenuItem;
