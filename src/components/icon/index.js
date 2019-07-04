import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Icon extends Component {
  static propTypes = {
    iconSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    iconSrc: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    iconSize: 'xs'
  }

  render() {
    const iconClasses = classNames('icon', 'icon-' + this.props.iconSize, this.props.className);

    return (
      <div className={ iconClasses }>
        <img src={ this.props.iconSrc } alt='' />
      </div>
    )
  }
}

export default Icon;
