import React, { Component } from 'react';
import Transcript from '../transcript/transcript.pdf';

export class ContactMe extends Component {
  render() {
    return (
      <div id='contact-me'>
        <h1>Contact Me</h1>

        <ul>
          <li>
            <i class='fas fa-phone-volume' />{': '}
            <a href='tel:0211775895' id='link'>
              0211775895
            </a>
          </li>
          <li>
            <i class='fas fa-envelope' />{': '}
            <a href='mailto:lattrellsapon@gmail.com' id='link'>
              lattrellsapon@gmail.com
            </a>
          </li>
          <li>
            <i class='fab fa-github' />{': '}
            <a
              href='https://github.com/lattrellsapon'
              target='_blank'
              id='link'
              rel='noopener noreferrer'
            >
              lattrellsapon
            </a>
          </li>
          <li>
            <i class='fab fa-linkedin-in' />{': '}
            <a
              href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
              target='_blank'
              id='link'
              rel='noopener noreferrer'
            >
              Lattrell Sapon
            </a>
          </li>
          <li>
            <i class='fab fa-instagram' />{': '}
            <a
              href='https://www.instagram.com/lattrellwebdesign/'
              target='_blank'
              id='link'
              rel='noopener noreferrer'
            >
              @lattrellwebdesign
            </a>
          </li>
        </ul>

        {/* <p>
          <i class='fas fa-phone' />{' '}
          <a href='tel:0211775895' id='link'>
            0211775895
          </a>{' '}
          <i class='fas fa-envelope' />
          <a href='mailto:lattrellsapon@gmail.com' id='link'>
            lattrellsapon@gmail.com
          </a>
          .
        </p> */}
        {/* <br />
        <p>
          You can also view my{' '}
          <a
            href='https://github.com/lattrellsapon'
            target='_blank'
            id='link'
            rel='noopener noreferrer'
          >
            Github Account
          </a>{' '}
          and{' '}
          <a
            href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
            target='_blank'
            id='link'
            rel='noopener noreferrer'
          >
            Linked In Account
          </a>
          . Furthermore, you can view my{' '}
          <a
            href={Transcript}
            target='_blank'
            id='link'
            rel='noopener noreferrer'
          >
            University Transcript
          </a>
          .
        </p> */}
      </div>
    );
  }
}

export default ContactMe;
