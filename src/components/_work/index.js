import React, { Component } from 'react';
import classNames from 'classnames';

import List from '../list';

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
      <div id='work' className={ workClasses }>
        <h4 className='margin-bottom-16px'>Most Recent Work</h4>
        <List>
          {
            Object
            .keys(this.state.posts)
            .map(key => <List.Item key={key} index={key} details={this.state.posts[key]} />)
          }
        </List>
      </div>
    )
  }
}

export default Work;
