import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Branding from './components/layout/Branding';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';
import ContactMe from './components/pages/ContactMe';

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
      <Router>
        <React.Fragment>
          <Navbar />
          <Branding />
          <Route exact path='/' component={Home} />
          <Route
            path='/projects'
            render={props => (
              <Projects {...props} projects={this.state.projects} />
            )}
          />
          <Route exact path='/services' component={Services} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/contactme' component={ContactMe} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
