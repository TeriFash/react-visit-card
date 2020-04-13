import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import BtnBack from "../components/Btn-back";
import BtnTile from "../components/Btn-tile";

class AppConsult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BtnBack/>
        <h1 className="Consult-page">Consult</h1>
        <BtnTile>
          <div className="btn-tile">Get list</div>
        </BtnTile>
      </>
    );
  }
}

export default AppConsult;
