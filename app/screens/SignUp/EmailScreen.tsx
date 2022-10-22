import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/registerSlice";
import { validators } from "../../validators/validators";
import { checkEmailCall } from "../../controllers/registerController";
import BackButton from "../../components/UI/BackButton";

interface EmailScreenProps {
  navigation: any;
}
const EmailScreen = ({ navigation }: EmailScreenProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RegisterUserData) => state);

  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const checkEmailExist = async () => {
    const result: any = await checkEmailCall(email);

    if (result) setError("This email address is taken");
    else navigation.navigate("passwordInput");
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (validators.email.test(email)) {
        setError("");
        dispatch(addItem({ value: "email", data: email }));
        setIsDisabled(false);
      } else {
        setError("Invalid email address");
        setIsDisabled(true);
      }
    }

    console.log(error);

    return () => {
      isMounted = false;
    };
  }, [email]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#AD439C", "#FAAEBE"]}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <BackButton navigation={navigation} />
            <Text style={styles.title}>Your Email is...</Text>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require("../../images/mailVector.png")}
              />
              <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder="Enter your email"
                placeholderTextColor="#ABABAB"
              />
            </View>
            <Text style={styles.error}>{email && error}</Text>
            <RegisterButton
              isDisabled={isDisabled}
              toScreen="passwordInput"
              navigation={navigation}
              callback={checkEmailExist}
            />
          </View>
          <Image
            style={styles.bcgHearths}
            source={require("../../images/Hearts.png")}
          />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
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
    minHeight: "50%",
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
    fontFamily: "montSBold",
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
    marginTop: "15%",

    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: "90%",
    height: "100%",
    color: "#ABABAB",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    lineHeight: 23,
    fontFamily: "montRegular",
  },
  icon: {
    marginTop: "8%",
    marginRight: "2%",
  },
  btn: {},
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
  error: {
    color: "red",
    marginTop: "2%",
    marginBottom: "15%",
  },
});
export default EmailScreen;
