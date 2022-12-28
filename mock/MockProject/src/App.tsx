import React from "react";
import { expo } from "./../app.json";
import { AppRegistry } from "react-native";

import Home from "./screens/Home";

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return <Home />;
  }
}

AppRegistry.registerComponent(expo.appKey, () => App);
