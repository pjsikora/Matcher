import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeLogo from "../components/WelcomeScreen/WelcomeLogo";

interface EmailScreenProps {
  navigation: any;
}
const WelcomeScreen = ({ navigation }: EmailScreenProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <WelcomeLogo navigation={navigation} isWelcomeScreen={true} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("signIn")}
        >
          <Image
            style={styles.icon}
            source={require("../images/signInEmailVector.png")}
          />
          <Text style={styles.title}>SIGN IN WITH EMAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("emailInput")}
          style={styles.btnContainer}
        >
          <Text style={styles.btnText}>Create a new account</Text>
        </TouchableOpacity>
        <Image
          style={styles.bcgHearths}
          source={require("../images/Hearts.png")}
        />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    textDecorationLine: "solid",
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
  btnText: {
    textDecorationLine: "underline",
    fontSize: 16,
    fontFamily: "montRegular",
  },
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
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginRight: "3%",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "montMedium",
  },
});

export default WelcomeScreen;
