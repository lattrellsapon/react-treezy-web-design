import React, { Component } from 'react';
import Transcript from '../transcript/transcript.pdf';

export class ContactMe extends Component {
  render() {
    return (
      <div id="contact-me">
        <h1>Contact Me</h1>
        <p>
        You can contact me at <a href="tel:0211775895" id="link">0211775895</a>. Moreover, you
        can also get in contact with me via email at <a href="mailto:lattrellsapon@gmail.com" id="link" >lattrellsapon@gmail.com</a>.
        </p>
        <br/>
        <p>You can also view my <a href="https://github.com/lattrellsapon" target="_blank" id="link" rel="noopener noreferrer">Github Account</a> and <a href="https://www.linkedin.com/in/lattrell-sapon-772b49143/" target="_blank" id="link" rel="noopener noreferrer">Linked In Account</a>. Furthermore, you can view my <a href={Transcript} target="_blank" id="link" rel="noopener noreferrer">University Transcript</a>.</p>
      </div>
    )
  }
}

export default ContactMe;
