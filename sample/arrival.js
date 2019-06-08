import React from 'react';
import { Animated } from 'react-native';

const undef = undefined;

const defaultOptions = {
  method: 'spring',
  toValue: 1,
  delay: undef,
  useNativeDriver: true,
  style: { flex: 1 },
  extends: React.Component,
  timing: {
    // Options: https://facebook.github.io/react-native/docs/animated#timing
  },
  spring: {
    // Options: https://facebook.github.io/react-native/docs/animated#spring
  }
};

export default (Com, transform, options) => {
  options = { ...defaultOptions, ...options };

  return class extends options.extends {
    isMount = new Animated.Value(0);

    componentDidMount = () => {
      Animated[options.method](this.isMount, {
        toValue: options.toValue,
        useNativeDriver: options.useNativeDriver,
        ...options[options.method]
      }).start();
    };

    render() {
      return (
        <Animated.View
          style={[
            options.style,
            {
              transform: Object.keys(transform).map(key => ({
                [key]: this.isMount.interpolate({
                  inputRange: [0, 1],
                  outputRange: [transform[key].from, transform[key].to]
                })
              }))
            }
          ]}
        >
          <Com {...this.props} />
        </Animated.View>
      );
    }
  };
};
