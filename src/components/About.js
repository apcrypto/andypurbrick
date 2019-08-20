import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import andy from '../assets/andy.jpg'
import Media from 'react-media'

export default class About extends Component {

  render() {
    return (
      <ScrollableAnchor id={'about'}>
      <div className="about">

      <Media query="(max-width: 820px)">
      {matches =>
        matches ? (
          <h1 className="about_header_2">ABOUT</h1>
        ) : (
          <h1 className="about_header">ABOUT</h1>
        )
      }
      </Media>

      <p className="about_underline">___</p>
      <div className="about_content">

      <Media query="(max-width: 820px)">
      {matches =>
        matches ? (
          <img className="andy_image_2" alt="picture_of_andy_purbrick" src={andy}/>
        ) : (
          <img className="andy_image_1" alt="picture_of_andy_purbrick" src={andy}/>
        )
      }
      </Media>

      <Media query="(max-width: 820px)">
      {matches =>
        matches ? (
          <p className="about_copy_2">Full stack web developer with extensive background in data and analysis, digital advertising, adtech, and project management. I have a passion for all things digital, in particular blockchain and emerging technologies. After starting my career in digital advertising, I transitioned to software development as I love building new products and bringing them to market. I bring strong skills in team-building and management, product development, project management and a deep knowledge of the digital ecosystem. In my spare time I enjoy craft brewing, playing guitar and cycling.</p>
        ) : (
          <p className="about_copy_1">Full stack web developer with extensive background in data and analysis, digital advertising, adtech, and project management. I have a passion for all things digital, in particular blockchain and emerging technologies. After starting my career in digital advertising, I transitioned to software development as I love building new products and bringing them to market. I bring strong skills in team-building and management, product development, project management and a deep knowledge of the digital ecosystem. In my spare time I enjoy craft brewing, playing guitar and cycling.</p>
        )
      }
      </Media>

      <Media query="(max-width: 820px)">
      {matches =>
        matches ? (
          <p className="about_skills_2">JavaScript, React, Redux, Ruby, Ruby on Rails, Sinatra, HTML, CSS, Postgres, SQL, Google Analytics, Wireframing</p>
        ) : (
          <p className="about_skills_1">JavaScript, React, Redux, Ruby, Ruby on Rails, Sinatra, HTML, CSS, Postgres, SQL, Google Analytics, Wireframing</p>
        )
      }
      </Media>

      </div>
      </div>
      </ScrollableAnchor>

    );
  }
}
