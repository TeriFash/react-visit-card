import React, { Component, createRef } from "react";
// import { Link } from "react-router-dom";

export default class BtnBack extends Component {
  constructor(props) {
    super(props);

    this.btnRef = createRef();
    this.name = this.props.name || "Back";
    this.viewTime = this.props.viewTime || 3000;
  }

  componentDidMount() {
    this.viewTimer();
  }

  toggleShow = () => {
    //this.setState(state => ({ isShow: !state.isShow }));
    // const wrapper = this.btnRef.current;
    //       wrapper.classList.toggle('is-view')
    //       wrapper.classList.toggle('is-hide')
  };

  viewTimer() {
    setTimeout(() => {
      const wrapper = this.btnRef.current;
      wrapper.classList.toggle("is-view");
    }, this.viewTime);
  }

  render() {
    return (
      <div
        {...this.props}
        ref={this.btnRef}
        className="btn btn-left-back slide-left"
      >
        {/* <NavLink to="/">{this.name}</NavLink> */}
      </div>
    );
  }
}

// const NavLink = (props) => <Link {...props} />;
