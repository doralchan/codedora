import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  cardClasses() {
    return classNames(
      'card',
      this.props.className
    )
  };

  render() {
    return (
      <div className={ this.cardClasses() }>
        { this.props.children }
      </div>
    );
  }
}

export default Card;
