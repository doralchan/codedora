import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class List extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  listClasses() {
    return classNames(
      'list',
      this.props.className
    )
  }

  render() {
    return (
      <ul className={ this.listClasses() }>
        { this.props.children }
      </ul>
    );
  }
}

List.Item = class List extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    fill: PropTypes.number
  };

  render() {
    const listItemClasses = classNames('list-item', this.props.className);

    return (
      <li className={ listItemClasses }>
        { this.props.children }
      </li>
    )
  }

}

export default List
