import React from "react";
import "../../../App.css";

function Button({ buttonStyle, buttonText }) {
  return (
    <>
      <button className={buttonStyle}>{buttonText}</button>
    </>
  );
}

export default Button;
