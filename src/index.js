import React from 'react';
import { Animated } from 'react-native';

const undef = undefined;

const defaultOptions = {
  method: 'spring',
  toValue: 1,
  delay: undef,
  useNativeDriver: true,  
  extends: React.Component,
  timing: {
    // Options: https://facebook.github.io/react-native/docs/animated#timing
  },
  spring: {
    // Options: https://facebook.github.io/react-native/docs/animated#spring
  }
};

const abbreviations = {
  p: 'perspective',
  r: 'rotate',
  rx: 'rotateX',
  ry: 'rotateY',
  rz: 'rotateZ',
  s: 'scale',
  sx: 'scaleX',
  sy: 'scaleY',
  x: 'translateX',
  y: 'translateY'
};

export default (Component, transform, options) => {
  options = { ...defaultOptions, ...options };

  transform = Object.keys(transform).reduce(
    (a, b) => ({
      ...a,
      [abbreviations[b] || b]: transform[b]
    }),
    {}
  );

  const AnimatedComponent = Animated.createAnimatedComponent(Component);

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
        <AnimatedComponent
          {...this.props}
          style={[            
            {
              transform: Object.keys(transform).map(key => ({
                [key]: this.isMount.interpolate({
                  inputRange: [0, 1],
                  outputRange: [transform[key].from, transform[key].to]
                })
              }))
            }
          ]}
        />
      );
    }
  };
};
