import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

interface EmailScreenProps {
  navigation: any;
}
const WelcomeButton = ({ navigation }: EmailScreenProps) => {
  const buttonPressHandler = () => {};

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate("signIn")}
    >
      <Text style={styles.title}>SIGN IN WITH EMAIL</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C04D9F",
    borderRadius: 10,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 57,
    marginTop: "50%",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default WelcomeButton;
