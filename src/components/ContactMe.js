import React, { Component } from 'react';
import Transcript from '../transcript/transcript.pdf';

export class ContactMe extends Component {
  render() {
    return (
      <div id='contact-me'>
        <h1>Get in touch</h1>

        <div className='flex-container-row margin-top-bottom'>
          <a href='tel:0211775895' id='contact-details'>
            <i class='fas fa-phone-volume' />
          </a>
          <a href='mailto:lattrellsapon@gmail.com' id='contact-details'>
            <i class='fas fa-envelope' />
          </a>
          <a
            href='https://github.com/lattrellsapon'
            target='_blank'
            rel='noopener noreferrer'
            id='contact-details'
          >
            <i class='fab fa-github' />
          </a>
          <a
            href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
            target='_blank'
            rel='noopener noreferrer'
            id='contact-details'
          >
            <i class='fab fa-linkedin-in' />
          </a>
          <a
            href='https://www.instagram.com/lattrellwebdesign/'
            target='_blank'
            rel='noopener noreferrer'
            id='contact-details'
          >
            <i class='fab fa-instagram' />
          </a>
        </div>
      </div>
    );
  }
}

export default ContactMe;
