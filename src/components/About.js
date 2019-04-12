import React, { Component } from "react";
import Navigation from '../components/Navigation';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class About extends Component {

  render() {

    return (

      <ScrollableAnchor id={'about'}>
      <div className="about">
      <Navigation />
      </div>
      </ScrollableAnchor>
    );
  }
}
