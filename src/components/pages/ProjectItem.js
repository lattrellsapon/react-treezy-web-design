import React, { Component } from 'react';

export class ProjectItem extends Component {
  render() {
    const { projectLink, projectName, projectImage } = this.props.project;

    return (
      <a
        href={projectLink}
        target='_blank'
        id='project-links'
        rel='noopener noreferrer'
      >
        <div className='project-item'>
          <img src={projectImage} alt='' />
          <div className='overlay'>
            <div className='text'>
              <h3>{projectName}</h3>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default ProjectItem;
