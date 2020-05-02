import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";

import './MainContainer.scss'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.sectionMain = createRef();
    this.playword_1 = createRef();
    this.playword_2 = createRef();
    this.state = {
      pos: { x: 0, y: 0 },
      shadow: true,
    };
  }

  onMouseMove(e) {
    this.setState({
      pos: {
        x: e.pageX,
        y: e.pageY,
      },
    });

    this.CreateShadow();
  }

  CreateShadow() {
    if ("ontouchstart" in window === false && this.state.shadow) {
      let [moveX, moveY] = [this.state.pos.x / -100, this.state.pos.y / -120];
      let [wrapperWord, firstWord, secondWord] = [
        ReactDOM.findDOMNode(this.sectionMain.current),
        ReactDOM.findDOMNode(this.playword_1.current),
        ReactDOM.findDOMNode(this.playword_2.current),
      ];

      firstWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
      secondWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
      wrapperWord.style.textShadow = `${moveX}px ${-moveY}px rgba(0, 0, 0, 0.1)`;
    }
  }

  render() {
    let sectionStyle = {
      // backgroundColor: this.state.background,
      // color: this.state.text
    };
    let boldStyle = {
      //color: this.state.bold
    };

    return (
      <section
        className={`Main-container ${this.props.className || ''}`}
        onMouseMove={this.onMouseMove.bind(this)}
        style={sectionStyle}
      >
        <h1 className="Main-text" ref={this.sectionMain}>
          Teri
          <span className="bold" ref={this.playword_1} style={boldStyle}>
            Fash
          </span>
          <span className="bold" ref={this.playword_2} style={boldStyle}></span>
        </h1>
        {this.props.children}
      </section>
    );
  }
}

export default MainContainer;
