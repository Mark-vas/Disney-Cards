import React from "react";
import img_Preloader from "../../Images/5.gif";

let Preloader = (props) => {
  return <div>{props.isPreloader && <img src={img_Preloader} alt="" />}</div>;
};

export default Preloader;
