import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Blog extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div className={ blogClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Blog;
