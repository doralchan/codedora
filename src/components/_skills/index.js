import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Skills extends Component {
  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div className={ skillsClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Skills;
