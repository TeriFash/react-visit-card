import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainSocialLinksItem = ({className, value}) => {
  return (
    <li className={className}>
      <a rel='noopener noreferrer' target='_blanck' href={value.link}>
        <FontAwesomeIcon icon={['fab', value.icon]} />
      </a>
    </li>
  );
};

const MainSocialLinks = ({data}) => {
  const last = data.length - 1;
  const dataSet = data.map((item, i) => <MainSocialLinksItem className={(last === i) && 'is-last'} key={item.link} value={item} />);

  return <ul className='main-social-link'>{dataSet}</ul>;
};

export default MainSocialLinks;
