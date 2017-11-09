import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Intro from '../intro';
import Skills from '../skills';
import Work from '../work';

import Garnishments from '../projects/garnishments';
import Chat from '../projects/chat';
import Guide from '../projects/guide';

import BgSkill from '../assets/bg/bg-skill.svg';
import BgWork from '../assets/bg/bg-work.svg';

import './styles.css';

const theme = createTheme({
  primary: '#FFFFFF',
  secondary: '#2B2D42',
  tertiary: '#820263',
  quarternary: '#F9F9F9',
  quinary: '#EF5D60',
  senary: '#41D3BD'
}, {
  primary: {
    name: 'Montserrat',
    googleFont: true,
    styles: [ '300', '400', '600' ]
  }
});

class Home extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']}
        theme={ theme }
        contentHeight={ 1000 }
        progress='pacman'
        controls={ false }>

        <Slide><Intro /></Slide>
        <Slide bgImage={ BgSkill } align='center flex-end'><Skills /></Slide>
        <Slide bgImage={ BgWork }><Work /></Slide>

        <Slide bgColor='senary'><Garnishments.Title /></Slide>
        <Slide><Garnishments.Background /></Slide>
        <Slide><Garnishments.Concept /></Slide>
        <Slide><Garnishments.Learnings /></Slide>

        <Slide bgColor='tertiary'><Chat.Title /></Slide>
        <Slide><Chat.Background /></Slide>
        <Slide><Chat.Concept /></Slide>
        <Slide><Chat.Learnings /></Slide>

        <Slide bgColor='quinary'><Guide.Title /></Slide>
        <Slide><Guide.Background /></Slide>
        <Slide><Guide.Concept /></Slide>
        <Slide><Guide.Learnings /></Slide>
      </Deck>
    );
  }
}

export default Home
