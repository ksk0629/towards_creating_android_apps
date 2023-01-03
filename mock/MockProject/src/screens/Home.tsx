import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackParams";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

function HomeScreen() {
  console.log("START HomeScreen.");

  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      const count = await AsyncStorage.getItem("count"); // 保存されたcount（文字列）の取得

      setCount(Number(count || 0)); // Numberにキャスト
    })();
  }, []);

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
        <Text />
        <Button
          title="clear data"
          color="green"
          onPress={() => AsyncStorage.clear()}
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
  clear_button_view: {
    flex: 1,
    marginHorizontal: 50,
  },
});
