import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export class Projects extends Component {
  render() {
    return (
      <div className='container mt-30'>
        <div className='project-header'>
          <div className='text-center'>
            <h1 className='letter-space'>Projects</h1>
          </div>
          <div className='project-blurb mt-30'>
            <p>
              The following projects that you are about to see are projects that
              were all made by myself. These projects are for my family and
              friends who also has a passion for what they do and are in need of
              a platform on the web. Some of the projects I made to hone my
              skills in web developing.
            </p>
          </div>
          <div className='project-container mt-30'>
            <div className='three-grid'>
              {this.props.projects.map(project => (
                <ProjectItem project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
