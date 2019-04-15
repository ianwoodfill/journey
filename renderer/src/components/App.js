import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar'
import JournalPage from './journal-page/JournalPage'

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className="WindowTitleBar">
          Journal
        </div>
        <div className="Wrapper">
          <Sidebar/>
          <JournalPage />
        </div>
      </div>
    );
  }
}

export default App;
