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
import RegisterButton from "../../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/registerSlice";
import { validators } from "../../../validators/validators";
import { checkEmailCall } from "../../../controllers/registerController";
import BackButton from "../../../components/UI/BackButton";

interface ForgotPasswordScreenProps {
  navigation: any;
}
const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const state = useSelector((state: any) => state.registerData);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);

  const checkEmailExist = async () => {
    const result: any = await checkEmailCall(email.toLowerCase(), dispatch);
    Keyboard.dismiss;
    if (result) {
      setIsCorrectEmail(true);
      if (isCorrectEmail) {
        navigation.navigate("resetPassword");
      }
    } else setError("We couldn't find your email");
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (validators.email.test(email)) {
        setError("");
        dispatch(addItem({ value: "email", data: email.toLowerCase() }));
        setIsDisabled(false);
      } else {
        setError("Invalid email address");
        setIsDisabled(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [email]);

  useEffect(() => {
    let isMounted = true;

    isMounted && setLoading(state.pending);

    return () => {
      isMounted = false;
    };
  }, [state.pending]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#AD439C", "#FAAEBE"]}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <BackButton navigation={navigation} />
            <Text style={styles.title}>Forgot Your Password?</Text>
            <Text
              style={{
                fontSize: 13,
                width: "80%",
                color: "#1E1E1E",
                fontFamily: "montMedium",
                marginTop: "10%",
                letterSpacing: -0.5,
              }}
            >
              Enter your email below to reset your password
            </Text>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require("../../../images/mailVector.png")}
              />
              <TextInput
                pointerEvents="box-only"
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder="Enter your email"
                placeholderTextColor="#ABABAB"
              />
            </View>
            {isCorrectEmail && (
              <Text
                style={{
                  fontSize: 13,
                  width: "80%",
                  color: "#1E1E1E",
                  fontFamily: "montMedium",
                  marginTop: "10%",
                  letterSpacing: -0.5,
                }}
              >
                Verificaton code has been sent!
              </Text>
            )}
            {isCorrectEmail && (
              <View style={styles.textInputContainer}>
                <TextInput
                  pointerEvents="box-only"
                  style={styles.input}
                  placeholder="Enter verification code"
                  placeholderTextColor="#ABABAB"
                />
              </View>
            )}
            <Text style={styles.error}>{email && error}</Text>
            <RegisterButton
              isDisabled={isDisabled}
              toScreen="resetPassword"
              navigation={navigation}
              callback={checkEmailExist}
            />
          </View>
          <Image
            style={styles.bcgHearths}
            source={require("../../../images/Hearts.png")}
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
    fontSize: 40,
    width: "80%",
    fontFamily: "montSBold",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  textInputContainer: {
    width: "80%",
    height: 60,
    padding: 10,
    marginTop: "5%",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: "90%",
    height: "100%",
    color: "#1E1E1E",
    lineHeight: 23,
    fontFamily: "montRegular",
  },
  icon: {
    marginTop: 16,
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
export default ForgotPasswordScreen;
