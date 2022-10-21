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

interface EmailScreenProps {
  navigation: any;
}
const SuccessScreen = ({ navigation }: EmailScreenProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text>Register went succesful</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.title}>BACK TO MAIN MENU</Text>
        </TouchableOpacity>
        <Image
          style={styles.bcgHearths}
          source={require("../../images/Hearts.png")}
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
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height: "55%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
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

export default SuccessScreen;
