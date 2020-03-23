import React, { Component } from 'react';
import AppHome from './App-home';
import Cursor from './plugins/cursor-dot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cursor/>
        <AppHome/>
      </div >
    )
  }
}

export default App;
