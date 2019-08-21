import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import react from "../assets/react.png";
import decentral from "../assets/decentral.png";
import rails from "../assets/rails.png";
import pry from "../assets/pry.png";
import "./blog.css";

const blog = props => (
  <ScrollableAnchor id={"blog"}>
    <div className="blog">
      <h1 className="header">Blog</h1>
    </div>
  </ScrollableAnchor>
);

export default blog;
