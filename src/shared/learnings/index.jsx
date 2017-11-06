import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Appear, BlockQuote, Code, Fill, Fit, Heading, Image, Layout,
  ListItem, List, Quote, Text
} from 'spectacle';
import './styles.css';

class Learnings extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    return (
      <div className={ this.props.className }>
        <Heading size={2}>Learnings</Heading>
        { this.props.children }
      </div>
    );
  }
}

export default Learnings
