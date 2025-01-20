import React from "react";
import "../../../App.css";
function Heading({ headingStyle, headingText }) {
  return (
    <>
      <div className="headingSection">
        <h1 className={headingStyle}>{headingText}</h1>
      </div>
    </>
  );
}

export default Heading;
