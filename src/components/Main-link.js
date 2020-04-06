import React, { Component } from 'react';
import { Link } from "react-router-dom";


function MyMainLink() {
    return(
        <ul className="About-text">
            <li><NavLink to="/development">Development</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/consult">Consult</NavLink></li>
      </ul>
    );
}

const NavLink = props => (
  <Link {...props} />
)

class MainlLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return <MyMainLink />
  }
}

export default MainlLink;


