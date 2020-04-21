import React from "react";
// import ReactDOM from 'react-dom';
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
// import RoutesConfig from "./routes.js";

// const Main = () =><MainSocialLink /> <h1> Main page</h1>;
import HomeComponent from "./components/Home";
import DevComponent from "./components/Development";
import ServicesComponent from "./components/Services";
import AboutComponent from "./components/About";
const NotFound = () => <h1>NotFound 404 page</h1>;

// function NavigateButtonHelper() {
//   let navigate = useNavigate();
//   function createInvoice() {
//     navigate("/home");
//     navigate("/home", { replace: true });
//   }
//   return <button onClick={createInvoice()}>Submit</button>;
// }

function Main() {
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
      <main className="App-wrapper content-container">
        <Outlet />
      </main>
    </>
  );
}

// function Development() {
//   let navigate = useNavigate();

//   return (
//     <div>
//       <h1>Development page</h1>
//       <NavigateButtonHelper
//         onSubmit={async event => {
//           //let newInvoice = await true
//           navigate('/dev');
//         }} />
//        <DevComponent />
//     </div>
//   );
// }

function Home() {
  return (
    <>
    <main className="App-wrapper">
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
      <ServicesComponent />

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

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <nav className="App-navigator navigation-container">
          <Link to="dev">Development</Link> |{' '}
          <Link to="services">Services</Link>
          <Link to="story">About</Link>
        </nav>
      </header> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="me" element={<Main />}>
          <Route path="dev" element={<Development />} />
          <Route path="services" element={<Services />} />
          <Route path="story" element={<About />} />
        </Route>
        <Route path="home" redirectTo="/" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// function SomeForm() {
//   let navigate = useNavigate();
//   return (
//     <form
//       onSubmit={async (event) => {
//         let newRecord = await saveDataFromForm(event.target);
//         // you can build up the URL yourself
//         navigate(`/stuff/${newRecord.id}`);
//         // or navigate relative, just like Link
//         navigate(`${newRecord.id}`);
//       }}
//     >
//       {/* ... */}
//     </form>
//   );
// }

export default App;
