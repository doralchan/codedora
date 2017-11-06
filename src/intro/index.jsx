import React, { Component } from 'react';
import {
  Appear, BlockQuote, Code, Fill, Fit, Heading, Image, Layout,
  ListItem, List, Quote, Text
} from 'spectacle';
import './styles.css';

export default class Intro extends Component {
  render() {
    return (
      <div>
        <Heading size={2} lineHeight={0.5} textColor='secondary'>hello</Heading>
        <Heading size={1} textColor='tertiary'>+</Heading>
      </div>
    );
  }
}
