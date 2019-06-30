import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Hero extends Component {
  render() {
    const heroClasses = classNames('hero', this.props.className);

    return (
      <div className={ heroClasses }>
        <h1>Why, Hello</h1>
        <p>
          I'm Dora, a product and systems designer located in San Francisco. I also dabble in front-end.
        </p>
      </div>
    )
  }
}

export default Hero;
