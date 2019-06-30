import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../image';
import { ReactComponent as Close } from '../../assets/icon-close.svg';

import './style.scss';

class Modal extends Component {
  static propTypes = {
    title:  PropTypes.string,
    children:   PropTypes.node.isRequired,
    className:  PropTypes.string,
    handleClose: PropTypes.func
  }

  render() {
    const modalClasses = classNames('modal', this.props.className);

    return (
      <div className={ modalClasses }>
        <div className='modal-header'>
          <h4>{ this.props.title }</h4>
          <div className='modal-header-close' onClick={ this.props.handleClose }>
            <Image imgSize='sm'><Close /></Image>
          </div>
        </div>
        <div className='modal-body'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

Modal.Detail = class Detail extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    return (
      <div className='modal-body-detail'>
        <div><strong>{ this.props.subtitle }</strong></div>
        <div><small>{ this.props.children }</small></div>
      </div>
    )
  }

}

export default Modal;
