import React from "react";

const lookUrl =
  "https://docs.google.com/document/d/1pTV98fax2IT_WtJWGEiT6azE-8Apuv4qPJtQ_eDwxqY/edit?usp=sharing";
const downloadUrl =
  "https://docs.google.com/document/d/1vsexD7H_Xa_DVmbWLf_LECN7ZsGn72e8hrq27cG0qXk/export?format=pdf";

 const CvLink = (props) => {
  const { type, ...rest } = props;
  const look = type === "look";
  const url = look ? lookUrl : downloadUrl;
  const slot = look ? "Look my resume" : props.children;

  return (
    <a href={url} {...rest} download>
      {slot}
    </a>
  );
}

export default CvLink