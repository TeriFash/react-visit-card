import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BtnHome = () => {
  let navigate = useNavigate();
  let btnRef = useRef();

   function handleSubmit(event) {
    event.preventDefault();
    navigate('/');
  }
  return (
    <div className="btn btn-left-back"> 
      <button ref={btnRef} onClick={handleSubmit}> Back </button>
     </div>
  );
}

export default BtnHome
