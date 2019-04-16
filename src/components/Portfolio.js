import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Portfolio extends Component {

  render() {
    return (
      <ScrollableAnchor id={'portfolio'}>
      <div className="portfolio">
      <h1 className="portfolio_header">PORTFOLIO</h1>
      <p className="portfolio_underline">___</p>
      </div>
      </ScrollableAnchor>
    );
  }
}
