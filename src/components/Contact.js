import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";


export default class Contact extends Component {


  render() {
    return (
      <ScrollableAnchor id={"contact"}>
        <div className="contact">
          <h1 className="contact_header">CONTACT</h1>
          <p className="contact_underline">___</p>
          <section className="contact_links">
          <a className="contact_github" target="_blank" href="https://github.com/apcrypto">Github</a>
          <a className="contact_linkedin" target="_blank" href="https://www.linkedin.com/in/andypurbrick/">Linkedin</a>
          <a className="contact_medium" target="_blank" href="https://medium.com/@andypurbrick">Medium</a>
          </section>
        </div>
      </ScrollableAnchor>
    );
  }
}
