import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserData } from "../../types/types";
import { addItem } from "../../redux/registerSlice";

interface EmailScreenProps {
  navigation: any;
}
const NameScreen = ({ navigation }: EmailScreenProps) => {
  const [name, setName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state: RegisterUserData) => state);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (name.length > 1) {
        setIsDisabled(false);
        dispatch(addItem({ value: "username", data: name }));
      } else {
        setIsDisabled(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [name]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Your Name is...</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setName(name)}
            value={name}
            placeholder="Enter your name"
            placeholderTextColor="#ABABAB"
          />
          <Text style={styles.desc}>
            This is how it will appear on your profile
          </Text>
          <RegisterButton
            isDisabled={isDisabled}
            toScreen="ageInput"
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
    height: "60%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    marginTop: "5%",
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
export default NameScreen;
