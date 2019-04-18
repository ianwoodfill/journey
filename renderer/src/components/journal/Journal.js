import React, { Component } from 'react';
import EntryItem from './entry-item/EntryItem'
import './Journal.css';

class Journal extends Component {
  constructor(props){
    super(props);
  }

  getEntries(){
    return (
      this.props.entries.map((entry, index) =>
        <EntryItem  entry_id={entry.id}
                    entry_index={index}
                    body={entry.body}
                    handleChange={this.props.handleChange} />
      ))
  }

  render() {
    return (
      <div className="JournalWrapper">
        {this.getEntries()}
      </div>
    );
  }
}

export default Journal;
