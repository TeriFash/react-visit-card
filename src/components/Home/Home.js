import React, { Component } from "react";

import MainSocialLink from "../MainSocialLink";
// import MainLink from "../MainLink";
import MainContainer from "../MainContainer";
import BtnTilt from "../BtnTilt";
import load from "../../utilities/data/load";

// import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      term: "",
      active: 0,
    };
  }

  loadData() {
    load(this.props.data).then(items => {
      this.setState({
        data: JSON.parse(items)
      });
    });
  }

  render() {
    return (
      <>
        <MainContainer className="Home-page page-wrapper">
          {/*<MainLink />*/}
          <BtnTilt />
          <MainSocialLink />
        </MainContainer>
      </>
    );
  }
}

export default Home;
