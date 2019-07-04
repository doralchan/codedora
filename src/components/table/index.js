import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import './style.scss';

class Table extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className:  PropTypes.string
  }

  render() {
    const tableClasses = classNames('table', this.props.className);

    return (
      <div className={ tableClasses }>
        { this.props.children }
      </div>
    )
  }
}

Table.Row = class Row extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { project, company, year, link } = this.props.details;

    return (
      <Link to={ link } className='table-row'>
        <div className='table-row-cell'>{ project }</div>
        <div className='table-row-cell'><small>{ company } { year }</small></div>
      </Link>
    )
  }
}

export default Table;
