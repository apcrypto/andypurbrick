import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./contact.css";

const contact = props => (
  <ScrollableAnchor id={"contact"}>
    <div className="contact">
      <h1 className="header">Contact</h1>
      <div className="contact_links">
        <a
          className="contact_github"
          target="_blank"
          href="https://github.com/apcrypto"
        >
          Github
        </a>
        <a
          className="contact_linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/andypurbrick/"
        >
          Linkedin
        </a>
        <a
          className="contact_medium"
          target="_blank"
          href="https://medium.com/@andypurbrick"
        >
          Medium
        </a>
      </div>
    </div>
  </ScrollableAnchor>
);

export default contact;
