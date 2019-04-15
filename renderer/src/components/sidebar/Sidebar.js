import React, { Component } from 'react';
import './Sidebar.css';
import EntryMenuItem from './entry-menu-item/EntryMenuItem'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <EntryMenuItem date="Today" />
        <EntryMenuItem date="April 5" />
        <EntryMenuItem date="April 2" />
        <EntryMenuItem date="April 1" />
      </div>
    );
  }
}

export default Sidebar;
