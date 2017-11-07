import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Intro from './intro';
import Skills from './skills';
import Work from './work';
import Chat from './projects/chat';

import BgSkill from './assets/bg/bg-skill.svg';
import BgWork from './assets/bg/bg-work.svg';

const theme = createTheme({
  primary: '#FFFFFF',
  secondary: '#2B2D42',
  tertiary: '#820263',
  quaternary: '#41D3BD',
  quinary: '#EF5D60'
}, {
  primary: {
    name: 'Montserrat',
    googleFont: true,
    styles: [ '300', '400', '600' ]
  }
});

class App extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']}
        theme={ theme }
        contentHeight={ 1000 }
        progress='pacman'
        controls={ false }>
        <Slide><Intro /></Slide>
        <Slide bgImage={ BgSkill } align='center flex-end'>
          <Skills />
        </Slide>
        <Slide bgImage={ BgWork }><Work /></Slide>
      </Deck>
    );
  }
}

export default App;
