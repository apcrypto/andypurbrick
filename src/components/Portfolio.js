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
      <img className="calculate_image" alt="picture_of_caculate" src={calculate}/>
      <img className="room_image" alt="picture_of_room" src={room}/>
      <img className="pets_image" alt="picture_of_pets" src={pets}/>
      <div className="demo_links">
      <a className="calc_git" href="#home">Github</a>
      <a className="calc_demo" href="#home">Demo</a>
      <a className="room_git" href="#home">Github</a>
      <a className="room_demo" href="#home">Demo</a>
      <a className="pet_git" href="#home">Github</a>
      <a className="pet_demo" href="#home">Demo</a>
      </div>
      </section>
      </div>
      </ScrollableAnchor>
    );
  }
}
