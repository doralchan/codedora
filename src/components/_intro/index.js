import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Intro extends Component {
  render() {
    const introClasses = classNames('intro', this.props.className);

    return (
      <div id='intro' className={ introClasses }>
        <h4>A Quick Intro</h4>
        <div className='margin-top-8px'>
          <p>
            I wouldn't consider myself an expert in much besides drinking iced coffee. What I am is an enthusiastic tinkerer with a good chunk of design experience. I experiment with kooky theories and obsessively commit to projects. I succeed. I fail. The point is, I learn, and learn quickly.
          </p>
          <p>
            The further I dive into user experience and interfaces, the more I recognize information architecture as the groundwork of design. Content is contained and delivered when applicable. Too much of it at once and it becomes indecipherable.
          </p>
        </div>
      </div>
    )
  }
}

export default Intro;
