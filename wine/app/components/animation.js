import React, { Component } from 'react';
import { Animated } from 'react-native';
import randomcolor from 'randomcolor';

export default class AnimatedBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: randomcolor(),
    };
  }

  render() {
    return (
      <Animated.View />
    );
  }
}
