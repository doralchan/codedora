import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon';
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
        <div className='modal-close' onClick={ this.props.handleClose }>Go Back</div>
        <h4>{ this.props.title }</h4>
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
        <div>{ this.props.children }</div>
      </div>
    )
  }

}

Modal.Image = class Image extends Component {
  static propTypes = {
    imgSrc: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    return (
      <div className='modal-body-image'>
        <img src={ this.props.imgSrc } alt='' />
      </div>
    )
  }

}

export default Modal;
