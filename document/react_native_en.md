# Introduction
This document is for learning React Native and the reference will probably be [the official website](https://reactnative.dev/). So I will omit showing the reference if contents, which also contain images, are refferred from the official website.

# What is React Native?
React Native is an open source framework for building Android and iOS applications using React, which is a JavaScript liobrary for building user interfaces [[React](https://reactjs.org/)], and the app platform's native capabilities. React Native uses the same API structure as React components, that is, understanding React connects to understanding React Native.

# Development Environment
There are two ways to develop apps using React Native, either using EXPO or, using XCode or Android Studio. The former one needs just only Node.js and a phone or an emulator but apps are not written in the native languages, which are Java or Kotlin, or Swift or Objective-C. That means it will not probably be really elegant. The latter one has like an opposite feature: apps are written in the native languages. But the IDE has to be installed and that is a tricky part, especially XCode since XCode runs on only Mac. Note that, React Native allows us writing codes using the native languages but it does not mean we do not need Apple production at all though it seems possible to develop iOS app on Windows with only iPhone[[Windows機でiOSアプリの開発から実機インストールまで行ってみる【ReactNative】～環境構築編～](https://qiita.com/BanaoLihua/items/33f05d368f9bbd0bb741)].

# Basic knowledge
## Android and iOS development
- View: basic building block of UI, which is a small rectangular element on the screen
    - Can be used to display text, images, respond to user input.
    - Can contain other views.
    - Are written in Kotlin or Java in Android development.
    - Are written in Swift or Objective-C in iOS development.

![all about views](https://reactnative.dev/docs/assets/diagram_ios-android-views.svg)

## React
- Components (Both of them provide a view.)
    - Function components
    - Class components, which is only components could have state

## React Native
- Native components: corresponding Android and iOS views
    - Are created by React Native at runtime.
- Core Components: a set of essential, ready-to-use Native Components
    - Are found in [the API document](https://reactnative.dev/docs/components-and-apis).
- Own components
    - Are created by user's own unique native components.
- Community-contributed components: a thiriving ecosystem of someone's own native components
    - Are stored in [React Native Directory](https://reactnative.directory/).

![component relation](https://reactnative.dev/docs/assets/diagram_react-native-components.svg)

## Piece of technologies
### JSX
JSX is a syntax that lets you write elements inside JavaScript like so: `<Text>Hello, I am your cat!</Text>`. The official React website has a document about JSX [[JSX In Depth]https://reactjs.org/docs/jsx-in-depth.html]. Any JavaScript expression can be used in JSX, for example, `<Text>Hello, I am your {cat_name}!<\TexT>` where `cat_name` is a variable. Note that, JSX is included in React library.

### Custom components
Components are nestable and reusable. For example, `<Text>` and `<TextInput>` can be nested in `<View>`.

```javascript
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}

export default Cat;
```

### Props
Props, which is short for properties, is like arguments. Most of React Native's Core Components can be customised with props.

```javascript
import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

export default Cafe;
```

### State
State is like a components's data storage. I am not quite sure but stored values might not keep on storing after an app re-start [[Reactのstateはどこに保存されるか？](https://teratail.com/questions/343195)].

```javascript
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Cat extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  }
}

export default Cafe;
```
