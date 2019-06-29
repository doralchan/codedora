import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Intro extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

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
