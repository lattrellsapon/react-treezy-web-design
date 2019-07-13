import React, { Component } from 'react';
import Header from './components/Header';
import MainDisplayPicture from './components/MainDisplayPicture';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Services from './components/Services';
import Technical from './components/Technical';
import Footer from './components/Footer';

import uuid from 'uuid';

import ProjectOne from '../src/images/tristians-portfolio.png';
import ProjectTwo from '../src/images/erikas-portfolio.png';
import ProjectThree from '../src/images/vpdl-website.png';
import ProjectFour from '../src/images/budget-manager.png';
import ProjectFive from '../src/images/clothing-store.png';
import ProjectSix from '../src/images/cafe-website.png';

import './App.css';

export class App extends Component {
  state = {
    projects: [
      {
        id: uuid.v4(),
        projectName: `Tristian's Portfolio`,
        projectImage: ProjectOne,
        projectLink: 'https://tristian-portfolio.herokuapp.com/'
      },
      {
        id: uuid.v4(),
        projectName: `Erika's Portfolio`,
        projectImage: ProjectTwo,
        projectLink: 'https://youthful-goldberg-54a29a.netlify.com/'
      },
      {
        id: uuid.v4(),
        projectName: 'VPDL Website',
        projectImage: ProjectThree,
        projectLink: 'https://ecstatic-pike-093573.netlify.com/'
      },
      {
        id: uuid.v4(),
        projectName: 'Budget Manager App',
        projectImage: ProjectFour,
        projectLink: 'https://stupefied-curie-c68dad.netlify.com/'
      },
      {
        id: uuid.v4(),
        projectName: 'Clothing Store',
        projectImage: ProjectFive,
        projectLink: 'https://treezy-clothing-store.herokuapp.com/'
      },
      {
        id: uuid.v4(),
        projectName: 'Cafe Website',
        projectImage: ProjectSix,
        projectLink: 'https://treeyhouse-cafe.herokuapp.com/'
      }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <MainDisplayPicture />
        <AboutMe />
        <ContactMe />

        <Projects projects={this.state.projects} />

        <Services />
        <Technical />
        <Footer />
      </div>
    );
  }
}

export default App;
