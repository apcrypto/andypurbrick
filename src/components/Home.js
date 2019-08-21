import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./home.css";

const home = props => (
  <ScrollableAnchor id={"home"}>
    <div className="home">
      <p className="home_intro">
        Hello, I'm <span className="home_intro-name">Andy Purbrick</span>.
      </p>
      <p className="home_description">I'm a full stack web developer.</p>

      <a className="home_view-work" href="#about">
        View my work >
      </a>
    </div>
  </ScrollableAnchor>
);

export default home;
