import React, { Component } from 'react';
import ProjectOne from '../images/project-1.png';
import ProjectTwo from '../images/project-2.png';
import ProjectThree from '../images/project-3.png';
import ProjectFour from '../images/project-4.png';
import ProjectFive from '../images/project-5.png';
import ProjectSix from '../images/project-6.png';


export class Project extends Component {
  render() {
    return (
      <div className="container" id="projects">
        <h1>Projects</h1>
        <div className="three-column-grid">
          <div className="project-content">
            <h3>Photography Portfolio</h3>
            <a href="https://tristian-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={ProjectOne} alt=""/>
            </a>
          </div>
          <div className="project-content">
            <h3>Clothing Store</h3>
            <a href="https://treezy-clothing-store.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
              <img src={ProjectTwo} alt=""/>
            </a>
          </div>
          <div className="project-content">
            <h3>Cafe Website</h3>
            <a href="https://treeyhouse-cafe.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={ProjectThree} alt=""/>
            </a>
          </div>
          <div className="project-content">
            <h3>Rosary Website</h3>
            <a href="https://rosary-web-application.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
              <img src={ProjectFour} alt=""/>
            </a>
          </div>
          <div className="project-content">
            <h3>Guessing Game</h3>
            <a href="https://safe-lowlands-88829.herokuapp.com/index.html" target="_bank" rel="noopener noreferrer">
              <img src={ProjectFive} alt=""/>
            </a>
          </div>
          <div className="project-content">
            <h3>Desk Set-Up</h3>
            <a href="https://lattrell-sapon-desk-set-up.herokuapp.com/index.html" target="_bank" rel="noopener noreferrer">
              <img src={ProjectSix} alt=""/>
            </a>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Project
