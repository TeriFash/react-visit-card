import React from "react";
import "./DrawerToggleButton.css";
import Jump from "react-reveal/Jump";

const drawerToggleButton = props => (
  <Jump>
    <button className="toggle__button" onClick={props.click}>
      <div className="toggle__button__line" />
      <div className="toggle__button__line" />
      <div className="toggle__button__line" />
    </button>
  </Jump>
);

export default drawerToggleButton;
