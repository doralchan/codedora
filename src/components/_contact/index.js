import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Contact extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string
  }

  render() {
    const contactClasses = classNames('contact', this.props.className);

    return (
      <div className={ contactClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Contact;
