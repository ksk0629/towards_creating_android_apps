import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

interface Props {
  preferCats: boolean;
  preferDogs: boolean;
}

interface State {
  bestAnimal: string;
}

const CATS: string = "cats";
const DOGS: string = "dogs";

class Question extends React.Component<Props, State> {
  /* Constructor */
  constructor(props: Props) {
    super(props);

    if (!props.preferDogs) {
      this.setState({ bestAnimal: CATS });
    } else {
      this.setState({ bestAnimal: DOGS });
    }
  }

  /* Set bestAnimal state as CATS */
  onCats = () => this.setState({ bestAnimal: CATS });
  /* Set bestAnimal state as DOGS */
  onDogs = () => this.setState({ bestAnimal: DOGS });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question_text_view}>
          <Text>Which do you prefer cats or dogs?</Text>
        </View>
        <View style={styles.radio_button_view}>
          <RadioButton
            value={CATS}
            status={this.state.bestAnimal === CATS ? "checked" : "unchecked"}
            onPress={this.onCats}
          />
          <RadioButton
            value={DOGS}
            status={this.state.bestAnimal === DOGS ? "checked" : "unchecked"}
            onPress={this.onDogs}
          />
        </View>
      </View>
    );
  }
}

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
    marginBottom: 50,
    justifyContent: "center",
  },
  question_text_view: { flex: 1 },
  radio_button_view: { flex: 1 },
});
