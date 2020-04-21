import React from "react";

import { Navigate, Link, useNavigate } from 'react-router-dom';

import HomePage from "./components/Home/Home";

const Main = () => <h1> Main page</h1>;
// const Home = () => <h1> Home page</h1>;
const Development = () => <h1> Development page</h1>;
const Support = () => <h1> Support page</h1>;
const Services = () => <h1> Services page</h1>;
const Consult = () => <h1> Consult page</h1>;
const About = () => <h1> About page</h1>;
const MainIndex = () => <h1> MainIndex page</h1>;
const MainId = () => <h1> MainId page</h1>;
const MainBase = () => <h1> MainBase page</h1>;
const NotFound = () => <h1> NotFound 404 page</h1>;

function Home() {
  
  return (
    <div>
      <HomePage />
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
    </div>
  );
}


// function Declarative() {
//   return <Navigate to="/home" replace state={state} />;
// }

function Imperative() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

export default [
  { path: "/", element: <Home /> },
  {
    path: "me",
    element: <Main />,
    children: [
      { path: "/dev", element: <Development /> },
      { path: "/support", element: <Support /> },
      { path: "/services", element: <Services /> },
      { path: "/consult", element: <Consult /> },
      { path: "/story", element: <About /> },
    ],
  },
  {
    path: "main",
    element: <Main />,
    children: [
      { path: "/", element: <MainIndex /> },
      { path: ":id", element: <MainId /> },
      { path: "me", element: <MainBase /> },
    ],
  },
  // Redirects use a redirectTo property to
  { path: "home", redirectTo: "/" },
  // Not found routes work as you'd expect
  { path: "*", element: <NotFound /> },
];

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

// import { Navigate, useNavigate } from 'react-router-dom';

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
