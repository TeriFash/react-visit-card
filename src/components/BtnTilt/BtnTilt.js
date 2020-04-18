import React from "react";
import MoveTilt from "./Move-tilt";
import CvLink from "./Cv-link";
import BtnUpload from "./Btn-upload";

// import './BtnTilt.scss'

export default function BtnTilt() {
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
}
