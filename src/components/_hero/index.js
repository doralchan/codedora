import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <h1>Why, Hello</h1>
        <h2>Why, Hello</h2>
        <h3>Why, Hello</h3>
        <h4>Why, Hello</h4>
        <h5>Why, Hello</h5>
        <p>I'm Dora.</p>
      </div>
    )
  }
}

export default Hero;
