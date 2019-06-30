import React, { Component } from 'react';
import classNames from 'classnames';

import Button from '../button';
import Nav from '../_nav';

import './style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <Nav className='hero-nav' />
        <div className='hero-block'>
          <h1 className='hero-block-title'>Why, Hello</h1>
          <div className='hero-block-desc'>
            <p>
              I'm Dora, a product and systems designer located in San Francisco. I also dabble in a little bit of front-end.
            </p>
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
