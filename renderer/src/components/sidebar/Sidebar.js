import React, { Component } from 'react';
import './Sidebar.css';
import EntryMenuItem from './entry-menu-item/EntryMenuItem'

class Sidebar extends Component {
  constructor(props){
    super(props)
  }

  printEntries(){
    return (
      this.props.menuEntries.map((entry, index) =>
        <EntryMenuItem  isSelected={this.props.selected == index}
                        date={entry.date}
                        entry_index={index}
                        selectEntry={this.props.selectEntry} />
      ))
  }

  render() {
    return (
      <div className="Sidebar">
        {this.printEntries()}
      </div>
    );
  }
}

export default Sidebar;
