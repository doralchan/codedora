import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    selected: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string
  }

  static defaultProps = {
    selected: 0,
    title: 'Tab'
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    }
  }

  handleChange(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    const tabsClasses = classNames('tabs', this.props.className);

    return (
      <div className={ tabsClasses }>
        <ul className='tabs-list'>
          {
            this.props.children.map((item, index) => (
              <li className={ classNames('tabs-list-item', index === this.state.selected ? 'selected' : 'deselected') } key={ index } onClick={ this.handleChange.bind(this, index) }>
                <div>{ item.props.title }</div>
              </li>
            ))
          }
        </ul>
        <div className='tabs-container'>
          { this.props.children[this.state.selected] }
        </div>
      </div>
    )
  }
}

Tabs.Tab = class Tab extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const tabClasses = classNames('tabs-container-content', this.props.className);

    return (
      <div className={ tabClasses }>
        { this.props.children }
      </div>
    )
  }
}

export default Tabs;
