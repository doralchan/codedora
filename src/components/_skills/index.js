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
          <Tabs.Tab title='Tab 1'>
            <div>1</div>
          </Tabs.Tab>
          <Tabs.Tab title='Tab 2'>
            <div>2</div>
          </Tabs.Tab>
          <Tabs.Tab title='Tab 3'>
            <div>3</div>
          </Tabs.Tab>
          <Tabs.Tab title='Tab 4'>
            <div>4</div>
          </Tabs.Tab>
          <Tabs.Tab title='Tab 5'>
            <div>5</div>
          </Tabs.Tab>
          <Tabs.Tab title='Tab 6'>
            <div>6</div>
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default Skills;
