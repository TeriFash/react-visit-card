import React, { Component } from "react";
import { Link } from "react-router-dom";

// import './MainLink.scss'

// function FnMainLink() {
//   return (
//     <ul className="About-text">
//         <Link to="dev">Development</Link> |{' '}
//         <Link to="services">Services</Link>
//         <Link to="story">About</Link>
//     </ul>
//   );
// }

// const NavLink = props => (
//   <Link {...props} />
// )

// <ul className="Main-Link">
//   <li>
//     <Link to="me/dev">Development</Link>
//     {""}
//   </li>
//   <li>
//     <Link to="me/services">Services</Link>
//   </li>
//   <li>
//     <Link to="me/story">About</Link>
//   </li>
// </ul>

class MainLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="Main-Link">
        <li>
          <a href="#" className="is-disabled" title="partition in development">Development</a>
        </li>
        <li>
          <a href="#" className="is-disabled" title="partition in development">Services</a>
        </li>
        <li>
          <Link to="me/story">About</Link>
        </li>
      </ul>
    );
  }
}

export default MainLink;
