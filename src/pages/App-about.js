import React, { Component } from "react";
import BtnBack from "../components/Btn-back";
import BtnTilt from "../components/Btn-tilt";

class AppAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <BtnBack/> */}
        <h1 className="About-page">About me</h1>
        {/* <BtnTilt /> */}
      </>
    );
  }
}

export default AppAbout;
