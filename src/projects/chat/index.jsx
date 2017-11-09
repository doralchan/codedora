import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <Title projectName='chat' textColor='senary' />
    )
  }
}

Chat.Background = class Chat extends React.Component {
  render() {
    return (
      <Phase projectName='chat' textColor='tertiary'>
        <Phase.Heading
          phaseNumber='01'
          phaseName='background'
          textColor='senary' />
        <Phase.QA question='what appears to be the issue?'>
          Answer
        </Phase.QA>
        <Phase.QA question='who does this affect?'>
          Answer
        </Phase.QA>
        <Phase.QA question='why does this need to be addressed?'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}

Chat.Concept = class Chat extends React.Component {
  render() {
    return (
      <Phase projectName='chat' textColor='tertiary'>
        <Phase.Heading
          phaseNumber='02'
          phaseName='concept'
          textColor='senary' />
        <Phase.QA question='what are the most common scenarios?'>
          Answer
        </Phase.QA>
        <Phase.QA question='what can we do about this now?'>
          Answer
        </Phase.QA>
        <Phase.QA question='how will this scale?'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}

Chat.Learnings = class Chat extends React.Component {
  render() {
    return (
      <Phase projectName='chat' textColor='tertiary'>
        <Phase.Heading
          phaseNumber='03'
          phaseName='learnings'
          textColor='senary' />
        <Phase.QA question='what metrics did we use?'>
          Answer
        </Phase.QA>
        <Phase.QA question='how did this perform?'>
          Answer
        </Phase.QA>
        <Phase.QA question='what improvements can be made?'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}


export default Chat
