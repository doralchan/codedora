import React, { Component } from 'react';
import classNames from 'classnames';

import './style.scss';

class Contact extends Component {
  render() {
    const contactClasses = classNames('contact', this.props.className);

    return (
      <div id='contact' className={ contactClasses }>
        <h4>Contact</h4>
        <div>

        </div>
      </div>
    )
  }
}

export default Contact;
