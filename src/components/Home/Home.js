import React, { Component } from "react";

import MainSocialLink from "../MainSocialLink";
import MainLink from "../MainLink";
import MainContainer from "../MainContainer";

// import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <MainContainer className="Home-page page-wrapper">
          <MainLink />
          <MainSocialLink />
        </MainContainer>
      </>
    );
  }
}

export default Home;
