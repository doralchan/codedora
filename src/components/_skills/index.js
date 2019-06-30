import React, { Component } from 'react';
import classNames from 'classnames';

import Tabs from '../tabs';

import './style.scss';

class Skills extends Component {
  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div id='skills' className={ skillsClasses }>
        TBD
      </div>
    )
  }
}

export default Skills;
