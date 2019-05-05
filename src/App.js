import React, { Component } from 'react';
import Header from './components/Header';
import MainDisplayPicture from './components/MainDisplayPicture';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Services from './components/Services';
import Technical from './components/Technical';
import Footer from './components/Footer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainDisplayPicture />
        {/* <h1>About me | Contact me - grid</h1> */}
        <div className="container">
          <div className="two-column-grid">
            <AboutMe />
            <ContactMe />
          </div>
        </div>
        <Projects />
        <Services />
        <Technical />
        <Footer />
      </div>
    )
  }
}

export default App;
