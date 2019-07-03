import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import './style.scss';

class List extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className:  PropTypes.string
  }

  render() {
    const listClasses = classNames('list', this.props.className);

    return (
      <ul className={ listClasses }>
        { this.props.children }
      </ul>
    )
  }
}

List.Item = class Item extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { project, company, year, link } = this.props.details;

    return (
      <li className='list-item'>
        <Link to={ link }>
          <div className='list-item-cell'>
            { project }
          </div>
          <div className='list-item-cell'>
            <small>{ company } { year }</small>
          </div>
        </Link>
      </li>
    )
  }
}

export default List;
