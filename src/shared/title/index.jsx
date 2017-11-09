import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'spectacle';
import './styles.css';

class Title extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    textColor: PropTypes.string,
    projectName: PropTypes.string
  };

  render() {
    return (
      <Heading size={2} textColor='primary' className='heading'>
        <span className={ this.props.textColor }> + </span>
        { this.props.projectName }
      </Heading>
    );
  }
}

export default Title
