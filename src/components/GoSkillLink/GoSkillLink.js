import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


 const GoSkillLink = () => {
  const slot = "Show skills...";
  const [isHovered, setIsHovered] = useState(false);

  return (
      <Link 
     
        className={`Skill-link ${isHovered ? 'Skill-link--hover' : ''}` } 
        to={{pathname: 'me/dev', hash: '#skills'}} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <span>{ slot }</span>  
        <FontAwesomeIcon icon={ faChevronRight }/>
      </Link> 
  );
}

export default GoSkillLink