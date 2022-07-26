import React, { Component } from "react";

// import './Services.scss'

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="Services-page page-wrapper">
          <h1>Services</h1>
          {this.props.children}
        </section>
      </>
    );
  }
}

export default Services;
