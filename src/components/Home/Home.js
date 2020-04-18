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
      <section className="Home-page page-wrapper">
        <div className="page-child">
          <MainInjection />
        </div>
        {this.props.children}
      </section>
    );
  }
}

const MainInjection = () => (
  <MainContainer>
    <MainLink />
    <MainSocialLink />
  </MainContainer>
);

export default Home;
