import React, { Component } from 'react';
import { Heading } from 'spectacle';
import './styles.css';

export default class Intro extends Component {
  render() {
    return (
      <div className='circle'>
        <div className='circle-inner'>
          <div className='circle-content'>
            <Heading size={ 2 } textColor='secondary'>hello</Heading>
            <Heading size={ 1 } lineHeight={ 0.8 } textColor='tertiary'>+</Heading>
          </div>
        </div>
      </div>
    );
  }
}
