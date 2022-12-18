import React from 'react';

import BtnHome from 'components/BtnHome';
import HeaderNav from 'components/HeaderNav';
import AboutComponent from 'pages/About';
import DevComponent from 'pages/Development';
import HomeComponent from 'pages/Home';
import ServicesComponent from 'pages/Services';
import { useTranslation } from 'react-i18next';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
} from 'react-router-dom';

// function Declarative() {
//   return <Navigate to="/home" replace state={state} />;
// }

// function Imperative() {
//   let navigate = useNavigate();
//   function handleClick() {
//     navigate('/home')
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>go home</button>
//     </div>
//   );
// }

// export default [
//   { path: "/", element: <Home /> },
//   {
//     path: "me",
//     element: <Main />,
//     children: [
//       { path: "/dev", element: <Development /> },
//       { path: "/support", element: <Support /> },
//       { path: "/services", element: <Services /> },
//       { path: "/consult", element: <Consult /> },
//       { path: "/story", element: <About /> },
//     ],
//   },
//   {
//     path: "main",
//     element: <Main />,
//     children: [
//       { path: "/", element: <MainIndex /> },
//       { path: ":id", element: <MainId /> },
//       { path: "me", element: <MainBase /> },
//     ],
//   },
//   // Redirects use a redirectTo property to
//   { path: "home", redirectTo: "/" },
//   // Not found routes work as you'd expect
//   { path: "*", element: <NotFound /> },
// ];

// function Declarative() {
//   return <Navigate to="/home" replace state={state} />;
// }

// Code for example
// function Imperative() {
//   let navigate = useNavigate();
//   function handleClick() {
//     navigate('/home')
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>go home</button>
//     </div>
//   );
// }

function Layout() {
  const name = useLocation().pathname;
  const home = name === '/' || name === '/home';
  const location = useLocation().pathname.split('/');
  const locationMarc = location[location.length - 1];
  const match = useMatch(name);
  console.log('🚀 ~ file: routes.js:84 ~ Layout ~ match', match);

  return (
    <>
      <HeaderNav main={!home} home={home} />
      <main className={`app-wrapper content-container ${locationMarc}`}>
        {!home ? <BtnHome /> : ''}
        <Outlet />
      </main>
    </>
  );
}

function Home() {
  return (
    <>
      <HomeComponent />
    </>
  );
}

function Development() {
  return <DevComponent />;
}

function Services() {
  return <ServicesComponent>{/* <ArticleList /> */}</ServicesComponent>;
}

function About() {
  return (
    <React.Fragment>
      {/* <h2>Who are we?</h2> */}
      <AboutComponent />

      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
    </React.Fragment>
  );
}

function NoMatch() {
  const { t } = useTranslation();
  return (
    <main className='app-wrapper'>
      <section className='not-found-page page-wrapper'>
        <h1>{t('titleNotFound')}</h1>

        <Link to='/'>{t('btnGoHome')}</Link>
      </section>
    </main>
  );
}

// async function getArrayLoader() {
//   await new Promise((r) => setTimeout(r, 1000));
//   return {
//     arr: new Array(100).fill(null).map((_, i) => i),
//   };
// }

export { About, Development, Home, Layout, NoMatch, Services };
