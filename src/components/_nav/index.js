import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ScrollTo from 'react-scroll-into-view';

import './style.scss';

class Nav extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const navClasses = classNames('nav', this.props.className);
    const navList = ['intro', 'skills', 'work', 'blog', 'contact'];

    return (
      <nav className={ navClasses }>
        <ul className='nav-list'>
          { navList.map(i => ( <li className='nav-list-item' key={i}><ScrollTo selector={`#${i}`}><h5>{ i.charAt(0).toUpperCase() + i.slice(1) }</h5></ScrollTo></li> ))}
        </ul>
      </nav>
    )
  }

}

export default Nav;
