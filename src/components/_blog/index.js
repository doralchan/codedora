import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Blog extends Component {
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
