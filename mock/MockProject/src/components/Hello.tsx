import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    };
  }

  onIncrement = () =>
    this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  onDecrement = () =>
    this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{" "}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <Button title="decrement" onPress={this.onDecrement} color="red" />
          <Button title="increment" onPress={this.onIncrement} color="blue" />
        </View>
      </View>
    );
  }
}

export default Hello;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
  },
  greeting: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 30,
  },
});
