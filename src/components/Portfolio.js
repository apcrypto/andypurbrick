import React, { Component } from "react";
import Navigation from '../components/Navigation';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Portfolio extends Component {

  render() {

    return (
      <ScrollableAnchor id={'portfolio'}>
      <div className="portfolio">
      </div>
      </ScrollableAnchor>
    );
  }
}
