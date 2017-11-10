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

import MapGarn from '../assets/bg/mapping-garnishment.svg';
import MapChat from '../assets/bg/mapping-chat.svg';
import MapGuide from '../assets/bg/mapping-guide.svg';

import ArtifactGarn1 from '../assets/bg/artifact-garn-1.png';
import ArtifactGarn2 from '../assets/bg/artifact-garn-2.png';
import ArtifactChat from '../assets/bg/artifact-chat.png';
import ArtifactGuide from '../assets/bg/artifact-guide.png';

import MockGarn1 from '../assets/bg/mock-garn-1.png';
import MockGarn2 from '../assets/bg/mock-garn-2.png';
import MockGarn3 from '../assets/bg/mock-garn-3.png';
import MockGarn4 from '../assets/bg/mock-garn-4.png';

import MockChat1 from '../assets/bg/mock-chat-1.png';
import MockChat2 from '../assets/bg/mock-chat-2.png';
import MockChat3 from '../assets/bg/mock-chat-3.png';
import MockChat4 from '../assets/bg/mock-chat-4.png';

import MockGuide1 from '../assets/bg/mock-guide-1.png';
import MockGuide2 from '../assets/bg/mock-guide-2.png';
import MockGuide3 from '../assets/bg/mock-guide-3.png';
import MockGuide4 from '../assets/bg/mock-guide-4.png';

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
        progress='none'
        controls={ false }>

        <Slide><Intro /></Slide>
        <Slide bgImage={ BgSkill }><Skills /></Slide>
        <Slide bgImage={ BgWork }><Work /></Slide>

        <Slide bgColor='senary'><Garnishments.Title /></Slide>
        <Slide><Garnishments.Background /></Slide>
        <Slide bgImage={ ArtifactGarn1 } />
        <Slide bgImage={ ArtifactGarn2 } />
        <Slide bgImage={ MapGarn } />
        <Slide><Garnishments.Concept /></Slide>
        <Slide bgImage={ MockGarn1 } />
        <Slide bgImage={ MockGarn2 } />
        <Slide bgImage={ MockGarn3 } />
        <Slide bgImage={ MockGarn4 } />
        <Slide><Garnishments.Learnings /></Slide>

        <Slide bgColor='tertiary'><Chat.Title /></Slide>
        <Slide><Chat.Background /></Slide>
        <Slide bgImage={ MapChat } />
        <Slide bgImage={ ArtifactChat } />
        <Slide><Chat.Concept /></Slide>
        <Slide bgImage={ MockChat1 } />
        <Slide bgImage={ MockChat2 } />
        <Slide bgImage={ MockChat3 } />
        <Slide bgImage={ MockChat4 } />
        <Slide><Chat.Learnings /></Slide>

        <Slide bgColor='quinary'><Guide.Title /></Slide>
        <Slide><Guide.Background /></Slide>
        <Slide bgImage={ MapGuide } />
        <Slide bgImage={ ArtifactGuide } />
        <Slide><Guide.Concept /></Slide>
        <Slide bgImage={ MockGuide1 } />
        <Slide bgImage={ MockGuide2 } />
        <Slide bgImage={ MockGuide3 } />
        <Slide bgImage={ MockGuide4 } />
        <Slide><Guide.Learnings /></Slide>
      </Deck>
    );
  }
}

export default Home
