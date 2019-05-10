import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import Media from 'react-media'
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
      <Media query="(max-width: 820px)">
      {matches =>
        matches ? (
      <section className="blogs_2">
      <a target="_blank" href="https://medium.com/@andypurbrick/react-angular-vue-whats-the-difference-c609dc6f9f37">
      <img className="react_image" alt="picture_of_react" src={react}/>
      </a>
      <a target="_blank" href="https://medium.com/@andypurbrick/the-decentralised-internet-6a353998d14f">
      <img className="decentral_image" alt="picture_of_decentral" src={decentral}/>
      </a>
      <a target="_blank" href="https://medium.com/@andypurbrick/leaving-sinatra-and-getting-on-the-rails-my-first-week-with-ruby-on-rails-9e9a52ba5ff8">
      <img className="rails_image" alt="picture_of_rails" src={rails}/>
      </a>
      </section>
    ):(
      <section className="blogs">
      <a target="_blank" href="https://medium.com/@andypurbrick/react-angular-vue-whats-the-difference-c609dc6f9f37">
      <img className="react_image" alt="picture_of_react" src={react}/>
      </a>
      <a target="_blank" href="https://medium.com/@andypurbrick/the-decentralised-internet-6a353998d14f">
      <img className="decentral_image" alt="picture_of_decentral" src={decentral}/>
      </a>
      <a target="_blank" href="https://medium.com/@andypurbrick/leaving-sinatra-and-getting-on-the-rails-my-first-week-with-ruby-on-rails-9e9a52ba5ff8">
      <img className="rails_image" alt="picture_of_rails" src={rails}/>
      </a>
      </section>
    )
  }
      </Media>
      </div>
      </ScrollableAnchor>
    );
  }
}
