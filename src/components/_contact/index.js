import React, { Component } from 'react';
import classNames from 'classnames';

import Link from '../link';
import SpotCoffee from '../../assets/spot-illo-coffee.svg';

import './style.scss';

class Contact extends Component {
  render() {
    const contactClasses = classNames('contact', this.props.className);

    return (
      <div id='contact' className={ contactClasses }>
        <img src={ SpotCoffee } className='contact-coffee' alt='' />
        <h4 className='contact-title'>Contact</h4>
        <div className='contact-blurb'>
          <p>
            If you'd like to chat or see more projects, feel free to contact me through any of the methods below. I'm usually available for coffee or tacos.
          </p>
        </div>
        <ul className='contact-list'>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>Dribble</Link></li>
          <li><Link to=''>Pinterest</Link></li>
          <li><Link to=''>Twitter</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
          <li><Link to=''>LinkedIn</Link></li>
        </ul>
      </div>
    )
  }
}

export default Contact;
