import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
          <h6 className='modal-close' onClick={ this.props.handleClose }>Go Home</h6>
          <h6 className='modal-next' onClick={ this.props.handleClose }>Go Travel</h6>
        </div>
        <div className='modal-body'>
          <h3>{ this.props.title }</h3>
          <div>{ this.props.children }</div>
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
      <div className='modal-detail'>
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
      <div className='modal-image'>
        <img src={ this.props.imgSrc } alt='' />
      </div>
    )
  }

}

export default Modal;
