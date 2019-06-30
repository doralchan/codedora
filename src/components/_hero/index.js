import React, { Component } from 'react';
import classNames from 'classnames';

import Button from '../button';

import './style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <h1>Why, Hello</h1>
        <div className='margin-bottom-24px'>
          <p>I'm Dora, a product and systems designer located in San Francisco. I also dabble in front-end.</p>
        </div>
        <div>
          <Button className='margin-right-8px'>Show Me</Button>
          <Button btnType='secondary' className='margin-left-8px'>Contact Me</Button>
        </div>
      </div>
    )
  }
}

export default Hero;
