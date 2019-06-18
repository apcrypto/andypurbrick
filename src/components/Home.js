import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Media from "react-media";

export default class Home extends Component {
  render() {
    return (
      <ScrollableAnchor id={"home"}>
        <div className="home">
          <Media query="(max-width: 820px)">
            {matches =>
              matches ? (
                <p className="home_hello_2">
                  Hello, I'm <span className="andy">Andy Purbrick</span>.
                </p>
              ) : (
                <p className="home_hello">
                  Hello, I'm <span className="andy">Andy Purbrick</span>.
                </p>
              )
            }
          </Media>

          <Media query="(max-width: 820px)">
            {matches =>
              matches ? (
                <p className="home_dev_2">I'm a full stack web developer.</p>
              ) : (
                <p className="home_dev">I'm a full stack web developer.</p>
              )
            }
          </Media>

          <Media query="(max-width: 820px)">
            {matches =>
              matches ? (
                <a className="view_work_2" href="#about">
                  View my work >
                </a>
              ) : (
                <a className="view_work" href="#about">
                  View my work >
                </a>
              )
            }
          </Media>
        </div>
      </ScrollableAnchor>
    );
  }
}
