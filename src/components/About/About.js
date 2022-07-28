import React, { Component } from 'react';
// import BtnBack from "../BtnBack";
import BtnTilt from 'components/BtnTilt';
import AboutText from 'components/AboutText';

// import './Consult.scss'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='About-page page-wrapper'>
        {/* <BtnBack /> */}
        <h1>About me</h1>
        <BtnTilt />
        <AboutText />
      </section>
    );
  }
}

export default About;
