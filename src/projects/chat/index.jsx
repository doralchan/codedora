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
        <Phase.QA question='who did this affect?'>
          All external customers and most internal teams in Gusto.
        </Phase.QA>
        <Phase.QA question='what appeared to be the issue?'>
          A little after the release of our new benefits offering, we recognized
          an immediate need to address the Health Insurance Portability and
          Accountability Act. The chat vendor we were using at the time was
          not HIPPAA compliant and to protect sensitive patient data, we needed
          to change tools.
        </Phase.QA>
        <Phase.QA question='why did this need to be addressed?'>
          Compliance is a key value to the company and myself.
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
        <Phase.QA question='what were the most common scenarios?'>
          Chat is used everywhere. From the corporate site to product, chat was
          and continues to be the first tool people access for it's immediacy and
          simplicity in communication.
        </Phase.QA>
        <Phase.QA question='what could we do about this?'>
          We could utilize a HIPPAA compliant API and demonstrate how chat can
          be incorporated into the product experience in a more seamless way.
        </Phase.QA>
        <Phase.QA question='how would this scale?'>
          With the advancement in AI including IBM's Watson, we wanted to develop
          a way for chat to be smart and predict the needs of the user.
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
          With such a key communication tool at hand, we paid heavy attention to
          the frequency of people reaching out. This increased by 10%.
        </Phase.QA>
        <Phase.QA question='how did this perform?'>
          The response to the chat change was positive. It continues to be the
          most heavily utilized communication tool we have in comparison to
          phone and email.
        </Phase.QA>
        <Phase.QA question='what improvements can be made?'>
          Better sales integrations. Chat in this case was optimized for compliance
          and product experience, but not tracking sales transactions.
        </Phase.QA>
      </Phase>
    )
  }
}


export default Chat
