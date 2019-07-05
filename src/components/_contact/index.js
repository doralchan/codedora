import React, { Component } from 'react';
import classNames from 'classnames';

import Link from '../link';

import './style.scss';

class Contact extends Component {
  render() {
    const contactClasses = classNames('contact', this.props.className);

    return (
      <div id='contact' className={ contactClasses }>
        <div className='contact-block'>
          <h4 className='contact-block-title'>Contact</h4>
          <div className='contact-block-blurb'>
            If you'd like to chat or see more projects, feel free to contact me through any of the methods below. I'm usually available for coffee or tacos.
          </div>
          <ul className='contact-block-list'>
            <li><Link to='https://www.linkedin.com/in/doralchan/'>LinkedIn</Link></li>
            <li><Link to='https://dribbble.com/doralchan'>Dribble</Link></li>
            <li><Link to='https://www.pinterest.com/doralchan/'>Pinterest</Link></li>
            <li><Link to='https://twitter.com/doralchan'>Twitter</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
            <li><Link to=''>Media</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;
