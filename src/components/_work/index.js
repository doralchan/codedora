import React, { Component } from 'react';
import classNames from 'classnames';

import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter } from 'react-router-dom';

import Table from '../table';
import projects from './projects.json';

import BusinessSetup from './project_business_setup';

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
          <h4 className='work-title'>Selected Works</h4>
          <Table>
            {
              Object
              .keys(this.state.posts)
              .map(key => <Table.Row key={key} index={key} details={this.state.posts[key]} />)
            }
          </Table>
          <ModalRoute component={ BusinessSetup } path='/project_business_setup' parentPath='/' />
          <ModalContainer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Work;
