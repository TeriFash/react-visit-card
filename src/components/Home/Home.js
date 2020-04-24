import React, { Component } from "react";

import MainSocialLink from "../MainSocialLink";
import MainLink from "../MainLink";
import MainContainer from "../MainContainer";
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
    // Загружаем данные из файла, переданного в качестве параметра
    load(this.props.data).then(users => {
      // После загрузки обновляем состояние
      this.setState({
        data: JSON.parse(users)
      });
    });
  }

  render() {
    return (
      <>
        <MainContainer className="Home-page page-wrapper">
          <MainLink />
          <MainSocialLink />
        </MainContainer>


        <div data="api.json"></div>

      </>
    );
  }
}

export default Home;
