import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
  }

  static defaultProps = {
    to: ''
  }

  render() {
    const linkClasses = classNames('link', this.props.className);

    return (
      <a href={ this.props.to } className={ linkClasses } alt=''>
        { this.props.children }
      </a>
    )
  }
}

export default Link;
