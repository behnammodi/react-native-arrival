# Animation when component mount

react-native-arrival

[![NPM](https://nodei.co/npm/react-native-arrival.png)](https://nodei.co/npm/react-native-arrival/)

## Install

`npm i react-native-arrival`

## Use

```jsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Arrival from 'react-native-arrival';

class ScreenA extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Screen A</Text>
      </View>
    );
  }
}

export default Arrival(ScreenA, {
  translateX: { from: 500, to: 0 },
  translateY: { from: 100, to: 0 }
});
```

## More

You can use all tranform property:

```
p or perspective: number
r or rotate: string
rx or rotateX: string
ry or rotateY: string
rz or rotateZ: string
s or scale: number
sx or scaleX: number
sy or scaleY: number
x or translateX: number
y or translateY: number
skewX: string
skewY: string
```

## Options

```jsx
const ScreenA_ = Arrival(
  ScreenA,
  {
    translateX: { from: 500, to: 0 },
    translateY: { from: 100, to: 0 }
  },
  {
    toValue: 1,
    delay: 0,
    useNativeDriver: true,
    style: { flex: 1 }
  }
);
```

## Advance Options

You can change Arrival 'extends' from `Component` to `PureComponent` or other React Class

```jsx
import React, { PureComponent } from 'react';

const ScreenA_ = Arrival(
  ScreenA,
  {
    scale: { from: 0, to: 1 }
  },
  {
    extends: PureComponent
  }
);
```

You can change Animated method from `spring` to `timing` and add method config

https://facebook.github.io/react-native/docs/animated#timing

```jsx
import { Easing } from 'react-native';
const ScreenA_ = Arrival(
  ScreenA,
  {
    scale: { from: 0, to: 1 }
  },
  {
    method: 'timing',
    timing: {
      easing: Easing.linear,
      duration: 5000 // 5sec
    }
  }
);
```

Or change `spring` config

https://facebook.github.io/react-native/docs/animated#spring

```jsx
import { Easing } from 'react-native';
const ScreenA_ = Arrival(
  ScreenA,
  {
    scale: { from: 0, to: 1 }
  },
  {
    spring: {
      friction: 7,
      tension: 40,
      speed: 12,
      bounciness: 8
    }
  }
);
```
