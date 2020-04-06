import React, { Component } from 'react';
import RouterAnimated from './layout/Layout-router-animated';
// import Cursor from './plugins/cursor-dot';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Cursor/> */}
        <RouterAnimated />
      </div>
    );
  }
}

export default App