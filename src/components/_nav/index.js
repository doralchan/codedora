import React, { Component } from 'react';
import classNames from 'classnames';

import ScrollTo from 'react-scroll-into-view';

import './style.scss';

class Nav extends Component {
  render() {
    const navClasses = classNames('nav', this.props.className);
    const navList = ['skills', 'work', 'blog', 'contact'];

    return (
      <nav className={ navClasses }>
        <ul className='nav-list'>
          { navList.map(i => ( <li className='nav-list-item' key={i}><ScrollTo selector={`#${i}`}><h6>{ i.charAt(0).toUpperCase() + i.slice(1) }</h6></ScrollTo></li> ))}
        </ul>
      </nav>
    )
  }

}

export default Nav;
