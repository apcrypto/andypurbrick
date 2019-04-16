import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Blog extends Component {

  render() {

    return (
      <ScrollableAnchor id={'contact'}>
      <div className="contact">
      <h1 className="contact_header">CONTACT</h1>
      <p className="contact_underline">___</p>
      </div>
      </ScrollableAnchor>
    );
  }
}
