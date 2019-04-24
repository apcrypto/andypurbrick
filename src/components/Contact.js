import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import axios from 'axios';

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "SEND MESSAGE"
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("API_URI", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  render() {
    return (
      <ScrollableAnchor id={"contact"}>
        <div className="contact">
          <h1 className="contact_header">CONTACT</h1>
          <p className="contact_underline">___</p>
          <section className="form">
          <form className="contact-form" onSubmit={e => this.formSubmit(e)}>

            <textarea
              onChange={e => this.setState({ message: e.target.value })}
              name="message"
              className="message-input"
              type="text"
              placeholder="Please write your message here"
              value={this.state.message}
              required
            />

            <input
              onChange={e => this.setState({ name: e.target.value })}
              name="name"
              className="message-name"
              type="text"
              placeholder="Your Name"
              value={this.state.name}
            />

            <input
              onChange={e => this.setState({ email: e.target.value })}
              name="email"
              className="message-email"
              type="email"
              placeholder="your@email.com"
              required
              value={this.state.email}
            />

            <div className="button--container">
              <button type="submit" className="submit_button">
                {this.state.buttonText}
              </button>
            </div>
          </form>
          </section>
        </div>
      </ScrollableAnchor>
    );
  }
}
