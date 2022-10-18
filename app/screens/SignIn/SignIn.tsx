import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignInButton from "../../components/UI/SignInButton";
import WelcomeLogo from "../../components/WelcomeScreen/WelcomeLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface EmailScreenProps {
  navigation: any;
}

const SignInScreen = ({ navigation }: EmailScreenProps) => {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        extraScrollHeight={150}
      >
        <LinearGradient
          colors={["#AD439C", "#FAAEBE"]}
          style={styles.linearGradient}
        >
          <WelcomeLogo />
          <View style={styles.inputsContainer}>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require("../../images/pinkEmailIcon.png")}
              />
              <TextInput
                style={styles.input}
                // autoFocus={true}
                onChangeText={(newText) => setText(newText)}
                placeholder="Email"
                placeholderTextColor="#ABABAB"
              />
            </View>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require("../../images/pinkLockIcon.png")}
              />
              <TextInput
                secureTextEntry={isPasswordSecured}
                style={styles.input}
                onChangeText={(newPassword) => setPassword(newPassword)}
                placeholder="Password"
                placeholderTextColor="#ABABAB"
              />
              <TouchableOpacity
                style={styles.iconRight}
                onPress={() => {
                  setIsPasswordSecured(!isPasswordSecured);
                }}
              >
                <Image
                  source={
                    isPasswordSecured
                      ? require("../../images/pinkEyeIcon.png")
                      : require("../../images/eyeSlashIcon.png")
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <SignInButton toScreen="Welcome" navigation={navigation} />
          <Image
            style={styles.bcgHearths}
            source={require("../../images/Hearts.png")}
          />
        </LinearGradient>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "100%",
  },
  linearGradient: {
    borderRadius: 5,
    minHeight: "100%",
    width: "100%",
  },
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    minHeight: "64%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    marginTop: "5%",
    marginBottom: "5%",
    width: "80%",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  inputsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "8%",
  },
  textInputContainer: {
    width: "80%",
    backgroundColor: "#F7F7F7",
    height: 70,
    padding: 10,
    marginBottom: "5%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: "80%",
    height: "100%",
    color: "#ABABAB",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    lineHeight: 25,
    fontSize: 18,
  },
  icon: {
    marginTop: "5%",
    marginRight: "5%",
  },
  iconRight: {
    marginTop: "6%",
    marginLeft: "4%",
  },
  inputContainer: {
    display: "flex",
    width: "90%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  btn: {},
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});

export default SignInScreen;
