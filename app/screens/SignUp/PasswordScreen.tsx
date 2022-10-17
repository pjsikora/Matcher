import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserData } from "../../types/types";
import { addPassword } from "../../redux/registerSlice";

interface PasswordScreenProp {
  navigation: any;
}
const PasswordScreen = ({ navigation }: PasswordScreenProp) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RegisterUserData) => state);

  const [isPasswordSecured, setIsPasswordSecured] = useState(true);

  const emailHandler = (password: string) => {
    dispatch(addPassword(password));
    console.log(count);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Your Password is...</Text>
          <View style={styles.textInputContainer}>
            <Image
              style={styles.icon}
              source={require("../../images/lockIcon.png")}
            />
            <TextInput
              secureTextEntry={isPasswordSecured}
              style={styles.input}
              onChangeText={(newText) => emailHandler(newText)}
              placeholder="Enter your password"
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
                    ? require("../../images/eyeIcon.png")
                    : require("../../images/eyeSlashIcon.png")
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <Image
              style={styles.icon}
              source={require("../../images/lockIcon.png")}
            />
            <TextInput
              secureTextEntry={isPasswordSecured}
              style={styles.input}
              onChangeText={(newText) => emailHandler(newText)}
              placeholder="Confirm your password"
              placeholderTextColor="#ABABAB"
            />
          </View>

          <RegisterButton toScreen="nameInput" navigation={navigation} />
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
  textInputContainer: {
    width: "80%",
    backgroundColor: "#F7F7F7",
    height: "12%",
    padding: 10,
    marginBottom: "10%",
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
  },
  icon: {
    marginTop: "5%",
    marginRight: "5%",
  },
  iconRight: {
    marginTop: "5%",
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
export default PasswordScreen;
