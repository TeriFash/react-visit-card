import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import './MainLink.scss'

// function FnMainLink() {
//   return (
//     <ul className="about-text">
//         <Link to="dev">Development</Link> |{' '}
//         <Link to="services">Services</Link>
//         <Link to="story">About</Link>
//     </ul>
//   );
// }

// const NavLink = props => (
//   <Link {...props} />
// )

// <ul className="main-Link">
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
          <Link href='#' className='is-disabled' title='partition in development' rel='noopener noreferrer'>
            {this.t('titleDevelopment')}
          </Link>
        </li>
        <li>
          <Link href='#' className='is-disabled' title='partition in development' rel='noopener noreferrer'>
            {this.t('titleServices')}
          </Link>
        </li>
        <li>
          <Link to='me/story'>{this.t('titleAbout')}</Link>
        </li>
      </ul>
    );
  }
}

export default MainLink;
