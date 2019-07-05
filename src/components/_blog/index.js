import React, { Component } from 'react';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Post from '../post';
import Profile4 from '../../assets/profile_4.svg';
import Coffee from '../../assets/spot-illo-coffee.svg';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <div className='blog-profile'><img src={ Profile4 } alt='' /></div>
        <Fade bottom>
          <Post title='Blog Entry 1'>
            Coming Soon
          </Post>
          <Post title='Blog Entry 2'>
            Coming Soon
          </Post>
        </Fade>
        <Fade bottom delay={ 400 }>  
          <Post title='Blog Entry 3'>
            Coming Soon
          </Post>
          <Post title='Blog Entry 4'>
            Coming Soon
          </Post>
        </Fade>
        <div className='blog-coffee'><img src={ Coffee } alt='' /></div>
      </div>
    )
  }
}

export default Blog;
