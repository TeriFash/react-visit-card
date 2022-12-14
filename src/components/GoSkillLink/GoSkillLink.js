import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Link } from "react-router-dom";

const GoSkillLink = () => {
  const { t } = useTranslation('main');
  const slot = t('titleShowSkills');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      target='_blank'
      className={`Skill-link ${isHovered ? 'Skill-link--hover' : 'Skill-link--hover-off'}`}
      href='https://terifash.github.io/cv-skills-board/'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      rel='noreferrer'
    >
      <span>{slot}</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </a>
  );
};

export default GoSkillLink;
