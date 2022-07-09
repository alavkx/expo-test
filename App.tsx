// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

export default function App() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => setPressed(true)} style={styles.button}>
        <Text>Press me</Text>
      </Pressable>
      {pressed ? <Text>sekohara desu</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "1.5rem",
    borderRadius: 3,
    paddingHorizontal: 16,
    height: 32,
    fontWeight: "bold",
    backgroundColor: "#eee",
  },
});
