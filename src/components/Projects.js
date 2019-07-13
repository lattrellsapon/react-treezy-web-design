import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export class Project extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='margin-top-bottom'>Projects</h1>
        <div className='margin-top-bottom'>
          <div className='three-column-grid'>
            {this.props.projects.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
