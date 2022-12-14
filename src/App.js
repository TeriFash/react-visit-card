import {
  Route,
  Routes,
} from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import {
//   faArrowDown,
//   faArrowUp,
//   fas,
// } from '@fortawesome/free-solid-svg-icons';
import {
  About,
  Development,
  Home,
  Layout,
  NoMatch,
  Services,
} from 'utilities/navigation/routes.js';

// library.add(fab, fas, faArrowUp, faArrowDown);



export default function App() {
  const setClass = () => {
   document.getElementById('root').classList.add('App');
  }

  setClass();

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="development" element={<Development />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NoMatch  />} />
        </Route>
      </Routes>
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