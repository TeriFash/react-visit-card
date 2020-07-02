import React from "react";

const lookUrl =
  "https://docs.google.com/document/d/1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI/edit?usp=sharing";
const downloadUrl =
  "https://docs.google.com/document/d/1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI/export?format=pdf";

 const CvLink = (props) => {
  const { type, ...rest } = props;
  const look = type === "look";
  const url = look ? lookUrl : downloadUrl;
  const slot = look ? "Look my CV" : props.children;

  return (
    <a href={url} {...rest} download={type !== 'look'} target={type === 'look' ? '_blanck' : '_self'}>
      {slot}
    </a>
  );
}

export default CvLink
