// eslint-disable-next-line no-unused-vars
import React from 'react';

// import BtnHome from 'components/BtnHome';
import HeaderNav from 'components/HeaderNav';
// import PathToRegexp, { compile } from 'path-to-regexp';
import i18n from 'config/i18next-config';
// import { ConnectedRouter, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import About from 'pages/About';
import Home from 'pages/Home';
// import { render } from 'react-dom';
// eslint-disable-next-line no-unused-vars
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';

// import Main from 'components/MainContainer';

const lang = i18n.language;
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
  let navigate = useNavigate();

  const location = useLocation().pathname.split(`/`);
  const locationMarc = location[location.length - 1];

  console.log('✅ 🧊 ~ locationMarc', locationMarc);
  console.log('✅ 🧊 ~ lang', lang);
  let { locale } = useParams();

  const localLang = locale || locationMarc;
  console.log('✅ 🧊 ~ localLang', localLang);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  if (props.pathname !== `/${lang}`) {
    navigate({ to: `/${lang}` });
  }

  if (lang !== localLang) {
    changeLanguage(lang);
    navigate({ to: `/${lang}` });

    console.log(i18n.language, lang, 'here ');

    if (lang !== locale) {
      changeLanguage(lang);

      // history.push(generateLanguage(lang, location));
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

// const AppRoutes = () => {
//   // console.log('match', { match, location });
//   // const shouldRedirect = true;
//   // let navigate = this.useOutletContext();
//   let location = useLocation();
//   // let match = generateLanguage(lang, location);
//   // let match = useRouteMatch({ path: locationPatch });
//   // console.log('✅ 🧊 ~ navigate', navigate(), match);
//   // console.log('location', location);
//   // useEffect(() => {
//   //   // if (shouldRedirect) {
//   //   return this.useOutletContext();
//   //   // }
//   // }, [navigate]);
//   // if (lang !== match.params.locale) {
//   //   changeLanguage(match.params.locale);
//   //   console.log(i18n.language, lang, 'here ');
//   //   if (lang !== match.params.locale) {
//   //     console.log('yesss nope right');
//   //     changeLanguage(lang);
//   //     history.push(generateLanguage(lang, location));
//   //   }
//   // }
//   return (
//     <Routes>
//       <Route
//         path={`/`}
//         element={<Main {...location} />}
//         render={() => <Redirect state={{ from: location }} to={`/${lang}`} />}
//       />
//       <Route exact path={`/`} element={<Main {...location} />}>
//         <Route path={`${lang}`} element={<Home />} />
//         <Route path={`${lang}/about`} element={<About />} />
//         <Route path={`${lang}/me`} element={<Main />} />
//       </Route>
//     </Routes>
//   );
// };
// export default AppRoutes;
export { About, history, Home, Main };

// render(<BasicExample history={history} />, document.body);
