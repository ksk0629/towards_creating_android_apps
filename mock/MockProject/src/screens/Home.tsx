import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackParams";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home_text_view}>
        <Text style={styles.home_text}>Cats or Dogs?</Text>
      </View>
      <View style={styles.home_button_view}>
        <Button
          title="let's get started!"
          color="green"
          onPress={() => navigation.navigate("Question")}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 80,
    // marginBottom: 50,
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
