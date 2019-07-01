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
        <img src={ Profile1 } className='hero-profile-1' alt='' />
        <img src={ Profile2 } className='hero-profile-2' alt='' />
        <Nav className='hero-nav' />
        <div className='hero-block'>
          <h1 className='hero-block-title'>Why, Hello</h1>
          <div className='hero-block-desc'>
            I'm Dora, a product and systems designer located in San Francisco. I also dabble in front-end cause I love it.
          </div>
          <div className='hero-block-ctas'>
            <Button className='block-ctas-btn'>Show Me</Button>
            <Button btnType='secondary' className='block-ctas-btn'>Contact Me</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
