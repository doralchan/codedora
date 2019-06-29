import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Work extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

  render() {
    const workClasses = classNames('work', this.props.className);

    return (
      <div className={ workClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Work;
