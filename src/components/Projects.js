import React, { Component } from 'react';
import ProjectOne from '../images/project-1.png';
import ProjectTwo from '../images/project-2.png';
import ProjectThree from '../images/project-3.png';
import ProjectFour from '../images/project-4.png';
import ProjectFive from '../images/project-5.png';
import ProjectSix from '../images/project-6.png';
import ReactBlog from '../images/react-blog.png';
import ErikasPhotography from '../images/erika-photography.png';

export class Project extends Component {
  render() {
    return (
      <div className='container' id='projects'>
        <h1>Projects</h1>
        <div className='three-column-grid'>
          <div className='project-content'>
            <img src={ProjectOne} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Photography Portfolio</h3>
                <a
                  href='https://tristian-portfolio.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ProjectTwo} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Clothing Store</h3>
                <a
                  href='https://treezy-clothing-store.herokuapp.com/index.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ErikasPhotography} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Erika's Photography</h3>
                <a
                  href='https://youthful-goldberg-54a29a.netlify.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ReactBlog} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Treezy Blog</h3>
                <a
                  href='https://hungry-jones-162939.netlify.com/'
                  target='_bank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ProjectThree} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Cafe Website</h3>
                <a
                  href='https://treeyhouse-cafe.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ProjectFour} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Rosary Website</h3>
                <a
                  href='https://rosary-web-application.herokuapp.com/index.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ProjectFive} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Plumbing Website</h3>
                <a
                  href='https://optimistic-perlman-6f0c0c.netlify.com/'
                  target='_bank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <img src={ProjectSix} alt='' />

            <div className='overlay'>
              <div className='text'>
                <h3>Desk Setup</h3>
                <a
                  href='https://lattrell-sapon-desk-set-up.herokuapp.com/index.html'
                  target='_bank'
                  rel='noopener noreferrer'
                  id='visit-website'
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
