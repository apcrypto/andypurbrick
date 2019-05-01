import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import calculate from '../assets/calculate.png'
import room from '../assets/room.png'
import pets from '../assets/pets.png'
import beer from '../assets/beer.png'

export default class Portfolio extends Component {

  render() {
    return (
      <ScrollableAnchor id={'portfolio'}>
      <div className="portfolio">
      <h1 className="portfolio_header">PORTFOLIO</h1>
      <p className="portfolio_underline">___</p>
      <section className="projects">

      <a href="https://github.com/apcrypto/calculate-frontend">
      <img className="calculate_image" alt="picture_of_caculate" src={calculate}/>
      </a>

      <a className="room_git" href="https://github.com/apcrypto/dragARoom-frontend">
      <img className="room_image" alt="picture_of_room" src={room}/>
      </a>

      <a className="pet_git" href="https://github.com/apcrypto/rails-project-mode-london-web-111918">
      <img className="pets_image" alt="picture_of_pets" src={pets}/>
      </a>

      </section>
      </div>
      </ScrollableAnchor>
    );
  }
}
