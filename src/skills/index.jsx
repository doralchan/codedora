import React, { Component } from 'react';
import { Heading, Text, Typeface, Image } from 'spectacle';
import './styles.css';

import IconCircle from '../assets/icons/icon-circle.svg';
import IconTriangle from '../assets/icons/icon-triangle.svg';
import IconSquare from '../assets/icons/icon-square.svg';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Heading size={ 4 }>i'm dora</Heading>
        <Typeface weight={ 300 }>
          <Text textSize={ 22 } lineHeight={ 1.5 } margin={ 10 }>
            A product designer obsessed with complex problems<br/>
            and simple, elegant solutions. I am passionate about
          </Text>
        </Typeface>
        <div className='skill-list'>
          <div className='skill-item'>
            <Image src={ IconCircle } height={ 65 } />
            <Text textSize={ 26 } lineHeight={ 0.4 } textColor='senary'>ux & ui</Text>
          </div>
          <div className='skill-item'>
            <Image src={ IconTriangle } height={ 65 } />
            <Text textSize={ 26 } lineHeight={ 0.4 } textColor='tertiary'>front-end</Text>
          </div>
          <div className='skill-item'>
            <Image src={ IconSquare } height={ 65 } />
            <Text textSize={ 26 } lineHeight={ 0.4 } textColor='quinary'>systems</Text>
          </div>
        </div>
      </div>
    );
  }
}
