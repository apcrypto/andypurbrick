import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./contact.css";

const contact = props => (
  <ScrollableAnchor id={"contact"}>
    <div className="contact">
      <h1 className="header">Contact</h1>
    </div>
  </ScrollableAnchor>
);

export default contact;
