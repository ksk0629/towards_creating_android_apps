import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackParams";

type redirectScreenProp = StackNavigationProp<RootStackParamList, "Redirect">;

function RedirectScreen() {
  console.log("START RedirectScreen.");

  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      const count = await AsyncStorage.getItem("count"); // 保存されたcount（文字列）の取得

      setCount(Number(count || 0) + 1); // Numberにキャストしてインクリメント
    })();
  }, []);

  useEffect(() => {
    if (count) {
      AsyncStorage.setItem("count", String(count)); // Stringにキャストして保存
    }
  }, [count]);

  console.log(`count is ${count}.`);

  const navigation = useNavigation<redirectScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, "Redirect">>();
  const reason = route.params.reason;
  const preDeltaTime = 5;
  const deltaTime = preDeltaTime * 1000;

  window.setTimeout(() => navigation.navigate("Home"), deltaTime);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_view}>
        <Text style={styles.text}>Okay. Your reason is</Text>
        <Text style={styles.reason_text}>"{reason}".</Text>
        <Text style={styles.text}>Okay. I got it.</Text>
        <Text style={styles.text}>
          This screen is going to redirect to the home screen in {preDeltaTime}{" "}
          seconds by the way.
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default RedirectScreen;

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
    fontSize: 20,
    textAlign: "center",
    color: "green",
  },
  reason_text: {
    fontSize: 30,
    textAlign: "center",
    color: "green",
  },
});
