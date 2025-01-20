import React from "react";
import "../../../App.css";

function Prices({ heading1Style, heading2Style, heading1Text, heading2Text }) {
  return (
    <>
      <div className="prices_container">
        <h1 className={heading1Style}>{heading1Text}</h1>
        <h2 className={heading2Style}>{heading2Text}</h2>
      </div>
    </>
  );
}

export default Prices;
