import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Intro from './intro';
import Skills from './skills';
import Work from './work';
import Chat from './projects/chat';

const theme = createTheme({
  primary: '#FFFFFF',
  secondary: '#2B2D42',
  tertiary: '#820263'
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
        <Slide bgColor='secondary'><Skills /></Slide>
        <Slide><Work /></Slide>
      </Deck>
    );
  }
}

export default App;
