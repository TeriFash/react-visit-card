import React, { Component } from "react";


class LayoutMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page || null,
      title: this.props.title || null,
      back: this.props.back || null,
    };
  }

  render() {
    const isTitle = this.title;
    const isBackShow = this.back === "hide";
    const page = this.page;
    let headerBlock;

    if (isTitle) {
      headerBlock = (  
        <span className={`${page}-header`}>{this.props.headerSlot}</span>
      );
    } else {
      headerBlock = <h1 className={`${page}-text`}>{this.title}</h1>;
    }

    return (
      <section className={`App-wrapper ${page}`}>
        {/* {!isBackShow && <BtnBack />} */}
        {headerBlock}
        {this.props.children}
      </section>
    );
  }
}

export default LayoutMain;
