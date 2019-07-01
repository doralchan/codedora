import React, { Component } from 'react';
import classNames from 'classnames';

import Tabs from '../tabs';

import SpotPlant from '../../assets/spot-illo-plant.svg';
import Profile3 from '../../assets/profile_3.svg';

import './style.scss';

class Skills extends Component {
  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div id='skills' className={ skillsClasses }>
        <img src={ SpotPlant } className='skills-plant' alt='' />
        <img src={ Profile3 } className='skills-profile' alt='' />
        <Tabs category='Technical Skills'>
          <Tabs.Tab title='User Experience'>
            UX Coming Soon
          </Tabs.Tab>
          <Tabs.Tab title='User Research'>
            UR Coming Soon
          </Tabs.Tab>
          <Tabs.Tab title='Illustration'>
            Illos Coming Soon
          </Tabs.Tab>
          <Tabs.Tab title='Visual Design'>
            Visuals Coming Soon
          </Tabs.Tab>
          <Tabs.Tab title='Content Management'>
            CMS Coming Soon
          </Tabs.Tab>
          <Tabs.Tab title='User Interface'>
            UI Coming Soon
          </Tabs.Tab>
          <Tabs.Tab title='Front End Dev'>
            CSS/JS Coming Soon
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default Skills;
