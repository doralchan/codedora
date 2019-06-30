import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Image extends Component {
  static propTypes = {
    imgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    imgSize: 'xs'
  }

  render() {
    const imgClasses = classNames('img', 'img-' + this.props.imgSize, this.props.className);

    return (
      <div className={ imgClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Image;
