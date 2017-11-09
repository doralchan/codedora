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
        <Phase.QA question='who did this affect?'>
          Employers, employees, accountants & state agencies
        </Phase.QA>
        <Phase.QA question='what appeared to be the issue?'>
          Every pay period, employers and accountants were wasting a lot of
          time sending out payments to different state agencies on behalf of
          their employees. These amounts were garnished from employee pay for a
          number of reasons including child support, loans, tax liens, etc.
          They were legally required to fulfill these payments.
        </Phase.QA>
        <Phase.QA question='why did this need to be addressed?'>
          We wanted to give that time back to the employer and accountant.
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
        <Phase.QA question='what were the most common scenarios?'>
          The most common garnishments that occur are child support payments,
          accounting for 40% of all garnishments in the United States. According
          to the U.S. Census Bureau, that's about $32.9 billion dollars annually.
        </Phase.QA>
        <Phase.QA question='what could we do about this?'>
          We could automate the payments for these garnishments. As long as we
          have the details of the court order and the earnings per pay period,
          we can send out electronic payments.
        </Phase.QA>
        <Phase.QA question='how would this scale?'>
          Other garnishment types can be added in a similar flow and automated.
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
          We tracked the number of garnishments entered and any care tickets
          related to the matter to gauge impact and customer sentiment.
        </Phase.QA>
        <Phase.QA question='how did this perform?'>
          It has performed fairly well so far. It's been available for the past
          1.5 months and the number of garnishments jumped from 14,800 entries to
          16,000.
        </Phase.QA>
        <Phase.QA question='what improvements can be made?'>
          We need to address lump sum payments. These require the employer to
          contact child support agencies directly each time an additional payment
          is made.
        </Phase.QA>
      </Phase>
    )
  }
}


export default Garnishments
