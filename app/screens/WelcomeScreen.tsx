import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeLogo from "../components/WelcomeScreen/WelcomeLogo";
import WelcomeButton from "../components/WelcomeScreen/WelcomeButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <WelcomeLogo />
        <WelcomeButton />
        <View style={styles.btnContainer}>
          <Button
            title="Create a new account"
            color="#1E1E1E"
            onPress={() => navigation.navigate("emailInput")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    textDecorationLine: "solid",
  },
});

export default WelcomeScreen;
