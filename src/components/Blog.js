import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import react from "../assets/react.png";
import decentral from "../assets/decentral.png";
import rails from "../assets/rails.png";
import "./blog.css";

const blog = props => (
  <ScrollableAnchor id={"blog"}>
    <div className="blog">
      <h1 className="header">Blog</h1>
      <div className="blogs">
        <div className="zoom">
          <a
            target="_blank"
            href="https://medium.com/@andypurbrick/react-angular-vue-whats-the-difference-c609dc6f9f37"
          >
            <img className="react_image" alt="picture_of_react" src={react} />
          </a>
        </div>
        <div className="zoom">
          <a
            target="_blank"
            href="https://medium.com/@andypurbrick/the-decentralised-internet-6a353998d14f"
          >
            <img
              className="decentral_image"
              alt="picture_of_decentral"
              src={decentral}
            />
          </a>
        </div>
        <div className="zoom">
          <a
            target="_blank"
            href="https://medium.com/@andypurbrick/leaving-sinatra-and-getting-on-the-rails-my-first-week-with-ruby-on-rails-9e9a52ba5ff8"
          >
            <img className="rails_image" alt="picture_of_rails" src={rails} />
          </a>
        </div>
      </div>
    </div>
  </ScrollableAnchor>
);

export default blog;
