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
      <Title projectName='garnishments' textColor='quinary' />
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
        <Phase.QA question='who does this affect?'>
          Employers, employees, accountants & state agencies
        </Phase.QA>
        <Phase.QA question='what appears to be the issue?'>
          Every pay period, employers and accountants waste a lot of time
          sending out payments to different state agencies on behalf of
          their employees. These amounts are garnished from employee pay for a
          number of reasons including child support, loans, tax liens, etc.
        </Phase.QA>
        <Phase.QA question='why does this need to be addressed?'>
          We want to give that time back to the employer and accountant.
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
