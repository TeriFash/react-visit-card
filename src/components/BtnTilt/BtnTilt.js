import React from "react";
import MoveTilt from "../MoveTilt";
import CvLink from "../CvLink";
import BtnUpload from "../BtnUpload";
import settings from "../../store/settings.js"

// import './BtnTilt.scss'

const BtnTilt = () => {
  const cvData = settings.cvLinks
  const options = {
    scale: 1.1,
    speed: 3000,
    max: 25,
    glare: true,
    "max-glare": 0.5,
  };

  return (
    <>
      <MoveTilt options={options}>
        <CvLink {...cvData.typeTwo} className="btn-tilt" />
      </MoveTilt>

      <CvLink {...cvData.typeOne} className="Btn-upload-wrapper">
        <BtnUpload />
      </CvLink>
    </>
  );
};

export default BtnTilt;
