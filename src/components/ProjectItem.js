import React, { Component } from 'react';

export class ProjectItem extends Component {
  render() {
    return (
      <div>
        <div className='margin-top-bottom-2'>
          <a
            href={this.props.project.projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='view-project-button'
          >
            {this.props.project.projectName}
          </a>
        </div>

        <img src={this.props.project.projectImage} alt='' />
      </div>
    );
  }
}

export default ProjectItem;
