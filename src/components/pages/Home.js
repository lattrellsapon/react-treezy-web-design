import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainDP from '../../images/main-dp.png';
import ContactDetails from './ContactDetails';

export class Home extends Component {
  render() {
    return (
      <div className='container mt-30'>
        <div className='home-grid'>
          <div>
            <img src={MainDP} alt='Lattrell Sapon' />
          </div>
          <div className='about-me-body'>
            <div className='name-header'>
              <h1 className='letter-space'>Lattrell Sapon</h1>
            </div>
            <div className='about-me-content'>
              <p>
                Hi there, welcome to my portfolio, my name is Lattrell Sapon. I
                am a software developer graduate from AUT (New Zealand
                University). My passion for web development did not start until
                my last year in my computer science degree when I took a web
                development paper. I find it fascinating that I can develop any
                ideas and turn them into reality. As of right now, I am mainly
                focused on front-end developing. My goal is to be a full-stack
                web developer.
              </p>
              <p className='mt-30'>
                To learn more about my experiences, please see my{' '}
                <Link to='projects' className='treezy-green'>
                  projects
                </Link>
                .
              </p>
              <p className='mt-30'>
                To learn more about how I can help you, please see my{' '}
                <Link to='services' className='treezy-green'>
                  services
                </Link>
                .
              </p>
              <p className='mt-30'>
                To learn more about the skills that I have and comfortable in,
                please view my{' '}
                <Link to='skills' className='treezy-green'>
                  skills
                </Link>
                .
              </p>
              <div className='mt-30'>
                <ContactDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
