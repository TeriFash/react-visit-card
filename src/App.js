import { useRoutes } from 'react-router-dom';

// import { Main, Home, About } from 'utilities/navigation/Router.js';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import {
//   faArrowDown,
//   faArrowUp,
//   fas,
// } from '@fortawesome/free-solid-svg-icons';
import { router } from './utilities/navigation/routes.js';

// library.add(fab, fas, faArrowUp, faArrowDown);
// const lang = i18n.language;

export default function App() {
  // let location = useLocation();
  let element = useRoutes(router);
  return (
    <>{element}</>
    // <Routes>
    //   <Route path={`/`} element={<Main {...location} />} render={<Navigate to={`/${lang}`} replace />} />
    //   <Route exact path={`/`} element={<Main {...location} />}>
    //     <Route path={`${lang}`} element={<Home />} />
    //     <Route path={`${lang}/about`} element={<About />} />
    //     <Route path={`${lang}/me`} element={<Main />} />
    //   </Route>
    // </Routes>

    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='me' element={<Main />}>
    //     <Route path='dev' element={<Development />} />
    //     <Route path="home" redirectTo="/" />
    //     {/* <Route path="story" element={<About /> } /> */}
    //   </Route>
    //   <Route path='*' element={<NotFound />} />
    // </Routes>
  );
}

// {/* <Routes>
// <Route path='/' element={<Home />} />
// <Route path='me' element={<Main />}>
//   <Route path='dev' element={<Development />} />
//   {/*<Route path="services" element={<Services />} />
//   <Route path="services/:id" element={<DetailedPost />} />
//   <Route path="story" element={<About />} />*/}
// </Route>
// {/* <Route path="home" redirectTo="/" /> */}
// <Route path='*' element={<NotFound />} />
// </Routes> */}
