import React, { Component } from 'react';
import classNames from 'classnames';

import Post from '../post';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <div className='blog-posts'>
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
        <div className='blog-blurb'>
          I'm not much of a writer.
        </div>
      </div>
    )
  }
}

export default Blog;
