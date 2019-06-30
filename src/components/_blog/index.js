import React, { Component } from 'react';
import classNames from 'classnames';

import Post from '../post';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <h4 className='margin-bottom-8px'>Blog</h4>
        <div>
          <Post title=''>TBD</Post>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </div>
      </div>
    )
  }
}

export default Blog;
