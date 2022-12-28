import React from "react";
import { expo } from "./../app.json";
import { AppRegistry } from "react-native";

import Home from "./screens/Home";

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return <Home />;
  }
}

AppRegistry.registerComponent(expo.appKey, () => App);
