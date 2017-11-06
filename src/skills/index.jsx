import React, { Component } from 'react';
import {
  Appear, BlockQuote, Code, Fill, Fit, Heading, Image, Layout,
  ListItem, List, Quote, Text, Typeface
} from 'spectacle';
import './styles.css';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Heading size={2} textColor='primary'>things i do</Heading>
        <Typeface weight={ 300 }>
          <Text textColor='primary' textSize={ 18 } margin={ 20 }>
            These projects are a reflection
          </Text>
        </Typeface>
        <List textColor='primary'>
          <ListItem textSize={ 24 }>ux & ui</ListItem>
          <ListItem textSize={ 24 }>front-end</ListItem>
          <ListItem textSize={ 24 }>system</ListItem>
        </List>
      </div>
    );
  }
}
