import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


 const GoSkillLink = () => {
  const slot = "Show skills...";

  return (
      <Link className="Skill-link" to={{pathname: 'me/dev', hash: '#skills'}}>
        <span>{ slot }</span>  
        <FontAwesomeIcon icon={ faChevronRight }/>
      </Link> 
  );
}

export default GoSkillLink