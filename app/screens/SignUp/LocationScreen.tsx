import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";

interface EmailScreenProps {
  navigation: any;
}
const LocationScreen = ({ navigation }: EmailScreenProps) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state: RegisterUserData) => state);

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (text.length > 2) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [text]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Your Localization is...</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => setText(newText)}
            value={text}
            placeholder="Enter your city"
            placeholderTextColor="#ABABAB"
          />
          <Text style={styles.desc}>Your location will be public</Text>
          <RegisterButton
            isDisabled={isDisabled}
            toScreen="success"
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
    fontSize: 50,
    marginTop: "5%",
    marginBottom: "2%",
    width: "80%",
    fontFamily: "montMedium",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  input: {
    width: "80%",
    height: "10%",
    marginTop: "20%",
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    lineHeight: 35,
    fontSize: 20,
    fontFamily: "montRegular",
  },
  desc: {
    fontSize: 12,
    marginBottom: "10%",
    color: "#ABABAB",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginTop: 2,
    fontFamily: "montRegular",
  },
  btn: {},
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default LocationScreen;
