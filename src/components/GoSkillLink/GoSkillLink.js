import React from "react";
import settings from "../../store/settings.js"

const lookUrl = settings.goSkillLink.url;

 const GoSkillLink = (props) => {
  const { type, ...rest } = props;
  const slot = "Show all skills...";

  return (
    <a href={lookUrl}  className="Skill-link" {...rest} rel="noreferrer" target="_blank">
      {slot}
    </a>
  );
}

export default GoSkillLink