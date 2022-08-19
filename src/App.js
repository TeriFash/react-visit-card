import React from 'react'; // useState, useEffect
// import { Routes, Route } from 'react-router-dom';
// import {
//   // About,
//   // Services,
//   Development,
//   Home,
//   Main,
//   NotFound
// } from './utilities/navigation/routes.js';
import Router from 'utilities/navigation/Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, faArrowUp, faArrowDown);

export default function App() {
  return (
    <div className='App'>
      <Router />
    </div>
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
