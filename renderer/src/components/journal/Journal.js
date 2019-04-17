import React, { Component } from 'react';
import EntryItem from './entry-item/EntryItem'
import './Journal.css';

class Journal extends Component {
  render() {
    return (
      <div className="JournalWrapper">
        <EntryItem />
        <EntryItem />
        <EntryItem />
      </div>
    );
  }
}

export default Journal;
