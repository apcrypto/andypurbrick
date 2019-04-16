import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Home extends Component {

  render() {

    return (
      <ScrollableAnchor id={'home'}>
      <div className="home">
      <p className="home_hello">Hello, I'm <span className="andy">Andy Purbrick</span>.</p>
      <p className="home_dev">I'm a full stack web developer.</p>
      <a className="view_work" href="#about">View my work ></a>
      </div>
      </ScrollableAnchor>
    );
  }
}
