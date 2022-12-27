# Introduction
This document is for learning React Native and the reference will probably be [the official website](https://reactnative.dev/). So I will omit showing the reference if contents, which also contain images, are refferred from the official website.

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


# What is React Native?
React Native is an open source framework for building Android and iOS applications using React, which is a JavaScript liobrary for building user interfaces [[React](https://reactjs.org/)], and the app platform's native capabilities. React Native uses the same API structure as React components.
