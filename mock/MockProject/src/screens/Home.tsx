import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView } from "react-native";

type Props = {};

class Home extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.home_text_view}>
          <Text style={styles.home_text}>Cats or Dogs?</Text>
        </View>
        <View style={styles.home_button_view}>
          <Button title="let's get started!" color="green" />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
    marginBottom: 50,
    justifyContent: "center",
  },
  home_text_view: {
    flex: 1,
  },
  home_text: {
    fontSize: 30,
    textAlign: "center",
    color: "green",
  },
  home_button_view: {
    flex: 1,
    marginHorizontal: 50,
  },
});
