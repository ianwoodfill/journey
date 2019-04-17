import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar'
import Journal from './journal/Journal'

class App extends Component {
  constructor(props){
    super(props);

    this.selectEntry = this.selectEntry.bind(this)

    this.state = {}
    this.state.selected = 0
    this.state.menuEntries = [
      {
        id: -1,
        date: new Date(),
      },
      {
        id: 2,
        date: new Date('April 5, 2019 03:24:00'),
      },
      {
        id: 1,
        date: new Date('December 17, 1995 03:24:00'),
      }
    ]
  }

  selectEntry(e) {
    e.persist()
    
    let entryIndex = parseInt(e.target.getAttribute('entry_index'))

    this.setState({ selected: entryIndex })

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className="WindowTitleBar">
          Journey
        </div>
        <div className="Wrapper">
          <Sidebar menuEntries={ this.state.menuEntries } selectEntry={this.selectEntry} selected={this.state.selected}/>
          <Journal entry_id={this.state.menuEntries[this.state.selected].id} />
        </div>
      </div>
    );
  }
}

export default App;
