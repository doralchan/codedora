import React, { Component } from 'react';
import {
  Appear, BlockQuote, Code, Fill, Fit, Heading, Image, Layout,
  ListItem, List, Quote, Text, Typeface
} from 'spectacle';
import './styles.css';

import IconCircle from '../assets/icons/icon-circle.svg';
import IconTriangle from '../assets/icons/icon-triangle.svg';
import IconSquare from '../assets/icons/icon-square.svg';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Heading size={ 3 }>what i do</Heading>
        <Typeface weight={ 300 }>
          <Text textSize={ 22 } lineHeight={ 1.4 } margin={ 10 }>
            I'm a senior product designer with a passion for<br/>
            elegant, simple solutions achieved through
          </Text>
        </Typeface>
        <div className='skill-list'>
          <div className='skill-item'>
            <Image src={ IconCircle } height={ 45 } />
            <Text textSize={ 26 } lineHeight={ 0.4 } textColor='quaternary'>ux & ui</Text>
          </div>
          <div className='skill-item'>
            <Image src={ IconTriangle } height={ 45 } />
            <Text textSize={ 26 } lineHeight={ 0.4 } textColor='tertiary'>front-end</Text>
          </div>
          <div className='skill-item'>
            <Image src={ IconSquare } height={ 45 } />
            <Text textSize={ 26 } lineHeight={ 0.4 } textColor='quinary'>systems</Text>
          </div>
        </div>
      </div>
    );
  }
}
