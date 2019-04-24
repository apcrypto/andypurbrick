import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import react from '../assets/react.png'
import decentral from '../assets/decentral.png'
import rails from '../assets/rails.png'
import pry from '../assets/pry.png'

export default class Blog extends Component {

  render() {

    return (
      <ScrollableAnchor id={'blog'}>
      <div className="blog">
      <h1 className="blog_header">BLOG</h1>
      <p className="blog_underline">___</p>
      <section className="blogs">
      <img className="react_image" alt="picture_of_react" src={react}/>
      <img className="decentral_image" alt="picture_of_decentral" src={decentral}/>
      <img className="rails_image" alt="picture_of_rails" src={rails}/>
      </section>
      </div>
      </ScrollableAnchor>
    );
  }
}
