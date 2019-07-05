import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Card from '../card';
import Icon from '../icon';

import Profile3 from '../../assets/profile_3.svg';
import IconHexagon from '../../assets/icon-hexagon.svg';
import IconTriangle from '../../assets/icon-triangle.svg';
import IconSquare from '../../assets/icon-square.svg';

import './style.scss';

class SkillsCard extends Component {
  static propTypes = {
    iconSrc: PropTypes.string,
    cardTitle: PropTypes.string
  }

  render() {
    return (
      <Card className='skills-card'>
        <Icon iconSize='sm' iconSrc={ this.props.iconSrc } className='skills-card-icon' />
        <div className='skills-card-content'>
          <h5 className='skills-card-title'>{ this.props.cardTitle }</h5>
          <div className='skills-card-body'>{ this.props.children }</div>
        </div>
      </Card>
    )
  }

}

class Skills extends Component {
  renderUX () {
    return (
      <Fade bottom className='skill'>
        <SkillsCard cardTitle='ux/ui' iconSrc={ IconHexagon }>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </SkillsCard>
      </Fade>
    );
  }

  renderFrontEnd () {
    return (
      <Fade bottom className='skill' delay={ 200 }>
        <SkillsCard cardTitle='front-end' iconSrc={ IconTriangle }>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </SkillsCard>
      </Fade>
    );
  }

  renderSystems () {
    return (
      <Fade bottom className='skill' delay={ 300 }>
        <SkillsCard cardTitle='systems' iconSrc={ IconSquare }>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </SkillsCard>
      </Fade>
    );
  }

  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div id='skills' className={ skillsClasses }>
        <div className='skills-cards'>
          { this.renderUX() }
          { this.renderFrontEnd() }
          { this.renderSystems() }
        </div>
        <div className='skills-background' />
        <div className='skills-profile'><img src={ Profile3 } alt='' /></div>
      </div>
    )
  }
}

export default Skills;
