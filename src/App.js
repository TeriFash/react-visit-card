import React from "react";
// import ReactDOM from 'react-dom';
import {
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate
} from "react-router-dom";


// import RoutesConfig from "./routes.js";

// const Main = () => <h1> Main page</h1>;
// const Home = () => <h1> Home page</h1>;
// const Development = () => <h1> Development page</h1>;
// const Support = () => <h1> Support page</h1>;
// const About = () => <h1> About page</h1>;
const NotFound = () => <h1> NotFound 404 page</h1>;


function MyButton() {
  let navigate = useNavigate();
  function createInvoice() {
    navigate('/home');
    navigate('/home', {replace: true});
  };
  return <button onClick={createInvoice()}>Submit</button>;
};

function Main() {
  return (
    <div>
      <header className="App-header"> 
       <h1>Welcome to the app!</h1>
      </header>
      <nav className="App-navigator navigation-container">
        <Link to="dev">Development</Link> |{' '}
        <Link to="services">Services</Link>
        <Link to="story">About</Link>
      </nav>
      <main className="content-container">
        <Outlet />
      </main>
    </div>
  );
}

function Development() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Development page</h1>
      <div>
      <MyButton
        onSubmit={async event => {
          //let newInvoice = await true
          navigate('/dev');
        }}
      />
      </div>
    </div>
  );
}

function Services() {
  return <h1>Services page</h1>;
}

function Home() {
  return (
    <React.Fragment>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="about">Home</Link>
      </nav>
    </React.Fragment>
  );
}

function About() {
  return (
    <React.Fragment>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </React.Fragment>
  );
}

function App() {
  return (
    <>
      <header className="App-header">
        <nav className="App-navigator navigation-container">
          <Link to="dev">Development</Link> |{' '}
          <Link to="services">Services</Link>
          <Link to="story">About</Link>
        </nav>
      </header>

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
      
    </>
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
