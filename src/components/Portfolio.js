import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import calculate from "../assets/calculate.png";
import room from "../assets/room.png";
import pets from "../assets/pets.png";
import beer from "../assets/beer.png";
import Media from "react-media";

export default class Portfolio extends Component {
  render() {
    return (
      <ScrollableAnchor id={"portfolio"}>
        <div className="portfolio">
          <Media query="(max-width: 820px)">
            {matches =>
              matches ? (
                <h1 className="portfolio_header_2">PORTFOLIO</h1>
              ) : (
                <h1 className="portfolio_header">PORTFOLIO</h1>
              )
            }
          </Media>

          <p className="portfolio_underline">___</p>
          <Media query="(max-width: 820px)">
            {matches =>
              matches ? (
                <section className="projects_2">
                  <a
                    target="_blank"
                    href="https://github.com/apcrypto/calculate-frontend"
                  >
                    <img
                      className="calculate_image"
                      alt="picture_of_caculate"
                      src={calculate}
                    />
                  </a>

                  <a
                    target="_blank"
                    className="room_git"
                    href="https://github.com/apcrypto/dragARoom-frontend"
                  >
                    <img
                      className="room_image"
                      alt="picture_of_room"
                      src={room}
                    />
                  </a>

                  <a
                    target="_blank"
                    className="pet_git"
                    href="https://github.com/apcrypto/rails-project-mode-london-web-111918"
                  >
                    <img
                      className="pets_image"
                      alt="picture_of_pets"
                      src={pets}
                    />
                  </a>
                </section>
              ) : (
                <section className="projects">
                  <a
                    target="_blank"
                    href="https://github.com/apcrypto/calculate-frontend"
                  >
                    <img
                      className="calculate_image"
                      alt="picture_of_caculate"
                      src={calculate}
                    />
                  </a>

                  <a
                    target="_blank"
                    className="room_git"
                    href="https://github.com/apcrypto/dragARoom-frontend"
                  >
                    <img
                      className="room_image"
                      alt="picture_of_room"
                      src={room}
                    />
                  </a>

                  <a
                    target="_blank"
                    className="pet_git"
                    href="https://github.com/apcrypto/rails-project-mode-london-web-111918"
                  >
                    <img
                      className="pets_image"
                      alt="picture_of_pets"
                      src={pets}
                    />
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
