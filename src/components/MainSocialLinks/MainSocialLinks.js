import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MainSocialLinksItem = (props) => {
  return (
    <li>
      <a rel="noopener noreferrer" target="_blanck" href={props.value.link}>
        <FontAwesomeIcon icon={[ 'fab', props.value.icon ]} />
      </a> 
    </li>
  );
}

const MainSocialLinks = (props) => {
  const { data } = props
  
  return (
    <ul className="Main-social-link">
      {data.map((item) =>
        <MainSocialLinksItem key={item.link} value={item} />
      )}
    </ul>
  );
}

export default MainSocialLinks;
