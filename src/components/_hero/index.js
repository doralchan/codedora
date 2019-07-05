import React, { Component } from 'react';
import classNames from 'classnames';

import Button from '../button';
import Nav from '../_nav';

import Profile1 from '../../assets/profile_1.svg';
import Profile2 from '../../assets/profile_2.svg';

import './style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <Nav className='hero-nav' />
        <div className='hero-profile-1'><img src={ Profile1 } alt='' /></div>
        <div className='hero-profile-2'><img src={ Profile2 } alt='' /></div>
        <div className='hero-block'>
          <h1 className='hero-block-title'>Hello There</h1>
          <div className='hero-block-desc'>
            I'm Dora, a product and systems designer located in San Francisco. I currently work at Square.
          </div>
          <div className='hero-block-ctas'>
            <Button className='block-ctas-btn'>Show Me</Button>
            <Button className='block-ctas-btn' btnType='secondary'>Contact Me</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
