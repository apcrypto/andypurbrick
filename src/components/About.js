import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import andy from "../assets/andy.jpg";
import "./about.css";

const about = props => (
  <ScrollableAnchor id={"about"}>
    <div className="about">
      <h1 className="header">About</h1>
      <div class="container">
        <div class="item1">
          <img
            className="andy_image"
            alt="picture_of_andy_purbrick"
            src={andy}
          />
        </div>
        <div class="item2">
          <p class="about_text">
            Full stack web developer with extensive background in data and
            analysis, digital advertising, adtech, and project management. I
            have a passion for all things digital, in particular blockchain and
            emerging technologies. After starting my career in digital
            advertising, I transitioned to software development as I love
            building new products and bringing them to market. I bring strong
            skills in team-building and management, product development, project
            management and a deep knowledge of the digital ecosystem. In my
            spare time I enjoy craft brewing, playing guitar and cycling.
          </p>
          <p class="about_skils">
            JavaScript, React, Vue.js, Vuex, Nuxt.js, Ruby, Ruby on Rails, HTML,
            CSS, SQL, CMS, Git, Agile, Google Analytics, Wireframing
          </p>
        </div>
      </div>
    </div>
  </ScrollableAnchor>
);

export default about;

{
  /* <div class="wrapper">
<div class="panel">
  <img
    className="andy_image"
    alt="picture_of_andy_purbrick"
    src={andy}
  />
  <p class="about_text">
    Full stack web developer with extensive background in data and
    analysis, digital advertising, adtech, and project management. I
    have a passion for all things digital, in particular blockchain and
    emerging technologies. After starting my career in digital
    advertising, I transitioned to software development as I love
    building new products and bringing them to market. I bring strong
    skills in team-building and management, product development, project
    management and a deep knowledge of the digital ecosystem. In my
    spare time I enjoy craft brewing, playing guitar and cycling.
  </p>
</div>

<div class="panel">
  <p class="about_skils">
    JavaScript, React, Vue.js, Vuex, Nuxt.js, Ruby, Ruby on Rails, HTML,
    CSS, SQL, CMS, Git, Agile, Google Analytics, Wireframing
  </p>
</div>
</div> */
}
