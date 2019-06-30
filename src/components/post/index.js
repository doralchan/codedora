import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Post extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

  render() {
    const postClasses = classNames('post', this.props.className);

    return (
      <div className={ postClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Post;
