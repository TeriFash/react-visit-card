import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


 const GoSkillLink = (props) => {
  const { data, ...rest } = props;
  const slot = "Show skills...";

  return (
    // <a href={data.url} className="Skill-link" {...rest} rel="noopener noreferrer" target="_blank">
    //   <span>{ slot }</span>  
    //   <FontAwesomeIcon icon={faChevronRight}/>
    // </a>

          <Link className="Skill-link" tag="a" to="me/dev">
            <span>{ slot }</span>  
            <FontAwesomeIcon icon={faChevronRight}/>
          </Link> 

  );
}

export default GoSkillLink