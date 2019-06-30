import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Table extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className:  PropTypes.string
  }

  render() {
    const tableClasses = classNames('table', this.props.className);

    return (
      <table className={ tableClasses }>
        { this.props.children }
      </table>
    )
  }
}

Table.Header = class Header extends Component {
  static propTypes = {
    tableType: PropTypes.oneOf(['none', 'subtotal']),
    children: PropTypes.node
  }

  static defaultProps = {
    tableType: 'subtotal'
  }

  render() {
    const headerClasses = classNames('table-header', 'table-' + this.props.tableType);

    return (
      <thead className={ headerClasses }>
        { this.props.children }
      </thead>
    )
  }
}

Table.Body = class Body extends Component {
  static propTypes = {
    tableType: PropTypes.oneOf(['none', 'subtotal', 'total']),
    children: PropTypes.node,
    collapseAble: PropTypes.bool,
    categoryName: PropTypes.string,
    subTotal: PropTypes.number
  }

  static defaultProps = {
    tableType: 'subtotal',
    collapseAble: false,
    categoryName: 'Category'
  }

  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  renderRow() {
    const rowClasses = classNames('table-collapseable-link', !this.state.isHidden && 'open');

    return (
      <tr onClick={ this.toggleHidden.bind(this) }>
        <td>
          <div className={ rowClasses }>
            <strong>{ this.props.categoryName }</strong>
          </div>
        </td>
        <td><strong>{ this.props.subTotal }</strong></td>
      </tr>
    )
  }

  render() {
    const bodyClasses = classNames(
      'table-body',
      'table-' + this.props.tableType,
      this.props.collapseAble === true ? 'table-collapseable' : null
    );

    return (
      <tbody className={ bodyClasses }>
        { this.props.collapseAble === true ? this.renderRow() : null }
        { this.props.collapseAble === true ? !this.state.isHidden && this.props.children : this.props.children }
      </tbody>
    )
  }
}

export default Table;
