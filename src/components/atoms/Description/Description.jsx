import React from "react";
import "../../../App.css";

function Description({ description, descriptionStyle, calories, date, temp }) {
  return (
    <>
      <div className="descriptionSection">
        <p className={descriptionStyle}>{description}</p>
        <div className="stats">
          <p>{calories}</p>
          <p>{date}</p>
          <p>{temp}</p>
        </div>
      </div>
    </>
  );
}

export default Description;
