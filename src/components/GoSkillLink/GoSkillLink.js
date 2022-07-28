import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";

const GoSkillLink = () => {
  const slot = 'Show skills...';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      target='_blank'
      className={`Skill-link ${isHovered ? 'Skill-link--hover' : ''}`}
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
