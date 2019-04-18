import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar'
import Journal from './journal/Journal'
const { ipcRenderer } = window.electron

class App extends Component {
  constructor(props){
    super(props)

    this.selectEntry = this.selectEntry.bind(this)
    this.saveEntry = this.saveEntry.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {}
    this.state.selected = 0
    this.state.menuEntries = [
      {
        id: -1,
        date: new Date(),
      },
      {
        id: 2,
        date: new Date('April 5, 2019'),
      },
      {
        id: 1,
        date: new Date('December 17, 1995'),
      }
    ]

    ipcRenderer.send('requestDayEntries', new Date())

    ipcRenderer.on('receiveMenuEntries', function(event, arg){
      this.setState({ menuEntries: arg })
    })
  
    ipcRenderer.on('receiveDayEntries', function(event, arg){
      this.setState({ entries: arg })
    })
  }

  selectEntry(e) {
    e.persist()
    
    let entryIndex = parseInt(e.target.getAttribute('entry_index'))

    this.setState({ selected: entryIndex })

    ipcRenderer.send('requestEntries', this.state.menuEntries[entryIndex].date)
  }

  saveEntry(entryIndex){
    this.state.isSaving[entryIndex] = false
    console.log("entry saved, index: " + entryIndex)
  }

  handleChange(entryIndex, value){
    console.log("entry changed, index: " + entryIndex)
    
    this.props.entries[entryIndex].body = value

    console.log(this.state.entries[entryIndex].body)

    if(!this.state.isSaving[entryIndex]){
      this.state.isSaving[entryIndex] = true
      setTimeout(this.saveEntry, 3500, entryIndex, value)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="WindowTitleBar">
          Journey
        </div>
        <div className="Wrapper">
          <Sidebar  menuEntries={ this.state.menuEntries }
                    selectEntry={this.selectEntry}
                    selected={this.state.selected}/>
          <Journal  entries={this.state.entries} 
                    handleChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
