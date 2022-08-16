import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainSocialLinksItem = props => {
  return (
    <li>
      <a rel='noopener noreferrer' target='_blanck' href={props.value.link}>
        <FontAwesomeIcon icon={['fab', props.value.icon]} />
      </a>
    </li>
  );
};

const MainSocialLinks = props => {
  const { data } = props;
  const dataSet = data.map(item => <MainSocialLinksItem key={item.link} value={item} />);

  return <ul className='main-social-link'>{dataSet}</ul>;
};

export default MainSocialLinks;
