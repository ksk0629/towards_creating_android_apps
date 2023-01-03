import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../RootStackParams";

type reasonScreenProp = StackNavigationProp<RootStackParamList, "Reason">;

const ReasonInput = (props, maxLength) => {
  return <TextInput {...props} editable maxLength={maxLength} />;
};

function ReasonScreen() {
  const navigation = useNavigation<reasonScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, "Reason">>();
  const preferedAnimal = route.params.preferredAnimal;

  const [value, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_view}>
        <Text style={styles.text}>Okay. You prefer {preferedAnimal}.</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>Why do you prefer them?</Text>
      </View>
      <TextInput
        multiline
        editable
        maxLength={40}
        style={styles.reason_input}
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <View style={styles.button_view}>
        <Button
          title="send"
          color="green"
          onPress={() =>
            navigation.navigate("Reason", { preferredAnimal: value })
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default ReasonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text_view: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    color: "green",
  },
  reason_input: {
    height: 200,
    marginHorizontal: 5,
    marginBottom: 30,
    borderWidth: 1,
    padding: 5,
  },
  button_view: { marginBottom: 20, marginHorizontal: 50 },
});
