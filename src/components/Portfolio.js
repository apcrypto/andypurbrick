import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import calculate from "../assets/calculate.png";
import room from "../assets/room.png";
import pets from "../assets/pets.png";
import "./portfolio.css";

const portfolio = props => (
  <ScrollableAnchor id={"portfolio"}>
    <div className="portfolio">
      <h1 className="header">Portfolio</h1>
      <div className="projects">
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
          <img className="room_image" alt="picture_of_room" src={room} />
        </a>

        <a
          target="_blank"
          className="pet_git"
          href="https://github.com/apcrypto/rails-project-mode-london-web-111918"
        >
          <img className="pets_image" alt="picture_of_pets" src={pets} />
        </a>
      </div>
    </div>
  </ScrollableAnchor>
);

export default portfolio;
