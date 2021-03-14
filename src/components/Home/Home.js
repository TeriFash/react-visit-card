import React, { Component } from "react";
import MainSocialLinks from "../MainSocialLinks";
// import MainLink from "../MainLink";
import settings from "../../store/settings.js"
import MainContainer from "../MainContainer";
import BtnTilt from "../BtnTilt";
import GoSkillLink from "../GoSkillLink";
import load from "../../utilities/data/load";

// import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      socialLinks: settings.socialLinks,
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
          <div className="Link-wrapper">
            <MainSocialLinks data={this.state.socialLinks} />
            <GoSkillLink />
          </div>
        </MainContainer>
      </>
    );
  }
}

export default Home;
