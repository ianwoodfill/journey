import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import './EntryItem.css';
import 'react-quill/dist/quill.core.css';

class EntryItem extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {}
  }

  modules = { toolbar: false }

  handleChange(value){
    this.props.handleChange(this.props.entry_index, value)
  }
  render() {
    return (
      <div className="EntryItem">
        <ReactQuill 
                    value={this.props.body}
                    placeholder="Click to start writing..."
                    onChange={this.handleChange}
                    modules={this.modules} />
      </div>
    );
  }
}

export default EntryItem;
