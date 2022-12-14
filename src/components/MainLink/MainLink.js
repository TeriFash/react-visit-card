import React, { Component } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// import './MainLink.scss'

const LinkItem = (props, slot) => (
  <li>
    <Link {...props} >{slot}</Link>
  </li>
);
class MainLink extends Component {
  t = useTranslation('main');
  links = [{
    props: {
      href: '#',
      className: 'is-disabled',
      title: 'partition in development',
      rel: 'noopener noreferrer'
      // to="me/dev"
    },
    slot: 'titleDevelopment'
  },
  {
    props: {
      // to="me/services"
      href: '#',
      className: 'is-disabled',
      title: 'partition in development',
      rel: 'noopener noreferrer'
    },
    slot: 'titleServices'
  },
  {
    props: {
      to: 'me/story'
    },
    slot: 'titleAbout'
  }];
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className='main-Link'>
        {this.links.map(item => <LinkItem {...item.props}>{this.t(item.slot)}</LinkItem>)}
      </ul>
    );
  }
}

export default MainLink;
