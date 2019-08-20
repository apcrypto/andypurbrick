import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side_drawer"];
  if (props.show) {
    drawerClasses = "side_drawer open";
  }
  return (
    <nav className={drawerClasses} onClick={props.drawerLinkClickHandler}>
      <ul>
        <li>
          <a href="#specialistfactual">SPECIALIST FACTUAL</a>
        </li>
        <li>
          <a href="#observational">OBSERVATIONAL</a>
        </li>
        <li>
          <a href="#factualentertainment">FACTUAL ENTERTAINMENT</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
