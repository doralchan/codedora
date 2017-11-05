import React, { Component } from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import createTheme from "spectacle/lib/themes/default";

import './styles.css';

const theme = createTheme({
  primary: '#820263',
  secondary: '#FFFFFF'
}, {
  primary: { name: 'Montserrat', googleFont: true, styles: [ '300', '400', '600' ] },
  secondary: 'Helvetica'
});

class Home extends Component {

  render() {
    return (
      <div id='home' className='home'>
        <Deck transition={['slide']} theme={ theme }>
          <Slide>
            <Heading size={1} lineHeight={1} textColor='secondary'>
              Hello
            </Heading>
            <Text textColor='#FFFFFF'>
              I'm Dora.
            </Text>
          </Slide>
        </Deck>
      </div>
    );
  }
}

export default Home
