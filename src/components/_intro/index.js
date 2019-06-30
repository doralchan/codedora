import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Intro extends Component {
  render() {
    const introClasses = classNames('intro', this.props.className);

    return (
      <div className={ introClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Intro;
