import React, { Component } from 'react';
import classNames from 'classnames';

import Link from '../link';

import './style.scss';

class Contact extends Component {
  render() {
    const contactClasses = classNames('contact', this.props.className);

    return (
      <div id='contact' className={ contactClasses }>
        <h4 className='contact-title'>Contact</h4>
        <div className='contact-blurb'>
          <p>
            If you'd like to reach out
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
