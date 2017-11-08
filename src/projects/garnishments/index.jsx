import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../shared/title';
import Phase from '../../shared/phase';

import './styles.css';

class Garnishments extends Component {
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

Garnishments.Title = class Garnishments extends React.Component {
  render() {
    return (
      <Title projectName='garnishments' textColor='quinary'>
        This is the description of garnishments
      </Title>
    )
  }
}

Garnishments.Background = class Garnishments extends React.Component {
  render() {
    return (
      <Phase projectName='garnishments' textColor='senary'>
        <Phase.Heading
          phaseNumber='01'
          phaseName='background'
          textColor='quinary' />
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

Garnishments.Concept = class Garnishments extends React.Component {
  render() {
    return (
      <Phase projectName='garnishments' textColor='senary'>
        <Phase.Heading
          phaseNumber='02'
          phaseName='concept'
          textColor='quinary' />
        <Phase.QA question='what are the most common scenarios?'>
          Answer
        </Phase.QA>
        <Phase.QA question='what can we do about this now?'>
          Answer
        </Phase.QA>
        <Phase.QA question='how can this scale?'>
          Answer
        </Phase.QA>
      </Phase>
    )
  }
}

Garnishments.Learnings = class Garnishments extends React.Component {
  render() {
    return (
      <Phase projectName='garnishments' textColor='senary'>
        <Phase.Heading
          phaseNumber='03'
          phaseName='learnings'
          textColor='quinary' />
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


export default Garnishments
