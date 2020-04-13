import React, { Component } from "react";
import BtnBack from "../components/Btn-back";
import BtnTile from "../components/Btn-tile";

class AppAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BtnBack/>
        <h1 className="About-page">About me</h1>
        <BtnTile>
          <div className="btn-tile">Look me resume</div>
        </BtnTile>
      </>
    );
  }
}

export default AppAbout;
