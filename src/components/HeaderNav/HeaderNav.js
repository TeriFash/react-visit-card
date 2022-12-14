import './HeaderNav.scss';

import React from 'react';

import LanguageButtons from 'components/LanguageButtons';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { Link } from 'react-router-dom';

const HeaderNav = ({ main = false, home = true }) => {
  const classMain = main ? 'header-nav--main' : '';
  const classHome = home ? 'header-nav--home' : '';
  const classes = `app-header header-nav ${classMain} ${classHome}`;
  return (
    <header className={classes}>
      {main && (
        <nav className='app-navigator navigation-container'>
          <Link to='dev'>Development</Link> | <Link to='services'>Services</Link> | <Link to='story'>About</Link>
        </nav>
      )}

      {home && (
        <>
          <LanguageButtons />
          <ThemeSwitcher />
        </>
      )}
    </header>
  );
};

export default HeaderNav;
