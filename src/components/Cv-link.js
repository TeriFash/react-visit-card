import React from "react";

const lookUrl =
  "https://docs.google.com/document/d/19jWotap4ZTkW8-tGLf6z-EOCzSWlgnc4Knx1cQ6JjFk/edit?usp=sharing";
const downloadUrl =
  "https://docs.google.com/document/d/1eseqJABChYtt94bu36htjUlFNXEsTDwJZ7lj6-FJX8w/export?format=pdf";

export default function CvLink(props) {
  const { type, ...rest } = props;
  const look = type === "look"
  const url = look ? lookUrl : downloadUrl;
  const slot = look ? "Look me resume" : props.children;

  return (
    <a href={url} {...rest} download>
      {slot}
    </a>
  );
}
