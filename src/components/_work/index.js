import React, { Component } from 'react';
import classNames from 'classnames';

import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter } from 'react-router-dom';

import List from '../list';

import MultipleTaxJurisdictions from './projects/multiple_tax_jurisdictions';
import TimecardIntegrations from './projects/timecard_integrations';

import projects from './projects.json';
import './style.scss';

class Work extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }

  }

  componentWillMount() {
    this.setState({
      posts: projects
    })
  }

  render() {
    const workClasses = classNames('work', this.props.className);

    return (
      <BrowserRouter>
        <div id='work' className={ workClasses }>
          <h4 className='margin-bottom-16px'>Most Recent Work</h4>
          <List>
            {
              Object
              .keys(this.state.posts)
              .map(key => <List.Item key={key} index={key} details={this.state.posts[key]} />)
            }
          </List>
          <ModalRoute component={ MultipleTaxJurisdictions } path='/multiple_tax_jurisdictions' parentPath='/' />
          <ModalRoute component={ TimecardIntegrations } path='/timecard_integrations' parentPath='/' />
          <ModalContainer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Work;
