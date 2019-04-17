import React, { Component } from 'react'
import './EntryMenuItem.css'
import moment from 'moment'

class EntryMenuItem extends Component {
  constructor(props){
    super(props)

    this.label = moment(props.date).format('MMMM Do')

    if(moment(props.date).isSame(new Date(), "day")){
      this.label = "Today"
    }
    console.log(props)
  }

  render() {
    return (
      <div className="EntryMenuItem" entry_index={this.props.entry_index} is_selected={this.props.isSelected.toString()} onClick={this.props.selectEntry}>
        {this.label}
      </div>
    );
  }
}

export default EntryMenuItem;
