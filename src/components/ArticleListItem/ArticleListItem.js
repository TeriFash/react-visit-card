import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = ({
  id = "",
  title = "",
  author = "",
  content = "",
  isOnlySummary = false
}) => {
  return (
    <div className="Article-list-item container">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{isOnlySummary ? content.substr(0, 80) + "..." : content}</p>
    </div>
  );
};

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOnlySummary: PropTypes.bool
};

export default ArticleListItem;
