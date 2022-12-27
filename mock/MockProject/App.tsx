import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/Hello";

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_view}>
          <Text style={styles.title_text}>Cats or Dogs?</Text>
        </View>
        <Hello name="Expo" enthusiasmLevel={10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
    alignItems: "center",
  },
  title_view: {
    alignItems: "flex-start",
  },
  title_text: {
    fontSize: 30,
  },
});
