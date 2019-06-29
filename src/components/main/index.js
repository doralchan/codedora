import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Main extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

  render() {
    const mainClasses = classNames('main', this.props.className);

    return (
      <div className={ mainClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Main;
