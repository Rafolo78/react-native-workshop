import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexBox extends Component {
  static get defaultProps() {
    return {
      title: 'FlexBox',
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}
