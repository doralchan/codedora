import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Skills extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

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
