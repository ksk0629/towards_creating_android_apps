import { AppRegistry } from "react-native";
import { expo } from "./../app.json";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

import HomeScreen from "./screens/Home";
import QuestionScreen from "./screens/Question";
import ReasonScreen from "./screens/Reason";
import RedirectScreen from "./screens/Redirect";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Reason" component={ReasonScreen} />
        <Stack.Screen name="Redirect" component={RedirectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(expo.appKey, () => App);
