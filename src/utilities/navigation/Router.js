// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// import { render } from 'react-dom';
// eslint-disable-next-line no-unused-vars
import { Route, Routes, Outlet, useLocation, Navigate, useParams } from 'react-router-dom';
// import { ConnectedRouter, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// import PathToRegexp, { compile } from 'path-to-regexp';

import i18n from 'config/i18next-config';

import About from 'pages/About';
import Home from 'pages/Home';
// import BtnHome from 'components/BtnHome';
import HeaderNav from 'components/HeaderNav';
// import Main from 'components/MainContainer';

const lang = i18n.language;
console.log('✅ 🧊 ~ lang', lang);
// eslint-disable-next-line no-unused-vars
const history = createBrowserHistory();

// const generateLanguage = (locale, location) => {
//   const ROUTE = '/:locale/:path*';
//   const definePath = compile(ROUTE);
//   const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
//   console.log('✅ 🧊 ~ routeComponents', routeComponents);

//   let subPaths = null;
//   if (routeComponents && routeComponents[2]) {
//     subPaths = routeComponents[2].split('/');
//   }
//   console.log(definePath, 'home');

//   return definePath({
//     locale,
//     path: subPaths
//   });
// };

function Main(props) {
  console.log('✅ 🧊 ~ props', props);
  const location = useLocation().pathname.split('/');
  const locationMarc = location[location.length - 1];
  console.log('✅ 🧊 ~ locationMarc', locationMarc);
  let { locale } = useParams();
  const localLang = locale || locationMarc;
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  if (lang !== localLang) {
    changeLanguage(localLang);

    console.log(i18n.language, lang, 'here ');

    if (lang !== locale) {
      console.log('yesss nope right');
      // changeLanguage(lang);
      //history.push(generateLanguage(lang, location));
    }
  }

  return (
    <>
      <HeaderNav main={false} />
      <main className={`app-wrapper content-container ${locationMarc}`}>
        {/* <BtnHome /> */}
        <Outlet />
      </main>
    </>
  );
}

const Router = () => {
  // console.log('match', { match, location });

  // const shouldRedirect = true;
  // let navigate = this.useOutletContext();
  let location = useLocation();
  // let match = generateLanguage(lang, location);
  // let match = useRouteMatch({ path: locationPatch });
  // console.log('✅ 🧊 ~ navigate', navigate(), match);
  // console.log('location', location);

  // useEffect(() => {
  //   // if (shouldRedirect) {
  //   return this.useOutletContext();
  //   // }
  // }, [navigate]);

  // if (lang !== match.params.locale) {
  //   changeLanguage(match.params.locale);

  //   console.log(i18n.language, lang, 'here ');

  //   if (lang !== match.params.locale) {
  //     console.log('yesss nope right');
  //     changeLanguage(lang);
  //     history.push(generateLanguage(lang, location));
  //   }
  // }

  return (
    <Routes>
      <Route path={`/`} render={<Navigate state={{ from: location }} to={`/${lang}`} replace />} />
      <Route exact path={`/`} history={history} element={<Main {...location} />}>
        <Route path={`${lang}/`} element={<Home />} />
        <Route path={`${lang}/about`} element={<About />} />
        <Route path={`${lang}/me`} element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;

// render(<BasicExample history={history} />, document.body);
