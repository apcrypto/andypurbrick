import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Blog extends Component {

  render() {

    return (
      <ScrollableAnchor id={'blog'}>
      <div className="blog">
      </div>
      </ScrollableAnchor>
    );
  }
}
