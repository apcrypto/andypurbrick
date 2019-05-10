import React, { Component } from "react";
import Media from 'react-media'
import classnames from "classnames";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: false
    };
  }

    // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 0) {
      this.setState({
        visible: true
      });
    } if (currentScrollPos === 0) {
      this.setState({
        visible: false
      });
    }
  };

  render() {
    return (
      <nav
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
      >
        <a className="home_button" href="#home">HOME</a>
        <a className="about_button" href="#about">ABOUT</a>
        <a className="portfolio_button" href="#portfolio">PORTFOLIO</a>
        <a className="blog_button" href="#blog">BLOG</a>
        <a className="contact_button" href="#contact">CONTACT</a>
      </nav>
    );
  }
}
