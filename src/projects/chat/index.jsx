import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'spectacle';

import Title from '../../shared/title';
import Phase from '../../shared/phase';

import './styles.css';

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

Chat.Title = class Chat extends React.Component {
  render() {
    return (
      <Title textColor='quinary' projectTitle='garnishments'>
        This is the description of chat
      </Title>
    )
  }
}

Chat.Background = class Chat extends React.Component {
  render() {
    return (
      <Phase>
        <Phase.Heading
          phaseNumber='01'
          phaseName='background'
          textColor='quinary' />
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}

Chat.Concept = class Chat extends React.Component {
  render() {
    return (
      <Phase>
        <Phase.Heading
          phaseNumber='02'
          phaseName='concept'
          textColor='quinary' />
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}

Chat.Learnings = class Chat extends React.Component {
  render() {
    return (
      <Phase>
        <Phase.Heading
          phaseNumber='03'
          phaseName='learnings'
          textColor='quinary' />
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
        <Phase.QA question='what'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}


export default Chat
