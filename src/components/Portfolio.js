import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import calculate from "../assets/calculate.png";
import room from "../assets/room.png";
import pets from "../assets/pets.png";
import "./portfolio.css";

const portfolio = props => (
  <ScrollableAnchor id={"portfolio"}>
    <div className="portfolio">
      <h1 className="header">Portfolio</h1>
      <p>this is test text</p>
    </div>
  </ScrollableAnchor>
);

export default portfolio;
