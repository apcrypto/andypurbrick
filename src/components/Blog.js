import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Blog extends Component {

  render() {

    return (
      <ScrollableAnchor id={'blog'}>
      <div className="blog">
      <h1 className="blog_header">BLOG</h1>
      <p className="blog_underline">___</p>
      </div>
      </ScrollableAnchor>
    );
  }
}
