import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Button extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    btnType: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.node,
    className: PropTypes.string,
    blank: PropTypes.bool
  }

  static defaultProps = {
    to: '',
    btnType: 'primary',
    blank: true
  }

  render() {
    const btnClasses = classNames(
      'btn',
      'btn-' + this.props.btnType,
      this.props.className
    );

    return (
      <a
        href={ this.props.to }
        className={ btnClasses }
        target={ this.props.blank === true ? '_blank' : null }
        rel='noopener noreferrer' alt=''
      >
        <strong>{ this.props.children }</strong>
      </a>
    )
  }
}

export default Button;
