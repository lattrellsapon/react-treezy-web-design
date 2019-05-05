import React, { Component } from 'react';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import Javascript from '../images/javascript.png';
import NodeJs from '../images/nodejs.png';
import ReactFramework from '../images/react.png';
import PHP from '../images/php.png';

export class Technical extends Component {
  render() {
    return (
      <div className="container" id="technical-skills">
        <h1>Technical Skills</h1>
        <div className="three-column-grid">
            <div className="technical-content">
                <h3>HTML</h3>
                <img src={HTML} alt=""/>
            </div>
            <div className="technical-content">
                <h3>CSS</h3>
                <img src={CSS} alt=""/>
            </div>
            <div className="technical-content">
                <h3>JavaScript</h3>
                <img src={Javascript} alt=""/>
            </div>
            <div className="technical-content">
                <h3>NodeJs</h3>
                <img src={NodeJs} alt=""/>
            </div>
            <div className="technical-content">
                <h3>React</h3>
                <img src={ReactFramework} alt=""/>
            </div>
            <div className="technical-content">
                <h3>PHP</h3>
                <img src={PHP} alt=""/>
            </div>
        </div>
      </div>
    )
  }
}

export default Technical;
