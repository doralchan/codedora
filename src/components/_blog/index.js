import React, { Component } from 'react';
import classNames from 'classnames';

import Post from '../post';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <Post title='Blog Entry 1'>
          Title
        </Post>
        <Post title='Blog Entry 2'>
          Title
        </Post>
        <Post title='Blog Entry 3'>
          Title
        </Post>
        <Post title='Blog Entry 4'>
          Title
        </Post>
      </div>
    )
  }
}

export default Blog;
