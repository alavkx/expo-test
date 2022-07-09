// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

export default function App() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => setPressed(true)} style={styles.buttonSecondary}>
        <Text style={styles.text}>Press me</Text>
      </Pressable>
      {pressed ? <Text style={styles.text}>sekohara desu</Text> : null}
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
  buttonSecondary: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "1.5rem",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 16,
    height: 32,
    fontWeight: "bold",
  },
  text: {
    color: "#eee"
  }
});
