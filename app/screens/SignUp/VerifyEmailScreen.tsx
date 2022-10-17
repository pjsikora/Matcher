import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../../redux/registerSlice";

interface EmailScreenProps {
  navigation: any;
}
const VerifyEmailScreen = ({ navigation }: EmailScreenProps) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RegisterUserData) => state);

  const emailHandler = (email: string) => {
    dispatch(addEmail(email));
    console.log(count);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Verify Your Email...</Text>
          <Image
            style={styles.icon}
            source={require("../../images/mailIcon.png")}
          />
          <Text style={styles.desc}>
            A cerification code has been sent to your email adress
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => emailHandler(newText)}
            placeholder="Enter verification code"
            placeholderTextColor="#ABABAB"
          />
          <RegisterButton toScreen="Welcome" navigation={navigation} />
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
  linearGradient: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    minHeight: "60%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    marginTop: "5%",
    marginBottom: "15%",
    width: "80%",
  },
  icon: {
    marginTop: "5%",
  },
  desc: {
    fontSize: 12,
    marginTop: "2%",
    marginBottom: "5%",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  input: {
    width: "50%",
    height: "10%",
    marginTop: "2%",
    marginBottom: "15%",
    textAlign: "center",
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    lineHeight: 35,
    fontSize: 20,
  },
  btn: {},
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default VerifyEmailScreen;
