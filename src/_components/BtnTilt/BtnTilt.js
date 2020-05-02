import React from "react";
import MoveTilt from "../MoveTilt";
import CvLink from "../CvLink";
import BtnUpload from "../BtnUpload";

// import './BtnTilt.scss'

const BtnTilt = () => {
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
        <CvLink type="look" className="btn-tilt" />
      </MoveTilt>

      <CvLink className="Btn-upload-wrapper">
        <BtnUpload />
      </CvLink>
    </>
  );
};

export default BtnTilt;
