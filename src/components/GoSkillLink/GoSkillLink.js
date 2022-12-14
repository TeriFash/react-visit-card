import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Link } from "react-router-dom";

const GoSkillLink = () => {
  const { t } = useTranslation('main');
  const text = t('titleShowSkills');
  const name = 'Skill-link';
  const [isHovered, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHover(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHover(false);
    }, 300);
  };

  const classNameBox = {
    link: `${name} ${name}--${isHovered ? 'hover' : 'hover-unset'}`,
    text: `${name}__text ${name}__text--${isHovered ? 'hover' : 'hover-unset'}`,
    icon: `${name}__icon ${name}__icon--${isHovered ? 'hover' : 'hover-unset'}`
  }

  return (
    <a
      target='_blank'
      className={classNameBox.link}
      href='https://terifash.github.io/cv-skills-board/'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      rel='noreferrer'
    >
      <span className={classNameBox.text}>{text}</span>
      <FontAwesomeIcon className={classNameBox.icon} icon={faChevronRight} />
    </a>
  );
};

export default GoSkillLink;
