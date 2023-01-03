import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackParams";

type QuestionScreenProp = StackNavigationProp<RootStackParamList, "Question">;

function QuestionScreen() {
  const navigation = useNavigation<QuestionScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.question_text_view}>
        <Text style={styles.question_text}>
          Which do you prefer cats or dogs?
        </Text>
      </View>
      <View style={styles.button_view}>
        <Button
          title="CATS"
          color="green"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="DOGS"
          color="green"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 80,
    // marginBottom: 50,
    justifyContent: "center",
  },
  question_text_view: {
    flex: 1,
  },
  question_text: {
    fontSize: 25,
    textAlign: "center",
    color: "green",
  },
  button_view: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 300,
  },
});
