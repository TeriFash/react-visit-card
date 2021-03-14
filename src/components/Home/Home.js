import React, { Component } from "react";
import MainSocialLinks from "components/MainSocialLinks";
// import MainLink from "../MainLink";
import settings from "store/settings.js"
import MainContainer from "components/MainContainer";
import BtnTilt from "components/BtnTilt";
import GoSkillLink from "components/GoSkillLink";
// import url from "utilities/data/load.js";

// import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      socialLinks: settings.socialLinks,
      goSkillLink: settings.goSkillLink,
      term: "",
      active: 0,
    };
  }

  // loadData() {
  //   url(this.props.data).then(items => {
  //     this.setState({
  //       data: JSON.parse(items)
  //     });
  //   });
  // }

  render() {
    const {socialLinks, goSkillLink} = this.state
    return (
      <>
        <MainContainer className="Home-page page-wrapper">
          {/*<MainLink />*/}
          <BtnTilt />
          <div className="Link-wrapper">
            <MainSocialLinks data={socialLinks} />
            <GoSkillLink data={goSkillLink} />
          </div>
        </MainContainer>
      </>
    );
  }
}

export default Home;
