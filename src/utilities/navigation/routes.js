import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import HomeComponent from "components/Home";
import DevComponent from "components/Development";
import ServicesComponent from "components/Services";
import AboutComponent from "components/About";

import BtnHome from "components/BtnHome";
import ArticleList from "components/ArticleList";
import ThemeSwitcher from "components/ThemeSwitcher";



// const Main = () => <h1> Main page</h1>;
// const Home = () => <h1> Home page</h1>;
// const Development = () => <h1> Development page</h1>;
// const Support = () => <h1> Support page</h1>;
// const Services = () => <h1> Services page</h1>;
// const Consult = () => <h1> Consult page</h1>;
// const About = () => <h1> About page</h1>;
// const MainIndex = () => <h1> MainIndex page</h1>;
// const MainId = () => <h1> MainId page</h1>;
// const MainBase = () => <h1> MainBase page</h1>;
// const NotFound = () => <h1> NotFound 404 page</h1>;

// function Home() {

//   return (
//     <div>
//       <HomePage />
//       <nav>
//         <Link to="/">Home</Link> | <Link to="about">About</Link>
//       </nav>
//     </div>
//   );
// }


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

// Code for example
// function Dashboard() {
//   return (
//     <div>
//       <p>Look, more routes!</p>
//       <Routes>
//         <Route path="/" element={<DashboardGraphs />} />
//         <Route path="invoices" element={<InvoiceList />} />
//       </Routes>
//       <Outlet />
//     </div>
//   );
// }

// Code for example start

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

// Code for example end


function Main() {
  const location = useLocation().pathname.split('/');
  const locationMarc =  location[location.length - 1];

  return (
    <>
      {/* <header className="App-header">
       <h1>Welcome to the app!</h1>
      </header>
      <nav className="App-navigator navigation-container">
        <Link to="dev">Development</Link> |{' '}
        <Link to="services">Services</Link>
        <Link to="story">About</Link>
      </nav> */}

      <main className={`App-wrapper content-container ${locationMarc}`}>
          <BtnHome />
          <Outlet />
      </main>
    </>
  );
}

function Home() {

  return (
    <>
    <main className="App-wrapper">
    <ThemeSwitcher />
      <HomeComponent />
    </main>
      {/* <nav>
        <Link to="about">Home</Link>
      </nav> */}
    </>
  );
}

function Development() {
  return (
    <>
      <DevComponent />

      {/* <nav>
        <Link to="about">Home</Link>
      </nav> */}
    </>
  );
}

function Services() {
  return (
    <>
      <ServicesComponent>
        <ArticleList />
      </ServicesComponent>


      {/* <nav>
        <Link to="about">Home</Link>
      </nav> */}
    </>
  );
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

function NotFound() {
  return (
    <main className="App-wrapper">
      {/* <h2>Who are we?</h2> */}
      <section className="Not-found-page page-wrapper">
        <h1>NotFound 404 page</h1>


        <Link to="/">Go Home</Link>

      </section>
      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
    </main>
  );
}

export {
  About,
  Services,
  Development,
  Home,
  Main,
  NotFound
}
