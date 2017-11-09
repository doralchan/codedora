import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Heading, Text, Typeface } from 'spectacle';
import './styles.css';

class Phase extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    projectName: PropTypes.string,
    textColor: PropTypes.string
  };

  projectClasses() {
    return classNames(
      'phase-project',
      this.props.textColor
    )
  }

  render() {
    return (
      <div className='phase-wrapper'>
        { this.props.children }
        <div className={ this.projectClasses() }>{ this.props.projectName }</div>
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
      <div className='phase-heading'>
        <Heading size={1} textColor={ this.props.textColor }>
          { this.props.phaseNumber }
        </Heading>
        <Heading size={4} textColor='secondary'>{ this.props.phaseName }</Heading>
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
      <div className='phase-qa'>
        <Typeface weight={ 600 }>
          <Text textSize={ 24 } textColor='secondary'>{ this.props.question }</Text>
        </Typeface>
        <Typeface weight={ 300 }>
          <Text textSize={ 20 } lineHeight={ 1.5 } textColor='secondary'>
            { this.props.children }
          </Text>
        </Typeface>
      </div>
    )
  }
}

export default Phase
