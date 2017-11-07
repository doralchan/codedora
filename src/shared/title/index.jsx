import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Appear, BlockQuote, Code, Fill, Fit, Heading, Image, Layout,
  ListItem, List, Quote, Text, Typeface
} from 'spectacle';
import './styles.css';

class Title extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    textColor: PropTypes.string,
    projectTitle: PropTypes.string
  };

  render() {
    return (
      <div className={ this.props.className }>
        <div className='heading'>
          <Heading size={4} textColor='primary'>
            <span className={ this.props.textColor }> + </span>
            { this.props.projectTitle }
          </Heading>
        </div>
        <Typeface weight={ 300 }>
          <Text textSize={ 22 } lineHeight={ 1.4 } margin={ 10 } textColor='primary'>
            { this.props.children }
          </Text>
        </Typeface>
      </div>
    );
  }
}

export default Title
