import React, { Component } from 'react';

export class ContactDetails extends Component {
  render() {
    return (
      <div>
        <div className='flex-container-contacts mt-30'>
          <div>
            <a href='tel:0211775895' id='contact-details'>
              <i class='fas fa-phone-volume' />
            </a>
          </div>
          <div>
            <a href='mailto:lattrellsapon@gmail.com' id='contact-details'>
              <i class='fas fa-envelope' />
            </a>
          </div>
          <div>
            <a
              href='https://github.com/lattrellsapon'
              target='_blank'
              rel='noopener noreferrer'
              id='contact-details'
            >
              <i class='fab fa-github' />
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
              target='_blank'
              rel='noopener noreferrer'
              id='contact-details'
            >
              <i class='fab fa-linkedin-in' />
            </a>
          </div>
          <div>
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
      </div>
    );
  }
}

export default ContactDetails;
