import React, { Component } from 'react';
import classNames from 'classnames';

import Tabs from '../tabs';

import './style.scss';

class Skills extends Component {
  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div id='skills' className={ skillsClasses }>
        <Tabs category='Technical Skills'>
          <Tabs.Tab title='User Experience'>
            <div></div>
          </Tabs.Tab>
          <Tabs.Tab title='User Research'>
            <div></div>
          </Tabs.Tab>
          <Tabs.Tab title='Visual Design'>
            <div></div>
          </Tabs.Tab>
          <Tabs.Tab title='User Interface'>
            <div></div>
          </Tabs.Tab>
          <Tabs.Tab title='Front End Dev'>
            <div></div>
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default Skills;
