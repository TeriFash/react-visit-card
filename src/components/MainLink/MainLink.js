import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  t = useTranslation('main');
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <ul className='main-Link'>
        <li>
          <a href='#' className='is-disabled' title='partition in development'>
            {this.t('titleDevelopment')}
          </a>
        </li>
        <li>
          <a href='#' className='is-disabled' title='partition in development'>
            {this.t('titleServices')}
          </a>
        </li>
        <li>
          <Link to='me/story'>{this.t('titleAbout')}</Link>
        </li>
      </ul>
    );
  }
}

export default MainLink;
