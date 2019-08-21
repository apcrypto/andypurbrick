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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
