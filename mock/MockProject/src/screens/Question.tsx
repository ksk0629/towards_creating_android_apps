import React from "react";
import { StyleSheet, Button, Text, Image, View } from "react-native";

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
        <View>
          <Button
            title="CATS"
            color="green"
            onPress={() =>
              navigation.navigate("Reason", { preferredAnimal: "cats" })
            }
          />
          <Image
            style={styles.image}
            source={require("./../../assets/animal_cat_front.png")}
          />
        </View>
        <View>
          <Button
            title="DOGS"
            color="green"
            onPress={() =>
              navigation.navigate("Reason", { preferredAnimal: "dogs" })
            }
          />
          <Image
            style={styles.image}
            source={require("./../../assets/animal_dog_front.png")}
          />
        </View>
      </View>
    </View>
  );
}

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 100,
  },
  image: {
    width: 120,
    height: 240,
    resizeMode: "stretch",
  },
});
