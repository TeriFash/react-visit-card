import React, { Component } from "react";
import FlipperСard from "../FlipperСard";

class Development extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="Development-page page-wrapper">
        <h1>Development</h1>
        <>
          <FlipperСard />
        </>
      </section>
    );
  }
}

export default Development;
