import React, { Component } from 'react';
import Transcript from '../transcript/transcript.pdf';

export class AboutMe extends Component {
  render() {
    return (
      <div id='about-me'>
        <h1>About Me</h1>
        <p>
          My name is Lattrell Sapon and I am an aspiring web developer. I have a
          passion in creating web sites. The fact that I can bring ideas into
          real life application is amazing. I enjoy starting new projects as
          they each bring their own unique problems. In web developing, I have
          learnt that I am always going to be learning no matter how much I know
          already and that is the challenge I am always up for. Furthermore, you
          can view my{' '}
          <a
            href={Transcript}
            target='_blank'
            id='link'
            rel='noopener noreferrer'
          >
            University Transcript
          </a>
        </p>
      </div>
    );
  }
}

export default AboutMe;
