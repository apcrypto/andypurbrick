import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import Media from 'react-media'


export default class Contact extends Component {


  render() {
    return (
      <ScrollableAnchor id={"contact"}>
        <div className="contact">

        <Media query="(max-width: 820px)">
        {matches =>
          matches ? (
            <h1 className="contact_header_2">CONTACT</h1>
          ) : (
            <h1 className="contact_header">CONTACT</h1>
          )
        }
        </Media>

          <p className="contact_underline">___</p>

          <Media query="(max-width: 820px)">
          {matches =>
            matches ? (
          <section className="contact_links_2">
          <a className="contact_github_2" target="_blank" href="https://github.com/apcrypto">Github</a>
          <a className="contact_linkedin_2" target="_blank" href="https://www.linkedin.com/in/andypurbrick/">Linkedin</a>
          <a className="contact_medium_2" target="_blank" href="https://medium.com/@andypurbrick">Medium</a>
          </section>
        ):(
          <section className="contact_links">
          <a className="contact_github" target="_blank" href="https://github.com/apcrypto">Github</a>
          <a className="contact_linkedin" target="_blank" href="https://www.linkedin.com/in/andypurbrick/">Linkedin</a>
          <a className="contact_medium" target="_blank" href="https://medium.com/@andypurbrick">Medium</a>
          </section>
        )
      }
      </Media>
        </div>
      </ScrollableAnchor>
    );
  }
}
