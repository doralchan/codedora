import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Background from '../../shared/background';
import Concept from '../../shared/concept';
import Learnings from '../../shared/learnings';

class Chat extends Component {
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

Chat.Background = class Chat extends React.Component {
  render() {
    return (
      <Background>Background Content</Background>
    )
  }
}

Chat.Concept = class Chat extends React.Component {
  render() {
    return (
      <Concept>Concept Content</Concept>
    )
  }
}

Chat.Learnings = class Chat extends React.Component {
  render() {
    return (
      <Learnings>Learning Content</Learnings>
    )
  }
}

export default Chat
