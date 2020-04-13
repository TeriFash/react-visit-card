import React, { Component } from "react";
import RouterAnimated from "./layout/Layout-router-animated";
// import Cursor from './plugins/cursor-dot';
import AppTheme from "./plugins/color-mode";

class App extends Component {
  render() {
    return (
      <>
        <AppTheme className="App">
          <RouterAnimated />
        </AppTheme>
      </>
    );
  }
}

export default App;