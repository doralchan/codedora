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
      <Title projectName='guide' textColor='tertiary' />
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
        <Phase.QA question='who did this affect?'>
          Internal teams in Gusto
        </Phase.QA>
        <Phase.QA question='what appeared to be the issue?'>
          With the rapid growth and rebranding of the company, large
          inconsistencies were developing. There was uncertainty about what UI
          components, UX paradigms, and assets were available. Undocumented,
          tribal knowledge became the norm.
        </Phase.QA>
        <Phase.QA question='why did this need to be addressed?'>
          We needed to fill these knowledge gaps to work more consistently and
          effectively for the quality of the product and sanity of the teams.
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
        <Phase.QA question='what were the most common scenarios?'>
          The most common questions were about the UI components. Everyone wanted
          to know what was available and how they should be implemented in detail.
        </Phase.QA>
        <Phase.QA question='what could we do about this?'>
          We could create a library and guide that would reflect all of these
          components. This would provide visual and technical guidance for PMs,
          designers, and engineers.
        </Phase.QA>
        <Phase.QA question='how would this scale?'>
          The guide is meant to reflect the constantly evolving state of the
          company. By creating the library and guide in tandem, we have a testing
          ground for product.
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
          Since this is an internal tool, I have the luxury of simply asking
          the users directly and by survey. Periodically, I send a survey asking
          about possible improvements.
        </Phase.QA>
        <Phase.QA question='how did this perform?'>
          Incredibly well. Teams continually refer to the guide for details on
          components, assets and more. It saves a lot of time when there is a
          single source of truth.
        </Phase.QA>
        <Phase.QA question='what improvements can be made?'>
          The primary improvement that can be made today is making this more
          accessible to those who cannot code. Copywriters, researchers, and
          designers make changes regularly.
        </Phase.QA>
      </Phase>
    )
  }
}


export default Guide
