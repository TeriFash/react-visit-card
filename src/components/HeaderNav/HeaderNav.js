import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from 'components/ThemeSwitcher';
import LanguageButtons from 'components/LanguageButtons';
import './HeaderNav.scss';

const HeaderNav = ({ main = false, home = true }) => {
  const classes = `app-header header-nav ${main && 'header-nav--main'} ${home && 'header-nav--home'}`;
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
