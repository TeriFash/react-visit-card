import BtnBack from "../components/Btn-back";
import React, { Component } from "react";
import FlipperСard from "../components/Flipper-card";

class AppDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="Development-page">
        <BtnBack />
        <h1 className="Development-page-text">Development</h1>
        <>
          <FlipperСard />
        </>
      </section>
    );
  }
}

export default AppDevelopment;
