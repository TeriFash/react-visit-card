import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from "../../utilities/data/firebase";
import postData from "../../store/articles/art-one";

import ArticleListItem from "../ArticleListItem";

let db = null;

const ArticleList = () => {
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setPosts(postData);
    // Initialize Firebase
    Firebase.initializeApp(firebaseConfig);
    db = Firebase.firestore();

    db.collection("articles").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        console.log('---', doc.data());
      });
        
    });
  }, []);

  return (
    <div className="Article-list"> 
      {posts.map((post, postIndex) => {
        const clickedMore = (event) => {
          event.preventDefault();
          navigate(post.id, { replace: true });
        };
        return (
          <Fragment key={postIndex}>
            <ArticleListItem
              title={post.title}
              author={post.author}
              content={post.content}
              isOnlySummary={true}
            />
            <button onClick={clickedMore}>More</button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ArticleList;
