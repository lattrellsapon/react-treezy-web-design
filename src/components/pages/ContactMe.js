import React, { Component } from 'react';

export class ContactMe extends Component {
  render() {
    return (
      <div className='container mt-30'>
        <div className='contact-me-container'>
          <div className='contact-me-header text-center'>
            <h1 className='letter-space'>Get in touch</h1>
            <p>Let's work together and create something beautiful.</p>
          </div>
          <div className='contact-card mt-30 text-center'>
            <div className='cursive'>
              <h1>L.S</h1>
            </div>
            <div className='contact-name'>
              <h3>Lattrell Sapon</h3>
              <p className='letter-space'>Web Developer</p>
            </div>
            <div className='contact-number mtb-5'>
              <a href='tel:0211775895'>0211775895</a>
            </div>
            <div className='contact-email mtb-5'>
              <a href='mailto:lattrellsapon@gmail.com'>
                lattrellsapon@gmail.com
              </a>
            </div>
          </div>
          <div className='contact-links mt-30 text-center'>
            <div className='flex-container'>
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
              <div>
                <a
                  href='https://www.facebook.com/Treezy-Web-Design-374311436556053/?modal=admin_todo_tour'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='contact-details'
                >
                  <i class='fab fa-facebook-square' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
