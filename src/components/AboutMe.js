import React, { Component } from 'react';
import Transcript from '../transcript/transcript.pdf';

export class AboutMe extends Component {
  state = {
    isHidden: true
  };

  showAboutMe = () => {
    this.setState({
      isHidden: false
    });
  };

  hideAboutMe = () => {
    this.setState({
      isHidden: true
    });
  };

  getStyle = () => {
    if (this.state.isHidden) {
      return {
        display: 'none'
      };
    } else {
      return {
        display: 'block'
      };
    }
  };

  hideButton = () => {
    if (!this.state.isHidden) {
      return {
        display: 'none'
      };
    } else {
      return {
        display: 'block'
      };
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={this.showAboutMe}
          id='show-and-hide-buttons'
          className='margin-top-bottom'
          style={this.hideButton()}
        >
          About Me
        </button>
        <div id='about-me' style={this.getStyle()}>
          <div className='text-center'>
            <h1>About Me</h1>
          </div>
          <p>
            My name is Lattrell Sapon and I am an aspiring web developer. I have
            a passion in creating web sites. The fact that I can bring ideas
            into real life application is amazing. I enjoy starting new projects
            as they each bring their own unique problems. In web developing, I
            have learnt that I am always going to be learning no matter how much
            I know already and that is the challenge I am always up for.
            Furthermore, you can view my{' '}
            <a
              href={Transcript}
              target='_blank'
              id='link'
              rel='noopener noreferrer'
            >
              University Transcript
            </a>
            .
          </p>
          <div className='text-center'>
            <button
              onClick={this.hideAboutMe}
              id='show-and-hide-buttons'
              className='margin-top-bottom'
            >
              Show Less
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
