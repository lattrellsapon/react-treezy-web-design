import React, { Component } from 'react';

export class ProjectItem extends Component {
  render() {
    const { projectLink, projectName, projectImage } = this.props.project;

    return (
      <div className='project-item'>
        <div className='text-center'>
          <h3>{projectName}</h3>
        </div>
        <div className='mt-30'>
          <a
            href={projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='view-project-button letter-space'
          >
            <img src={projectImage} alt={projectName} />
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
