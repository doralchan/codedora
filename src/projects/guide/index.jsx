import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../shared/title';
import Phase from '../../shared/phase';

import './styles.css';

class Guide extends Component {
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

Guide.Title = class Guide extends React.Component {
  render() {
    return (
      <Title projectName='guide' textColor='tertiary' >
        This is the description of Guide
      </Title>
    )
  }
}

Guide.Background = class Guide extends React.Component {
  render() {
    return (
      <Phase projectName='guide' textColor='quinary'>
        <Phase.Heading
          phaseNumber='01'
          phaseName='background'
          textColor='tertiary' />
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

Guide.Concept = class Guide extends React.Component {
  render() {
    return (
      <Phase projectName='guide' textColor='quinary'>
        <Phase.Heading
          phaseNumber='02'
          phaseName='concept'
          textColor='tertiary' />
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

Guide.Learnings = class Guide extends React.Component {
  render() {
    return (
      <Phase projectName='guide' textColor='quinary'>
        <Phase.Heading
          phaseNumber='03'
          phaseName='learnings'
          textColor='tertiary' />
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


export default Guide
