import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import {
  About,
  Services,
  Development,
  Home,
  Main,
  NotFound
} from "./utilities/navigation/routes.js";

import Firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from "./utilities/data/firebase";

import postData from "./store/articles/post-data";
import ArticleListItem from "./components/ArticleListItem";


const DetailedPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: ""
  });

  useEffect(() => {
    const requiredPost = postData.find(postItem => postItem.id === id);
    setPost(requiredPost);
  }, [id]);

  return <ArticleListItem {...post} />;
};


function App() {
  Firebase.initializeApp(firebaseConfig);

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
          <Route path="services/:id" element={<DetailedPost />} />
          <Route path="story" element={<About />} />
        </Route>
        {/* <Route path="home" redirectTo="/" /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
