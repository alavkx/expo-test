// import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import Sun from "./assets/radix-icons/double-arrow-left.svg";

export default function App() {
  const [pressed, setPressed] = React.useState(false);
  const [loaded] = useFonts({
    "200": require("./assets/fonts/TitilliumWeb-ExtraLight.ttf"),
    "300": require("./assets/fonts/TitilliumWeb-Light.ttf"),
    "400": require("./assets/fonts/TitilliumWeb-Regular.ttf"),
    "600": require("./assets/fonts/TitilliumWeb-SemiBold.ttf"),
    "700": require("./assets/fonts/TitilliumWeb-Bold.ttf"),
  });
  if (!loaded) return null;
  return (
    <LinearGradient
      colors={[
        "hsl(272, 15%, 21%)",
        "hsl(272, 12%, 20%)",
        "hsl(273, 9%, 19%)",
        "hsl(273, 5%, 17%)",
        "hsl(273, 3%, 15%)",
      ]}
      locations={[0, 0.36, 0.49, 0.63, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0.7 }}
      style={styles.background}
    >
      <Card>
        <Pressable
          onPress={() => setPressed((p) => !p)}
          style={styles.buttonSecondary}
        >
          <Text style={styles.text}>
            {pressed ? "セクハラです" : "Press me"}
          </Text>
          <Sun />
        </Pressable>
      </Card>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  buttonSecondary: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#bbb",
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "hsl(344, 5%, 12%)",
  },
  text: {
    fontFamily: "300",
    color: "#bbb",
    fontWeight: "700",
    fontSize: 24,
  },
});

interface CardProps {
  children: JSX.Element;
}
function Card({ children }: CardProps) {
  return (
    //  this fucking gradient doesnt work
    <LinearGradient
      style={cardStyles.background}
      colors={["hsl(344, 4%, 13%)", "hsl(344, 4%, 14%)", "hsl(344, 4%, 15%)"]}
      start={{ x: 1, y: 0.3 }}
    >
      {children}
    </LinearGradient>
  );
}
const cardStyles = StyleSheet.create({
  background: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "hsl(344, 5%, 13%)",
  },
});
