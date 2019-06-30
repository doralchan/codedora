import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Post extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string,
    title: PropTypes.string
  }

  render() {
    const postClasses = classNames('post', this.props.className);

    return (
      <div className={ postClasses }>
        <h4 className='post-title'>{ this.props.title }</h4>
        <div className='post-image'>{ this.props.children }</div>
      </div>
    )
  }
}

export default Post;
