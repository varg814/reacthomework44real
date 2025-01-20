import React from "react";
import "../../../App.css";

function Icon({ iconStyle, iconSvg }) {
  return (
    <>
      <div className={iconStyle}>{iconSvg}</div>
    </>
  );
}

export default Icon;
