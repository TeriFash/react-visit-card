import React from "react";
import settings from "../../store/settings.js"

const lookUrl = settings.cvLinks.en.view;
const downloadUrl = settings.cvLinks.en.download;

 const CvLink = (props) => {
  const { type, ...rest } = props;
  const look = type === "look";
  const url = look ? lookUrl : downloadUrl;
  const slot = look ? "Look my Bio" : props.children;

  return (
    <a href={url} {...rest} download={type !== 'look'} target={type === 'look' ? '_blanck' : '_self'}>
      {slot}
    </a>
  );
}

export default CvLink
