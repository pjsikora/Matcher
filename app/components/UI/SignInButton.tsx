import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";

interface RegisterButtonProps {
  toScreen: string;
  navigation: any;
}
const SignInButton = ({ toScreen, navigation }: RegisterButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(toScreen)}
      style={styles.btn}
    >
      <Text style={styles.btnTitle}>Log In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C04D9F",
    borderRadius: 15,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
    marginBottom: 50,
  },
  btnTitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 28,
  },
});
export default SignInButton;
