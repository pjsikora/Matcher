import React, { useState, useEffect } from "react";
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
import { addItem } from "../../redux/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserData } from "../../types/types";

interface EmailScreenProps {
  navigation: any;
}
const AgeScreen = ({ navigation }: EmailScreenProps) => {
  const [age, setAge] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state: RegisterUserData) => state);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (+age > 17 && +age < 100) {
        setIsDisabled(false);
        setError("");
        dispatch(addItem({ value: "age", data: age }));
        console.log(state);
      } else {
        setIsDisabled(true);
        if (+age < 18) {
          setError("You are too young :(");
        } else {
          setError("You are too old :(");
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, [age]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#AD439C", "#FAAEBE"]}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <Text style={styles.title}>What's your age?</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(age) => setAge(age)}
              value={age}
              placeholder="Age"
              placeholderTextColor="#ABABAB"
            />
            <Text style={styles.error}>{age && error}</Text>
            <RegisterButton
              isDisabled={isDisabled}
              toScreen="genderInput"
              navigation={navigation}
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
    width: "80%",
    marginTop: "10%",
    fontFamily: "montRegular",
  },
  error: {
    color: "red",
    marginTop: "2%",
    marginBottom: "15%",
    height: 25,
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  input: {
    width: "20%",
    height: "10%",
    marginTop: "15%",
    marginBottom: "15%",
    textAlign: "center",
    fontSize: 24,
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    fontFamily: "montRegular",
  },
  btn: {},
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default AgeScreen;
