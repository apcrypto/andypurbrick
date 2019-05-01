import React, { Component } from "react";
import Navigation from '../components/Navigation';
import ScrollableAnchor from 'react-scrollable-anchor'
import andy from '../assets/andy.jpg'
import MediaQuery from 'react-responsive';


export default class About extends Component {

  render() {
    return (
      <ScrollableAnchor id={'about'}>
      <div className="about">
      <Navigation />
      <h1 className="about_header">ABOUT</h1>
      <p className="about_underline">___</p>
      <MediaQuery query="(min-device-width: 1224px)">
      <div>
      <img className="andy_image" alt="picture_of_andy_purbrick" src={andy}/>
      <p className="about_copy">Full stack web developer with extensive background in data and analysis, digital advertising, adtech, and project management. I have a passion for all things digital, in particular blockchain and emerging technologies. After starting my career in digital advertising, I  transitioned to software development as I love building new products and bringing them to market. I bring strong skills in team-building and management, product development, project management and a deep knowledge of the digital ecosystem. In my spare time I enjoy craft brewing, playing guitar and cycling.</p>
      <p className="about_skills">JavaScript, React, Redux, Ruby, Ruby on Rails, Sinatra, HTML, CSS, Postgres, SQL, Google Analytics, Wireframing</p>x
      </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 940px)">
      <div>
      <img className="andy_image_940" alt="picture_of_andy_purbrick" src={andy}/>
      <p className="about_copy_940">Full stack web developer with extensive background in data and analysis, digital advertising, adtech, and project management. I have a passion for all things digital, in particular blockchain and emerging technologies. After starting my career in digital advertising, I  transitioned to software development as I love building new products and bringing them to market. I bring strong skills in team-building and management, product development, project management and a deep knowledge of the digital ecosystem. In my spare time I enjoy craft brewing, playing guitar and cycling.</p>
      <p className="about_skills_940">JavaScript, React, Redux, Ruby, Ruby on Rails, Sinatra, HTML, CSS, Postgres, SQL, Google Analytics, Wireframing</p>x
      </div>
      </MediaQuery>
      </div>
      </ScrollableAnchor>
    );
  }
}
