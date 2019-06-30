import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button';
import Image from '../image';

import { ReactComponent as Close } from '../../assets/icon-close.svg';

import './style.scss';

class Modal extends Component {
  static propTypes = {
    title:  PropTypes.string,
    children:   PropTypes.node.isRequired,
    primaryCTA:  PropTypes.string,
    secondaryCTA: PropTypes.string,
    className:  PropTypes.string,
    handleClose: PropTypes.func
  }

  static defaultProps = {
    primaryCTA: 'Save'
  }

  renderSecondary() {
    return (
      <Button onClick={ this.props.handleClose } btnType='secondary'>{ this.props.secondaryCTA }</Button>
    )
  }

  renderHeader() {
    return (
      <div className='modal-header'>
        <h4 className='modal-header-title'>{ this.props.title }</h4>
        <div className='modal-header-close' onClick={ this.props.handleClose }>
          <Image imgSize='sm'><Close /></Image>
        </div>
      </div>
    )
  }

  render() {
    const modalClasses = classNames('modal', this.props.className);

    return (
      <div className={ modalClasses }>
        { this.props.title ? this.renderHeader() : null }
        <div className='modal-content'>
          { this.props.children }
        </div>
        <div className='modal-footer'>
          { this.props.secondaryCTA ? this.renderSecondary() : null }
          <Button onClick={ this.props.handleClose }>{ this.props.primaryCTA }</Button>
        </div>
      </div>
    )
  }
}

export default Modal;
