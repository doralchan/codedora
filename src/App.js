import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main';

import Hero from './components/_hero';
import Skills from './components/_skills';
import Work from './components/_work';
import Blog from './components/_blog';
import Contact from './components/_contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Hero />
          <Skills />
          <Work />
          <Blog />
          <Contact />
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
