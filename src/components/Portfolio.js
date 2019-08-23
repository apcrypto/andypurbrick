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
        <div className="projects_info">
          <div>
            <p className="portfolio_projects-header">CalcuLate</p>
          </div>
          <div className="zoom">
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
          </div>

          <div className="portfolio_links">
            <a
              href="https://github.com/apcrypto/calculate-frontend"
              className="portfolio_github-link"
              target="_blank"
            >
              Github
            </a>
            |
            <a
              href="https://youtu.be/xaE45I_vOUg"
              className="portfolio_demo-link"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="projects_info">
          <div>
            <p className="portfolio_projects-header">Room Designer</p>
          </div>
          <div className="zoom">
            <a
              target="_blank"
              className="room_git"
              href="https://github.com/apcrypto/dragARoom-frontend"
              target="_blank"
            >
              <img className="room_image" alt="picture_of_room" src={room} />
            </a>
          </div>
          <div className="portfolio_links">
            <a
              href="https://github.com/apcrypto/dragARoom-frontend"
              className="portfolio_github-link"
              target="_blank"
            >
              Github
            </a>
            |
            <a
              href="https://youtu.be/VchKvfUyaCM"
              className="portfolio_demo-link"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="projects_info">
          <div>
            <p className="portfolio_projects-header">Pet Sitting App</p>
          </div>
          <div className="zoom">
            <a
              target="_blank"
              className="pet_git"
              href="https://github.com/apcrypto/rails-project-mode-london-web-111918"
              target="_blank"
            >
              <img className="pets_image" alt="picture_of_pets" src={pets} />
            </a>
          </div>
          <div className="portfolio_links">
            <a
              href="https://github.com/apcrypto/rails-project-mode-london-web-111918"
              className="portfolio_github-link"
              target="_blank"
            >
              Github
            </a>
            |
            <a
              href="https://youtu.be/K3qM-9mQ6oo"
              className="portfolio_demo-link"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </ScrollableAnchor>
);

export default portfolio;
