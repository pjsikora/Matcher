import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeLogo from "../components/WelcomeScreen/WelcomeLogo";
import WelcomeButton from "../components/WelcomeScreen/WelcomeButton";

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
        <WelcomeLogo />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("signIn")}
        >
          <Text style={styles.title}>SIGN IN WITH EMAIL</Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <Button
            title="Create a new account"
            color="#1E1E1E"
            onPress={() => navigation.navigate("emailInput")}
          />
        </View>
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
    flexDirection: "column",
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

export default WelcomeScreen;
