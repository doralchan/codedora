import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Fade } from 'react-reveal';

import Card from '../card';
import Icon from '../icon';

import Profile3 from '../../assets/profile_3.svg';
import IconCircle from '../../assets/icon-circle.svg';
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
        <h4 className='skills-card-title'>{ this.props.cardTitle }</h4>
        <div className='skills-card-content'>{ this.props.children }</div>
      </Card>
    )
  }

}

class Skills extends Component {
  renderUX () {
    return (
      <div className='skill'>
        <SkillsCard cardTitle='ux/ui' iconSrc={ IconCircle }>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </SkillsCard>
      </div>
    );
  }

  renderFrontEnd () {
    return (
      <div className='skill'>
        <SkillsCard cardTitle='front-end' iconSrc={ IconTriangle }>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </SkillsCard>
      </div>
    );
  }

  renderSystems () {
    return (
      <div className='skill'>
        <SkillsCard cardTitle='systems' iconSrc={ IconSquare }>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </SkillsCard>
      </div>
    );
  }

  render() {
    const skillsClasses = classNames('skills', this.props.className);

    return (
      <div id='skills' className={ skillsClasses }>
        <div className='skills-cards'>
          <Fade top wave>
            { this.renderUX() }
            { this.renderFrontEnd() }
            { this.renderSystems() }
          </Fade>
        </div>
        <div className='skills-background'></div>
        <img src={ Profile3 } className='skills-profile' alt='' />
      </div>
    )
  }
}

export default Skills;
