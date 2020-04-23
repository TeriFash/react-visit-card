
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import postData from "../../store/articles/art-one";

import ArticleListItem from "../ArticleListItem";


const ArticleList = () => {
  const [posts, setPosts] = useState([]);
    let navigate = useNavigate();


  useEffect(() => {
    setPosts(postData);
  }, []);



  return (
      
    <div className="Article-list">
    
      {posts.map((post, postIndex) => {
        const clickedMore = (event) => {
            event.preventDefault();
            navigate(post.id, {replace: true})
        };
        return (
          <Fragment key={postIndex}>
            <ArticleListItem
              title={post.title}
              author={post.author}
              content={post.content}
              isOnlySummary={true}
            />
            <button onClick={clickedMore}>
                More
            </button>

            {/* <Link to={post.id}>More</Link>{" "} */}

          </Fragment>
        );
      })}
    </div>
  );
};

export default ArticleList;
