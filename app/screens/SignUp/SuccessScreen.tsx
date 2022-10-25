import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RegisterButton from "../../components/UI/RegisterButton";

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
          <Text style={styles.title}>Success!</Text>
          <Image
            style={styles.imageContainer}
            source={require("../../images/successIcon.png")}
          />
          <Text style={styles.text}>Your account has been created</Text>
          <Text style={styles.grayText}>
            Please log in and verify your account
          </Text>
          <RegisterButton
            isDisabled={false}
            toScreen="Welcome"
            navigation={navigation}
          />
        </View>
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
    height: "65%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
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
    color: "#1E1E1E",
    fontSize: 48,
    width: "80%",
    fontFamily: "montSBold",
    marginTop: "25%",
  },
  imageContainer: {
    marginTop: "15%",
  },
  text: {
    fontSize: 20,
    fontFamily: "montRegular",
    marginTop: "5%",
    color: "#1E1E1E",
  },
  grayText: {
    marginTop: "8%",
    color: "#ABABAB",
    fontFamily: "montMedium",
    fontSize: 16,
    marginBottom: "13%",
  },
});

export default SuccessScreen;
