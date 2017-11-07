import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Appear, BlockQuote, Code, Fill, Fit, Heading, Image, Layout,
  ListItem, List, Quote, Text, Typeface
} from 'spectacle';
import './styles.css';

class Phase extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    return (
      <div className={ this.props.className }>
        { this.props.children }
      </div>
    );
  }
}

Phase.Heading = class Phase extends React.Component {
  static propTypes = {
    phaseNumber: PropTypes.string,
    phaseName: PropTypes.string,
    textColor: PropTypes.string
  };

  render() {
    return (
      <div>
        <Heading size={1} textColor={ this.props.textColor }>
          { this.props.phaseNumber }
        </Heading>
        <Heading size={4}>{ this.props.phaseName }</Heading>
      </div>
    )
  }
}

Phase.QA = class Phase extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    question: PropTypes.string
  };

  render() {
    return (
      <div>
        <Typeface weight={ 600 }><Text>{ this.props.question }</Text></Typeface>
        <Typeface weight={ 300 }>
          <Text textSize={ 22 } lineHeight={ 1.4 } margin={ 10 }>
            { this.props.children }
          </Text>
        </Typeface>
      </div>
    )
  }
}

export default Phase
