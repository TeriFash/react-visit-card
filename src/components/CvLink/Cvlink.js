import React from 'react';

const CvLink = props => {
  const { type, link, title, ...rest } = props;
  const look = type === '_blank';
  const lang = 'en';
  const slot = look ? title : props.children;

  return (
    <a
      rel='noopener noreferrer'
      href={link[lang]}
      {...rest}
      download={!look}
      target={type}
    >
      {slot}
    </a>
  );
};

export default CvLink;
