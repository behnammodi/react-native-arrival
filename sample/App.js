/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Arrival from './arrival';

const { width } = Dimensions.get('window');

class ScreenA extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red'
        }}
      >
        <Text>Screen A</Text>
      </View>
    );
  }
}

class ScreenB extends Component {
  render() {
    return (
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue'
        }}
      >
        <Text>Screen B</Text>
      </View>
    );
  }
}

const ScreenA_ = Arrival(ScreenA, {
  translateX: { from: width, to: 0 },
  translateY: { from: 100, to: 0 },
  scale: { from: 0, to: 1 }
});

const ScreenB_ = Arrival(ScreenB, {
  x: { from: -width, to: 0 },
  y: { from: 100, to: 0 },
  s: { from: 0, to: 1 }
});

export default class App extends Component {
  state = {
    screen: <></>
  };

  componentDidMount() {
    setTimeout(() => this.setState({ screen: <ScreenA_ /> }), 2000);
    setTimeout(() => this.setState({ screen: <ScreenB_ /> }), 4000);
    setTimeout(() => this.setState({ screen: <></> }), 6000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        {this.state.screen}
      </View>
    );
  }
}
