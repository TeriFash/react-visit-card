import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import BtnLeftBack from '../components/Btn-left-back'

class AppAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return <section className="App-wrapper About-page">
        <BtnLeftBack/>
      
        <h1 className="About-page-text">
            About me
        </h1>
    </section>
  }
}

export default AppAbout;
