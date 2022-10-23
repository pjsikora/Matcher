import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/registerSlice";
import { activationCall } from "../../controllers/loginController";
import BackButton from "../../components/UI/BackButton";

interface EmailScreenProps {
  route: any;
  navigation: any;
}
const VerifyEmailScreen = ({ route, navigation }: EmailScreenProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  console.log(route.params.email);

  const dispatch = useDispatch();
  const count = useSelector((state: RegisterUserData) => state);

  const activationHandler = async () => {
    const result = await activationCall({
      email: route.params.email.toLowerCase(),
      code,
    });

    console.log(result);
    if (result.success) {
      Alert.alert("Activation", "Tu bedzie przekierowanie", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      setError(result.message);
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (code) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [code]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#AD439C", "#FAAEBE"]}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <BackButton navigation={navigation} />
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
              onChangeText={(code) => setCode(code)}
              placeholder="Enter verification code"
              placeholderTextColor="#ABABAB"
            />
            <Text style={styles.error}>{error && error}</Text>
            <RegisterButton
              isDisabled={isDisabled}
              toScreen="Welcome"
              navigation={navigation}
              callback={activationHandler}
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
    minHeight: "60%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    marginBottom: "15%",
    width: "80%",
    fontFamily: "montSBold",
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
  error: {
    color: "red",
    marginBottom: "5%",
  },
});
export default VerifyEmailScreen;
