import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Services,
  Development,
  Home,
  Main,
  NotFound
} from "./utilities/navigation/routes.js";


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

export default App;
