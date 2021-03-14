import React from "react"; // useState, useEffect
import { Routes, Route } from "react-router-dom"; // useParams
import {
  // About,
  // Services,
  Development,
  Home,
  Main,
  NotFound,
} from "utilities/navigation/routes.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import Firebase from "firebase/app";
// import "firebase/firestore";
// import firebaseConfig from "./utilities/data/firebase";
// import postData from "./store/articles/post-data";
// import ArticleListItem from "./components/ArticleListItem";

library.add(fab)

// const DetailedPost = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState({
//     title: "",
//     author: "",
//     content: "",
//   });

//   useEffect(() => {
//     const requiredPost = postData.find((postItem) => postItem.id === id);
//     setPost(requiredPost);
//   }, [id]);

//   return <ArticleListItem {...post} />;
// };

function App() {
  // Firebase.initializeApp(firebaseConfig);

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
          {/*<Route path="services" element={<Services />} />
          <Route path="services/:id" element={<DetailedPost />} />
          <Route path="story" element={<About />} />*/}
        </Route>
        {/* <Route path="home" redirectTo="/" /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
