import React, { Component } from 'react';
import classNames from 'classnames';

import Button from '../button';

import './style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <h1 className='hero-title'>Why, Hello</h1>
        <div className='hero-desc'>
          <p>
            I'm Dora, a product and systems designer located in San Francisco. I also dabble in a little bit of front-end.
          </p>
        </div>
        <div className='hero-ctas'>
          <Button className='margin-right-8px'>Show Me</Button>
          <Button btnType='secondary' className='margin-left-8px'>Contact Me</Button>
        </div>
      </div>
    )
  }
}

export default Hero;
