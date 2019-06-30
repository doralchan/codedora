import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Table from '../table';

import projects from './projects.json';
import './style.scss';

class Project extends Component {
  static propTypes = {
    project: PropTypes.string
  }

  render() {
    const { project, company, year } = this.props.details;

    return (
      <tr>
        <td><strong>{ project }</strong></td>
        <td className='text-right'><small>{ company } { year }</small></td>
      </tr>
    )
  }
}

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
      <div className={ workClasses }>
        <Table>
          <Table.Header>
            <tr>
              <th><h4>Most Recent Work</h4></th>
              <th></th>
            </tr>
          </Table.Header>
          <Table.Body>
            {
              Object
              .keys(this.state.posts)
              .map(key => <Project key={key} index={key} details={this.state.posts[key]} />)
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Work;
